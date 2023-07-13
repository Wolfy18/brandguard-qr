<?php

/**
 * Product List
 * A class which represents Product list operations and renderization.
 *
 * @package BakExtension\controllers
 * @version 1.0.0
 * @since   1.0.0
 */

namespace BakExtension\controllers;

defined('ABSPATH') || exit;

use BakExtension\api\RestAdapter;
use BakExtension\controllers\Product;

class ProductList
{
	private static $adapter;

	protected function __construct()
	{
	}

	public static function bak_fingerprint_column($columns)
	{
		$columns['asset_fingerprint'] = __('Token');

		return $columns;
	}

	public static function bak_fingerprint_column_data($column, $post_id)
	{

		switch ($column) {
			case 'asset_fingerprint': // This has to match to the defined column in function above
				$get_fingerprint = get_post_meta($post_id, 'bk_token_fingerprint', true);
				$get_status = get_post_meta($post_id, 'bk_token_status', true);
				if ($get_fingerprint) {
					echo "<a target='_blank' rel='nofollow' href='https://cexplorer.io/asset/" . esc_html($get_fingerprint) . "'>" . esc_html($get_fingerprint) . "</a>";
				} else {
					echo esc_html($get_status);
				}
				break;
		}
	}

	private static function bak_get_filter_options()
	{
		$options = [
			[
				'name' => 'Filter by Tokenization Status',
				'value' => '',
				'selected' => (!isset($_GET['tokenize']) || empty($_GET['tokenize'])) ? 'selected' : '',
			],
			[
				'name' => 'Tokenized',
				'value' => 'yes',
				'selected' => (isset($_GET['tokenize']) && $_GET['tokenize'] == 'yes') ? 'selected="selected"' : '',
			],
			[
				'name' => 'Non-Token',
				'value' => 'no',
				'selected' => (isset($_GET['tokenize']) && $_GET['tokenize'] == 'no') ? 'selected="selected"' : '',
			],
		];

		// html
		$output = '';
		foreach ($options as $option) {
			$output .= '<option value="' . $option['value'] . '" ' . $option['selected'] . '>' . $option['name'] . '</option>';
		}

		return $output;
	}

	public static function bak_custom_filter($output)
	{
		global $wp_query;
		$output .= '<select class="token-filter dropdown_product_cat" name="tokenize">' . self::bak_get_filter_options() . '</select>';

		return $output;
	}

	public static function bak_products_filter_query($query)
	{
		if (is_admin()) {
			if (isset($_GET['tokenize']) && !empty($_GET['tokenize'])) {

				$meta_query = (array) $query->get('meta_query');

				if ($_GET['tokenize'] == "yes") {
					$meta_query[] = [
						'relation' => "AND",
						array(
							'key' => 'bk_token_fingerprint',
							'compare' => 'EXISTS',
						),
						array(
							'key' => 'bk_token_fingerprint',
							'compare' => '!=',
							"value" => ""
						)

					];
				} else {
					$meta_query[] = [
						'relation' => "OR",
						array(
							'key' => 'bk_token_fingerprint',
							'compare' => "NOT EXISTS",
						),
						array(
							'key' => 'bk_token_fingerprint',
							'compare' => "=",
							'value' => ""
						)

					];
				}


				$query->set('meta_query', $meta_query);
			}
		}
	}

	public static function add_mint_bulk_action($actions)
	{
		$actions['mint'] = 'Mint as Tokens';
		return $actions;
	}

	public static function handle_mint_bulk_action_ajax()
	{
		if (isset($_REQUEST['action']) && $_REQUEST['action'] === 'mint_bulk_action') {
			// Perform your custom action here using the $_REQUEST data

			$func = function ($id) {

				$bk_token_att = get_post_meta($id, 'bk_att_token_image', true);

				if (!$bk_token_att) {
					$featured_image_url = get_the_post_thumbnail_url($id, 'full');

					if (!$featured_image_url) {
						$featured_image_url = wc_placeholder_img_src();
					}

					$bk_token_att = attachment_url_to_postid($featured_image_url);
				}

				$img_metadata = wp_get_attachment_metadata($bk_token_att);
				$img_ipfs = null;
				if ($img_metadata && array_key_exists('ipfs', $img_metadata)) {
					$img_ipfs = $img_metadata['ipfs'];
				}

				if (!$img_ipfs) {
					$img_ipfs = get_post_meta($id, 'bk_token_image', true);
				}

				return array(
					'product_id' => $id,
					'image' => $img_ipfs,
					'name' => get_the_title($id),
					// 'short_description' => wp_trim_excerpt(get_post_field('post_excerpt', $id))
				);
			};

			$response = array(
				'success' => true,
				'message' => 'Minting selected products!',
				'data' => array_map($func, $_POST['product_ids'])
			);
		} else {
			$response = array(
				'success' => false,
				'message' => 'Invalid action.',
			);
		}

		wp_send_json($response);
	}

	public static function handle_upload_ipfs_bulk_action_ajax()
	{
		if (isset($_REQUEST['action']) && $_REQUEST['action'] === 'upload_ipfs_bulk_action') {
			// Perform your custom action here using the $_REQUEST data

			$func = function ($id) {
				$featured_image_url = get_the_post_thumbnail_url($id, 'full');

				if (!$featured_image_url) {
					$featured_image_url = wc_placeholder_img_src();
				}

				if (!self::$adapter) {
					self::$adapter = new RestAdapter();
				}

				$bak_file = self::$adapter->upload_attachment_to_ipfs_from_url($featured_image_url);

				$img_ipfs = $bak_file->{'ipfs'};

				// grab the product
				$product = wc_get_product($id);

				// save the custom SKU using WooCommerce built-in functions
				$product->update_meta_data('bk_token_image', $img_ipfs);
				$product->update_meta_data('bk_att_token_image', $img_ipfs);

				$attachment_id = attachment_url_to_postid($featured_image_url);
				if ($attachment_id) {
					$img_metadata = wp_get_attachment_metadata($attachment_id);
					$img_metadata['ipfs'] = $img_ipfs;
					wp_update_attachment_metadata($attachment_id, $img_metadata); // save it back to the db
				}

				return array(
					'product_id' => $id,
					'image' => $img_ipfs,
				);
			};

			$response = array(
				'success' => true,
				'message' => 'Uploaded images for selected products!',
				'data' => array_map($func, $_POST['product_ids'])
			);
		} else {
			$response = array(
				'success' => false,
				'message' => 'Invalid action.',
			);
		}

		wp_send_json($response);
	}

	public static function handle_access_token_action_ajax()
	{
		if (isset($_REQUEST['action']) && $_REQUEST['action'] === 'access_token_action') {
			// Perform your custom action here using the $_REQUEST data

			if (!self::$adapter) {
				self::$adapter = new RestAdapter();
			}

			$access = self::$adapter->generate_access_token();

			$response = array(
				'success' => true,
				'message' => 'Access Token',
				'data' => $access,
				'testnet' => self::$adapter->settings['testnet'] == "yes" ? true : false
			);
		} else {
			$response = array(
				'success' => false,
				'message' => 'Invalid action.',
			);
		}

		wp_send_json($response);
	}

	public static function update_record($post_id, $data)
	{
		// throw new Exception("failed!");
		// grab the custom SKU from $_POST
		$bk_token_uuid = isset($data['bk_token_uuid']) ? sanitize_text_field($data['bk_token_uuid']) : '';
		$bk_token_policy = isset($data['bk_token_policy']) ? sanitize_text_field($data['bk_token_policy']) : '';
		$bk_token_fingerprint = isset($data['bk_token_fingerprint']) ? sanitize_text_field($data['bk_token_fingerprint']) : '';
		$bk_token_asset_name = isset($data['bk_token_asset_name']) ? sanitize_text_field($data['bk_token_asset_name']) : '';
		$bk_token_name = isset($data['bk_token_name']) ? sanitize_text_field($data['bk_token_name']) : '';
		$bk_token_image = isset($data['bk_token_image']) ? sanitize_text_field($data['bk_token_image']) : '';
		$bk_token_amount = isset($data['bk_token_amount']) ? sanitize_text_field($data['bk_token_amount']) : '';
		$bk_token_status = isset($data['bk_token_status']) ? sanitize_text_field($data['bk_token_status']) : '';
		$bk_token_transaction = isset($data['bk_token_transaction']) ? sanitize_text_field($data['bk_token_transaction']) : '';
		$bk_token_json = isset($data['bk_token_json']) ? sanitize_text_field($data['bk_token_json']) : '';

		// Update attachment, token_image rel
		$bk_att_token_image = isset($data['bk_att_token_image']) ? sanitize_text_field($data['bk_att_token_image']) : '';

		// if ($bk_token_image != '' && $bk_token_uuid != '' && $bk_att_token_image == '') {
		// 	# Insert attachment
		// 	$att_id = RestAdapter::insert_attachment_from_ipfs($bk_token_image, $post_id);
		// 	$bk_att_token_image = $att_id;
		// }

		// grab the product
		$product = wc_get_product($post_id);

		// save the custom SKU using WooCommerce built-in functions
		$product->update_meta_data('bk_token_uuid', $bk_token_uuid);
		$product->update_meta_data('bk_token_policy', $bk_token_policy);
		$product->update_meta_data('bk_token_fingerprint', $bk_token_fingerprint);
		$product->update_meta_data('bk_token_asset_name', $bk_token_asset_name);
		$product->update_meta_data('bk_token_name', $bk_token_name);
		$product->update_meta_data('bk_token_image', $bk_token_image);
		$product->update_meta_data('bk_token_amount', $bk_token_amount);
		$product->update_meta_data('bk_token_status', $bk_token_status);
		$product->update_meta_data('bk_token_transaction', $bk_token_transaction);
		$product->update_meta_data('bk_token_json', $bk_token_json);
		$product->update_meta_data('bk_att_token_image', $bk_att_token_image);

		$product->save();

		return $product;
	}

	public static function handle_update_records_action_ajax()
	{
		if (isset($_REQUEST['action']) && $_REQUEST['action'] === 'update_records_action') {
			// Perform your custom action here using the $_REQUEST data

			$func = function ($product) {

				$data = array(
					'bk_token_uuid' => $product['uuid'],
					// 'bk_token_policy' =>  $bk_token_policy,
					'bk_token_asset_name' => $product['asset_name'],
					'bk_token_name' => $product['name'],
					'bk_token_image' => $product['image'],
					'bk_token_amount' => $product['amount'],
					'bk_token_status' => $product['status'],
					'bk_token_transaction' => $product['transaction'],
					'bk_att_token_image' => $product['image'],
				);

				return self::update_record($product["product_id"], $data);
			};

			$response = array(
				'success' => true,
				'message' => 'Updated record',
				'data' => array_map($func, $_POST['products'])
			);
		} else {
			$response = array(
				'success' => false,
				'message' => 'Invalid action.',
			);
		}

		wp_send_json($response);
	}
}
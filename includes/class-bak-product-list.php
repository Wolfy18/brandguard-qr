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
class ProductList
{

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
				echo "<a target='_blank' rel='nofollow' href='https://cexplorer.io/asset/" . esc_html($get_fingerprint) . "'>" . esc_html($get_fingerprint) . "</a>";
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
				$meta_query[] = [
					'key' => 'bk_token_fingerprint',
					// replace with your own meta key
					'value' => '',
					'compare' => ($_GET['tokenize'] == "yes") ? '!=' : "=",
				];

				$query->set('meta_query', $meta_query);
			}
		}
	}
}
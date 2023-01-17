<?php
/**
 * Order Item
 *
 * A class which represents an item within an order and handles CRUD.
 * Uses ArrayAccess to be BW compatible with WC_Orders::get_items().
 *
 * @package WooCommerce\Classes
 * @version 3.0.0
 * @since   3.0.0
 */

namespace BakExtension\controllers;

class ProductList
{

    protected function __construct()
    {

    }
}

//==================================== LIST SECTION ===================================
// Additional column in products list and filters
add_filter('manage_product_posts_columns', 'bak_fingerprint_column');
function bak_fingerprint_column($columns)
{
	$columns['asset_fingerprint'] = __('Token');

	return $columns;
}
// Show custom field in a new column
add_action('manage_product_posts_custom_column', 'bak_fingerprint_column_data', 10, 2);
function bak_fingerprint_column_data($column, $post_id)
{

	switch ($column) {
		case 'asset_fingerprint': // This has to match to the defined column in function above
			$get_fingerprint = get_post_meta($post_id, 'bk_token_fingerprint', true);
			echo "<a target='_blank' rel='nofollow' href='https://cexplorer.io/asset/" . $get_fingerprint . "'>" . $get_fingerprint . "</a>";
			break;
	}
}

// Filter render
function bak_get_filter_options()
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

// Define function to set your filter
add_filter('woocommerce_product_filters', 'bak_custom_filter');
function bak_custom_filter($output)
{
	global $wp_query;
	$output .= '<select class="token-filter dropdown_product_cat" name="tokenize">' . bak_get_filter_options() . '</select>';

	return $output;
}

// Set up the query
add_action('pre_get_posts', 'bak_products_filter_query');
function bak_products_filter_query($query)
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

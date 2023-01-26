<?php

/**
 * Plugin Name: WooCommerce Blockchain Extension
 * Developer URI: https://bakrypt.io
 * Plugin URI: https://bakrypt.io
 * Description: Mint your products into the Cardano Blockchain
 * Version: 1.0.0
 * Author: Wolfgang Leon
 * Author URI: https://bakrypt.io/
 * Developer: Wolfgang Leon
 * Developer URI: https://bakrypt.io/
 * Text Domain: bakrypt-wc-extension
 *
 * Woo: 12345:342928dfsfhsf8429842374wdf4234sfd
 * WC requires at least: 2.2
 * WC tested up to: 2.3
 *
 * License: GNU General Public License v3.0
 * License URI: http://www.gnu.org/licenses/gpl-3.0.html
 * 
 * Woo: 12345:342928dfsfhsf8429842374wdf4234sfd
 * @package WooCommerce\Admin
 */

/**
 * Register the JS.
 */
defined('ABSPATH') || exit;

define('WCBAK_ABSPATH', __DIR__ . '/');
define('WCBAK_PLUGIN_FILE', __FILE__);

if (!function_exists('woothemes_queue_update')) {
	require_once 'woo-includes/woo-functions.php';
}

# Autoload Classes with Composer
require_once "vendor/autoload.php";

function your_function_name($cart_item, $cart_item_key)
{
	// print_r($cart_item); // Output all cart item data
	var_dump("woocommerce after cart item name");
}
add_action(
	"woocommerce_after_cart_item_name",
	"your_function_name",
	10,
	2
);

// Add order item meta.
add_action(
	'woocommerce_new_order_item',
	'add_order_item_meta',
	10,
	3
);
function add_order_item_meta($item_id, $cart_item, $cart_item_key)
{
	var_dump("yes here");
	exit;
	if (isset($cart_item['custom_data'])) {
		$values =  array(1, 2, 3);
		$values = implode(
			', ',
			$values
		);
		wc_add_order_item_meta($item_id, __("Option", "aoim"), $values);
	}
}

add_action('woocommerce_checkout_create_order_line_item', 'wdm_add_custom_order_line_item_meta', 10, 4);

function wdm_add_custom_order_line_item_meta($item, $cart_item_key, $values, $order)
{
	var_dump("over here-------");
	exit;

	if (array_key_exists('wdm_name', $values)) {
		$item->add_meta_data('_wdm_name', $values['wdm_name']);
	}
}

function iconic_display_engraving_text_cart(
	$item_data,
	$cart_item
) {

	// if (empty($cart_item['iconic-engraving'])) {
	//     return $item_data;
	// }

	$item_data[] = array(
		'key'     => __('Engraving', 'iconic'),
		'value'   => wc_clean($cart_item['iconic-engraving']),
		'display' => 'yes! over here',
	);

	return $item_data;
}

add_filter('woocommerce_get_item_data', 'iconic_display_engraving_text_cart', 10, 2);



// Initiate wc bakrypt class
use BakExtension\core\BakWCExtension;

function wcbakrypt_init()
{
	BakWCExtension::init();
}

add_action('plugins_loaded', 'wcbakrypt_init', 11);
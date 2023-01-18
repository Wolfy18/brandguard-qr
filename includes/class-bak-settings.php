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

namespace BakExtension\core;

defined('ABSPATH') || exit;

class Settings
{

	public static $version = 'v1';

	public static $base = 'bak';

	public static function missing_wc_notice()
	{
		/* translators: %s WC download URL link. */
		echo '<div class="error"><p><strong>' . sprintf(esc_html__('WC Blockchain Extension requires WooCommerce to be installed and active. You can download %s here.', 'woocommerce-blockchain-extension'), '<a href="https://woocommerce.com/" target="_blank">WooCommerce</a>') . '</strong></p></div>';
	}

}

function bakrypt_wc_extension_activate()
{
	// Your activation logic goes here.

}
register_activation_hook(__FILE__, 'bakrypt_wc_extension_activate');


function bakrypt_wc_extension_deactivate()
{
	// Your deactivation logic goes here.
}
register_deactivation_hook(__FILE__, 'bakrypt_wc_extension_deactivate');

//==================================== MAIN ASSETS ===================================
// Register init script
function add_extension_register_script($page)
{
	$script_path = '/build/index.js';
	$script_asset_path = dirname(__FILE__) . '/build/index.asset.php';
	$script_asset = file_exists($script_asset_path)
		? require($script_asset_path)
		: array('dependencies' => array(), 'version' => filemtime($script_path));
	$script_url = plugins_url($script_path, __FILE__);

	wp_register_script(
		'bakrypt-wc-extension',
		$script_url,
		$script_asset['dependencies'],
		$script_asset['version'],
		true
	);

	wp_register_style(
		'bakrypt-wc-extension',
		plugins_url('/build/index.css', __FILE__),
		// Add any dependencies styles may have, such as wp-components.
		array(),
		filemtime(dirname(__FILE__) . '/build/index.css')
	);

	wp_enqueue_script('bakrypt-wc-extension');
	wp_enqueue_style('bakrypt-wc-extension');

	if ($page == 'post.php') {
		// Enqueue WordPress media scripts
		wp_enqueue_media();
	}
}

add_action('admin_enqueue_scripts', 'add_extension_register_script');



//==================================== WOOCOMMERCE SETTINGS SECTION ===================================
//https://www.youtube.com/watch?v=w29neDB7nLs&t=100s
add_filter('woocommerce_settings_tabs_array', "add_bak_settings", 50);
function add_bak_settings($settings_tabs)
{
	$settings_tabs['bak_settings'] = __('Blockchain', 'bak-woocommerce-settings-tab');
	return $settings_tabs;
}

add_action('woocommerce_settings_tabs_bak_settings', 'bak_add_bak_settings');

function bak_add_bak_settings()
{
	woocommerce_admin_fields(fetch_bak_settings());
}

add_action('woocommerce_update_options_bak_settings', 'bak_update_options_bak_settings');

function bak_update_options_bak_settings()
{
	woocommerce_update_options(fetch_bak_settings());
}

function fetch_bak_settings()
{
	$settings = array(
		'section_title' => array(
			'name' => __('Bakrypt API OAuth Credentials', 'bak-woocommerce-settings-tab'),
			'type' => 'title',
			'desc' => '',
			'id' => 'wc_settings_tab_demo_section_title'
		),
		'client_id' => array(
			'name' => __('ClientID', 'bak-woocommerce-settings-tab'),
			'type' => 'text',
			'desc' => __('Client Id value. You can find this in the user profile', 'bak-woocommerce-settings-tab'),
			'id' => 'wc_settings_tab_bak_client_id'
		),
		'client_secret' => array(
			'name' => __('Client Secret', 'bak-woocommerce-settings-tab'),
			'type' => 'password',
			'desc' => __('Client secret value. You can find this in the user profile', 'bak-woocommerce-settings-tab'),
			'id' => 'wc_settings_tab_bak_client_secret'
		),
		'username' => array(
			'name' => __('Username', 'bak-woocommerce-settings-tab'),
			'type' => 'text',
			'desc' => __('Bakrypt account. This is the email used to register.', 'bak-woocommerce-settings-tab'),
			'id' => 'wc_settings_tab_bak_username'
		),
		'password' => array(
			'name' => __('Password', 'bak-woocommerce-settings-tab'),
			'type' => 'password',
			'desc' => __('The password for the Bakrypt account.', 'bak-woocommerce-settings-tab'),
			'id' => 'wc_settings_tab_bak_password'
		),
		'testnet_client_id' => array(
			'name' => __('Testnet ClientID', 'bak-woocommerce-settings-tab'),
			'type' => 'text',
			'desc' => __('Testnet Client Id value. You can find this in the user profile', 'bak-woocommerce-settings-tab'),
			'id' => 'wc_settings_tab_bak_testnet_client_id'
		),
		'testnet_client_secret' => array(
			'name' => __('Testnet Client Secret', 'bak-woocommerce-settings-tab'),
			'type' => 'password',
			'desc' => __('Testnet Client secret value. You can find this in the user profile', 'bak-woocommerce-settings-tab'),
			'id' => 'wc_settings_tab_bak_testnet_client_secret'
		),
		'testnet_username' => array(
			'name' => __('Testnet Username', 'bak-woocommerce-settings-tab'),
			'type' => 'text',
			'desc' => __('Testnet Bakrypt account. This is the email used to register.', 'bak-woocommerce-settings-tab'),
			'id' => 'wc_settings_tab_bak_testnet_username'
		),
		'testnet_password' => array(
			'name' => __('Testnet Password', 'bak-woocommerce-settings-tab'),
			'type' => 'password',
			'desc' => __('The password for the Bakrypt account.', 'bak-woocommerce-settings-tab'),
			'id' => 'wc_settings_tab_bak_testnet_password'
		),
		'testnet_active' => array(
			'name' => __('Testnet Environment Activation', 'bak-woocommerce-settings-tab'),
			'type' => 'checkbox',
			'desc' => __('Testnet environment is active.', 'bak-woocommerce-settings-tab'),
			'id' => 'wc_settings_tab_bak_testnet_active'
		),
		'section_end' => array(
			'type' => 'sectionend',
			'id' => 'wc_settings_tab_bak_section_end'
		)
	);
	return apply_filters('wc_settings_tab_bak_settings', $settings);
}
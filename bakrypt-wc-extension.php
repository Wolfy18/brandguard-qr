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

// Initiate wc bakrypt class
use BakExtension\core\BakWCExtension;

function wcbakrypt_init()
{
	BakWCExtension::init();
}

add_action('plugins_loaded', 'wcbakrypt_init', 11);

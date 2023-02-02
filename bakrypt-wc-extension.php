<?php

/**
 * Plugin Name: Bakrypt Blockchain Extension
 * Plugin URI: https://bakrypt.io
 * Description: Mint your products into the Cardano Blockchain
 * Version: 1.0.0
 * Author: Wolfgang Leon
 * Author URI: https://bakrypt.io/
 * Developer: Wolfgang Leon
 * Developer URI: https://bakrypt.io/pool/
 * Text Domain: bakrypt-wc-extension
 * License: GNU General Public License v3.0
 * License URI: http://www.gnu.org/licenses/gpl-3.0.html
 * 
 * WC requires at least: 7.1
 * WC tested up to: 7.3.0
 *
 */

defined('ABSPATH') || exit;

define('WCBAK_ABSPATH', __DIR__ . '/');
define('WCBAK_PLUGIN_FILE', __FILE__);

# Autoload Classes with Composer
require_once "vendor/autoload.php";

// Initiate wc bakrypt class
use BakExtension\core\BakWCExtension;

function wcbakrypt_init()
{
	BakWCExtension::init();
}

add_action('plugins_loaded', 'wcbakrypt_init', 11);

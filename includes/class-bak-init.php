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

use BakExtension\core\Settings;

class BakWCExtension
{
    /**
     * The single instance of the class.
     */
    protected static $_instance = null;

    /**
     * Constructor.
     */
    protected function __construct()
    {
        // Instantiation logic will go here.
    }

    public static function init()
    {

        // start including scripts
        // WooCommerce is required
        if (!is_woocommerce_active()) {
            add_action('admin_notices', Settings::missing_wc_notice());
            return;
        }

    }

    /**
     * Main Extension Instance.
     * Ensures only one instance of the extension is loaded or can be loaded.
     */
    public static function instance()
    {
        if (is_null(self::$_instance)) {
            self::$_instance = new self();
        }

        return self::$_instance;
    }

    /**
     * Cloning is forbidden.
     */
    public function __clone()
    {
        // Override this PHP function to prevent unwanted copies of your instance.
        // Implement your own error or use `wc_doing_it_wrong()`
    }

    /**
     * Unserializing instances of this class is forbidden.
     */
    public function __wakeup()
    {
        // Override this PHP function to prevent unwanted copies of your instance.
        // Implement your own error or use `wc_doing_it_wrong()`
    }
}
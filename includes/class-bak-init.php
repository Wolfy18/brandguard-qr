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

use BakExtension\core\Settings;
use BakExtension\api\RestAdapter;
use BakExtension\controllers\ProductList;
use BakExtension\controllers\Product;

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

    public static function is_woocommerce_activated()
    {
        if (class_exists('woocommerce')) {
            return true;
        } else {
            return false;
        }
    }

    public static function init()
    {
        // Start initiating settings
        if (!self::is_woocommerce_activated()) {
            add_action('admin_notices', array('BakExtension\core\Settings', 'missing_wc_notice'));
            return;
        }


        function cron_activate()
        {
            // Schedule the cron task to run every hour
            if (!wp_next_scheduled('bak_plugin_cron_task')) {
                wp_schedule_event(time(), '1min', 'bak_plugin_cron_task');
            }
        }

        function bak_run_cron_task()
        {
            // Code to be executed in the cron task
            error_log('Log message: started cron job');
            # Get all non-completed products and sync them
            $args = array(
                'post_type' => 'product',
                'posts_per_page' => -1,
                'meta_query' => array(
                    'relation' => 'OR',
                    array(
                        'key' => 'bk_token_status',
                        'value' => 'completed',
                        'compare' => '!=',
                    ),
                    array(
                        'key' => 'bk_token_status',
                        'value' => 'canceled',
                        'compare' => '!=',
                    ),
                    array(
                        'key' => 'bk_token_status',
                        'value' => 'error',
                        'compare' => '!=',
                    ),
                ),
            );

            $products = get_posts($args);

            # Generate access token
            $adapter = new RestAdapter();
            $adapter->generate_access_token();

            foreach ($products as $product) {
                $product_id = $product->ID;
                $token_policy = get_post_meta($product_id, 'bk_token_policy', true);
                $token_uuid = get_post_meta($product_id, 'bk_token_uuid', true);

                if ($token_uuid) {
                    $_data = $adapter->fetch_token_data($token_uuid);

                    if (!empty($_data)) {
                        $data = array(
                            "bk_token_policy" => $_data->transaction->policy_id,
                            "bk_token_transaction" => $_data->transaction->uuid,
                            "bk_token_json" => $_data->transaction->metadata,
                            "bk_token_uuid" => $_data->uuid,
                            "bk_token_fingerprint" => $_data->fingerprint,
                            "bk_token_asset_name" => $_data->asset_name,
                            "bk_token_name" => $_data->name,
                            "bk_token_image" => $_data->image,
                            "bk_token_amount" => $_data->amount,
                            "bk_token_status" => $_data->status
                        );

                        ProductList::update_record($product_id, $data);
                    }
                }
            }
        }

        function cron_deactivate()
        {
            wp_clear_scheduled_hook('bak_plugin_cron_task');
        }

        //==================================== WooCommerce Settings ===================================
        add_action('admin_enqueue_scripts', array('BakExtension\core\Settings', 'add_extension_register_script'));
        add_filter('woocommerce_settings_tabs_array', array('BakExtension\core\Settings', 'add_bak_settings'), 50);
        add_action('woocommerce_settings_tabs_bak_settings', array('BakExtension\core\Settings', 'bak_add_bak_settings'));
        add_action('woocommerce_update_options_bak_settings', array('BakExtension\core\Settings', 'bak_update_options_bak_settings'));

        //==================================== Product List ===================================
        add_filter('manage_product_posts_columns', array("BakExtension\controllers\ProductList", 'bak_fingerprint_column'));
        add_filter('bulk_actions-edit-product', array("BakExtension\controllers\ProductList", 'add_mint_bulk_action'));
        add_action('manage_product_posts_custom_column', array("BakExtension\controllers\ProductList", 'bak_fingerprint_column_data'), 10, 2);
        add_filter('woocommerce_product_filters', array("BakExtension\controllers\ProductList", 'bak_custom_filter'));
        add_action('pre_get_posts', array("BakExtension\controllers\ProductList", 'bak_products_filter_query'));
        add_action('wp_ajax_mint_bulk_action', array("BakExtension\controllers\ProductList", 'handle_mint_bulk_action_ajax'));
        add_action('wp_ajax_upload_ipfs_bulk_action', array("BakExtension\controllers\ProductList", 'handle_upload_ipfs_bulk_action_ajax'));
        add_action('wp_ajax_access_token_action', array("BakExtension\controllers\ProductList", 'handle_access_token_action_ajax'));
        add_action('wp_ajax_update_records_action', array("BakExtension\controllers\ProductList", 'handle_update_records_action_ajax'));


        //==================================== Product  ===================================
        add_filter('woocommerce_product_tabs', array("BakExtension\controllers\Product", 'bakrypt_blockchain_product_tab'));
        add_filter('woocommerce_product_data_tabs', array("BakExtension\controllers\Product", 'bakrypt_blockchain_product_data_tab'));
        add_action('woocommerce_product_data_panels', array("BakExtension\controllers\Product", 'bakrypt_blockchain_product_data_fields'));
        add_action("add_meta_boxes", array("BakExtension\controllers\Product", "add_ipfs_meta_box"));
        add_action('wp_ajax_product_token_get_image', array("BakExtension\controllers\Product", 'product_token_get_image'));
        add_action("wp_ajax_bk_update_record", array("BakExtension\controllers\Product", "bak_update_rest_api_blockchain_meta"));
        add_action('woocommerce_process_product_meta', array("BakExtension\controllers\Product", 'bak_save_blockchain_meta'));
        add_action("wp_ajax_bk_delete_record", array("BakExtension\controllers\Product", "bak_delete_rest_api_blockchain_meta"));

        // =================================== Orders ======================================
        add_filter('woocommerce_get_item_data', array("BakExtension\controllers\Order", "display_asset_fingerprint_in_cart"), 10, 2);
        add_action('woocommerce_checkout_create_order_line_item', array("BakExtension\controllers\Order", "add_asset_fingerprint_to_order_line_item_meta"), 10, 4);
        // add_filter('woocommerce_order_item_name', array("BakExtension\controllers\Order", 'bak_woocommerce_order_item_name', 10, 2));

        // ========= Cron Tasks ======= 
        register_activation_hook(WCBAK_PLUGIN_FILE, 'cron_activate');
        add_action('bak_plugin_cron_task', 'bak_run_cron_task');
        register_deactivation_hook(WCBAK_PLUGIN_FILE, 'cron_deactivate');
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

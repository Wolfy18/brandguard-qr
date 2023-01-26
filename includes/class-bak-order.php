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

defined('ABSPATH') || exit;
class Order
{

    public static function display_asset_fingerprint_in_cart(
        $item_data,
        $cart_item
    ) {
        $fingerprint = get_post_meta($cart_item["product_id"], 'bk_token_fingerprint', true);
        $item_data[] = array(
            'key'     => __('Fingerprint', ''),
            'value'   => $fingerprint,
            'display' => $fingerprint,
        );

        return $item_data;
    }

    public static function add_asset_fingerprint_to_order_line_item_meta($item, $cart_item_key, $values, $order)
    {
        $item->add_meta_data('Fingerprint', get_post_meta($values["data"]->get_id(), 'bk_token_fingerprint', true));
    }
}

// add_action( 'wc_pip_after_customer_addresses', 'action_after_customer_addresses', 10, 4 );
// function action_after_customer_addresses( $type, $action, $document, $order ) {
//     if( $ddate = $order->get_meta( 'jckwds_date' ) ){
//         echo '<p>'.__("Delivery date") . ': ' . $ddate . '</p>';
//     }
// }
// Orders section
//https://rudrastyh.com/woocommerce/customize-order-details.html
// https://rudrastyh.com/woocommerce/checkout-fields.html

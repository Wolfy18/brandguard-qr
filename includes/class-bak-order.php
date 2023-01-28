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

    public static function bak_woocommerce_order_item_name($name, $item)
    {

        $product_id = $item['product_id'];
        
        $fingerprint = get_post_meta($product_id, 'bk_token_fingerprint', true);
        if ($fingerprint) {
            $name .= '<label>' . $fingerprint . ': </label>';
        }
        return $name;
    }
}

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

class Order
{

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

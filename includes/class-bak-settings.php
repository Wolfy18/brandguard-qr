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

}
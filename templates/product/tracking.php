<?php

/**
 * Fingerprint tracking
 *
 * @package BakExtension\Templates
 * @version 1.3.3
 */

defined('ABSPATH') || exit;

// Assuming $product is a valid WooCommerce product object
if (is_a($product, 'WC_Product')) {
	// Load the single product template
	wc_get_template_part( 'content', 'single-product' );
}

?>

<p class="product-info">
	<?php echo $product->get_name() ?>
</p>
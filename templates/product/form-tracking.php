<?php

/**
 * Fingeprint tracking form
 *
 * @package BakExtension\Templates
 * @version 1.3.3
 */

defined('ABSPATH') || exit;

global $post;

?>

<form action="<?php echo esc_url(get_permalink($post->ID)); ?>" method="post" class="woocommerce-form woocommerce-form-track-order track_order">

	<p><?php esc_html_e('To track your order please enter your Fingerprint in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.'); ?></p>

	<p class="form-row form-row-first"><label for="fingerprint"><?php esc_html_e('Fingerprint'); ?></label> <input class="input-text" type="text" name="fingerprint" id="fingerprint" value="<?php echo isset($_REQUEST['fingerprint']) ? esc_attr(wp_unslash($_REQUEST['fingerprint'])) : ''; ?>" placeholder="<?php esc_attr_e('Found in your order confirmation email.'); ?>" /></p><?php // @codingStandardsIgnoreLine 
																																																																																													?>

	<div class="clear"></div>

	<p class="form-row"><button type="submit" class="button" name="track" value="<?php esc_attr_e('Track'); ?>"><?php esc_html_e('Track'); ?></button></p>
	<?php wp_nonce_field('bak-asset_tracking', 'bak-asset-tracking-nonce'); ?>

</form>
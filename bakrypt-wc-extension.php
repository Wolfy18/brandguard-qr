<?php

/**
 * Plugin Name: WooCommerce Bakrypt Extension
 * Developer URI: https://bakrypt.io
 * Plugin URI: https://balrypt.io/woocommerce
 * Description: Mint your products into the Cardano Blockchain
 * Version: 1.0.0
 * Author: Wolfgang Leon
 * Author URI: https://bakrypt.io/
 * Developer: Wolfgang Leon
 * Developer URI: https://bakrypt.io/
 * Text Domain: bakrypt-wc-extension
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

function bakrypt_wc_extension_activate()
{
	// Your activation logic goes here.

}
register_activation_hook(__FILE__, 'bakrypt_wc_extension_activate');


function bakrypt_wc_extension_deactivate()
{
	// Your deactivation logic goes here.
}
register_deactivation_hook(__FILE__, 'bakrypt_wc_extension_deactivate');

//==================================== MAIN ASSETS ===================================
// Register init script
function add_extension_register_script($page)
{
	$script_path = '/build/index.js';
	$script_asset_path = dirname(__FILE__) . '/build/index.asset.php';
	$script_asset = file_exists($script_asset_path)
		? require($script_asset_path)
		: array('dependencies' => array(), 'version' => filemtime($script_path));
	$script_url = plugins_url($script_path, __FILE__);

	wp_register_script(
		'bakrypt-wc-extension',
		$script_url,
		$script_asset['dependencies'],
		$script_asset['version'],
		true
	);

	wp_register_style(
		'bakrypt-wc-extension',
		plugins_url('/build/index.css', __FILE__),
		// Add any dependencies styles may have, such as wp-components.
		array(),
		filemtime(dirname(__FILE__) . '/build/index.css')
	);

	wp_enqueue_script('bakrypt-wc-extension');
	wp_enqueue_style('bakrypt-wc-extension');

	if ($page == 'post.php') {
		// Enqueue WordPress media scripts
		wp_enqueue_media();
	}
}

add_action('admin_enqueue_scripts', 'add_extension_register_script');



//==================================== WOOCOMMERCE SETTINGS SECTION ===================================
//https://www.youtube.com/watch?v=w29neDB7nLs&t=100s
add_filter('woocommerce_settings_tabs_array', "add_bak_settings", 50);
function add_bak_settings($settings_tabs)
{
	$settings_tabs['bak_settings'] = __('Blockchain', 'bak-woocommerce-settings-tab');
	return $settings_tabs;
}

add_action('woocommerce_settings_tabs_bak_settings', 'bak_add_bak_settings');

function bak_add_bak_settings()
{
	woocommerce_admin_fields(fetch_bak_settings());
}

add_action('woocommerce_update_options_bak_settings', 'bak_update_options_bak_settings');

function bak_update_options_bak_settings()
{
	woocommerce_update_options(fetch_bak_settings());
}

function fetch_bak_settings()
{
	$settings = array(
		'section_title' => array(
			'name'     => __('Bakrypt API oAuth2 Credentials', 'bak-woocommerce-settings-tab'),
			'type'     => 'title',
			'desc'     => '',
			'id'       => 'wc_settings_tab_demo_section_title'
		),
		'client_id' => array(
			'name' => __('ClientID', 'bak-woocommerce-settings-tab'),
			'type' => 'text',
			'desc' => __('Client Id value. You can find this in the user profile', 'bak-woocommerce-settings-tab'),
			'id'   => 'wc_settings_tab_bak_client_id'
		),
		'client_secret' => array(
			'name' => __('Client Secret', 'bak-woocommerce-settings-tab'),
			'type' => 'password',
			'desc' => __('Client secret value. You can find this in the user profile', 'bak-woocommerce-settings-tab'),
			'id'   => 'wc_settings_tab_bak_client_secret'
		),
		'username' => array(
			'name' => __('Username', 'bak-woocommerce-settings-tab'),
			'type' => 'text',
			'desc' => __('Bakrypt account. This is the email used to register.', 'bak-woocommerce-settings-tab'),
			'id'   => 'wc_settings_tab_bak_username'
		),
		'password' => array(
			'name' => __('Password', 'bak-woocommerce-settings-tab'),
			'type' => 'password',
			'desc' => __('The password for the Bakrypt account.', 'bak-woocommerce-settings-tab'),
			'id'   => 'wc_settings_tab_bak_password'
		),
		'testnet_client_id' => array(
			'name' => __('Testnet ClientID', 'bak-woocommerce-settings-tab'),
			'type' => 'text',
			'desc' => __('Testnet Client Id value. You can find this in the user profile', 'bak-woocommerce-settings-tab'),
			'id'   => 'wc_settings_tab_bak_testnet_client_id'
		),
		'testnet_client_secret' => array(
			'name' => __('Testnet Client Secret', 'bak-woocommerce-settings-tab'),
			'type' => 'password',
			'desc' => __('Testnet Client secret value. You can find this in the user profile', 'bak-woocommerce-settings-tab'),
			'id'   => 'wc_settings_tab_bak_testnet_client_secret'
		),
		'testnet_username' => array(
			'name' => __('Testnet Username', 'bak-woocommerce-settings-tab'),
			'type' => 'text',
			'desc' => __('Testnet Bakrypt account. This is the email used to register.', 'bak-woocommerce-settings-tab'),
			'id'   => 'wc_settings_tab_bak_testnet_username'
		),
		'testnet_password' => array(
			'name' => __('Testnet Password', 'bak-woocommerce-settings-tab'),
			'type' => 'password',
			'desc' => __('The password for the Bakrypt account.', 'bak-woocommerce-settings-tab'),
			'id'   => 'wc_settings_tab_bak_testnet_password'
		),
		'testnet_active' => array(
			'name' => __('Testnet Environment Activation', 'bak-woocommerce-settings-tab'),
			'type' => 'checkbox',
			'desc' => __('Testnet environment is active.', 'bak-woocommerce-settings-tab'),
			'id'   => 'wc_settings_tab_bak_testnet_active'
		),
		'section_end' => array(
			'type' => 'sectionend',
			'id' => 'wc_settings_tab_bak_section_end'
		)
	);
	return apply_filters('wc_settings_tab_bak_settings', $settings);
}


//==================================== PRODUCT SECTION ===================================
// add custom tab to product page detail view
function bakrypt_blockchain_product_tab_content()
{
	// The new tab content
	$prod_id = get_the_ID();
	echo '<p>' . get_post_meta($prod_id, 'additional information', true) . '</p>';
}

add_filter('woocommerce_product_tabs', 'bakrypt_blockchain_product_tab');
function bakrypt_blockchain_product_tab($tabs)
{
	// Adds the new tab
	$tabs['desc_tab'] = array(
		'title'     => __('Blockchain', 'woocommerce'),
		'priority'  => 50,
		'callback'  => 'bakrypt_blockchain_product_tab_content'
	);
}

add_filter('woocommerce_product_data_tabs', 'bakrypt_blockchain_product_data_tab');
function bakrypt_blockchain_product_data_tab($product_data_tabs)
{
	$product_data_tabs['bakrypt-blockchain'] = array(
		'label' => __('Blockchain', 'bakrypt_blockchain'),
		'target' => 'blockchain_product_data',
	);
	return $product_data_tabs;
}

add_action('woocommerce_product_data_panels', 'bakrypt_blockchain_product_data_fields');
function bakrypt_blockchain_product_data_fields()
{
	global $woocommerce, $post;
?>
	<!-- id below must match target registered in above add_blockchain_product_data_tab function -->
	<div id="blockchain_product_data" class="panel woocommerce_options_panel">
		<?php
		woocommerce_wp_text_input(array(
			'id'            => 'bk_token_uuid',
			'value'         => get_post_meta(get_the_ID(), 'bk_token_uuid', true),
			// 'wrapper_class' => 'show_if_simple',
			'label'         => __('Bakrypt UUID', 'my_text_domain'),
			'description'   => __("Bakrypt's Unique Identifier.", "my_text_domain"),
			'default'  		=> '',
			'desc_tip'    	=> false,
			'custom_attributes' => array('readonly' => 'readonly'),
		));
		?>
		<?php
		woocommerce_wp_text_input(array(
			'id'            => 'bk_token_policy',
			'value'         => get_post_meta(get_the_ID(), 'bk_token_policy', true),
			// 'wrapper_class' => 'show_if_simple',
			'label'         => __('Policy ID', 'my_text_domain'),
			'description'   => __('Policy ID related to this asset', 'my_text_domain'),
			'default'  		=> '',
			'desc_tip'    	=> false,
			'custom_attributes' => array('readonly' => 'readonly'),
		));
		?>
		<?php
		woocommerce_wp_text_input(array(
			'id'            => 'bk_token_fingerprint',
			'value'         => get_post_meta(get_the_ID(), 'bk_token_fingerprint', true),
			// 'wrapper_class' => 'show_if_simple',
			'label'         => __('Asset Fingerprint', 'my_text_domain'),
			'description'   => __('As recorded in the blockchain.', 'my_text_domain'),
			'default'  		=> '',
			'desc_tip'    	=> false,
			'custom_attributes' => array('readonly' => 'readonly'),
		));
		?>
		<?php
		woocommerce_wp_text_input(array(
			'id'            => 'bk_token_asset_name',
			'value'         => get_post_meta(get_the_ID(), 'bk_token_asset_name', true),
			// 'wrapper_class' => 'show_if_simple',
			'label'         => __('Asset Name', 'my_text_domain'),
			'description'   => __("Token's asset name.", 'my_text_domain'),
			'default'  		=> '',
			'desc_tip'    	=> false,
			'custom_attributes' => array('readonly' => 'readonly'),
		));
		?>
		<?php
		woocommerce_wp_text_input(array(
			'id'            => 'bk_token_name',
			'value'         => get_post_meta(get_the_ID(), 'bk_token_name', true),
			// 'wrapper_class' => 'show_if_simple',
			'label'         => __('Token Name', 'my_text_domain'),
			'description'   => __("Token name.", 'my_text_domain'),
			'default'  		=> '',
			'desc_tip'    	=> false,
			'custom_attributes' => array('readonly' => 'readonly'),
		));
		?>
		<?php
		woocommerce_wp_text_input(array(
			'id'            => 'bk_token_image',
			'value'         => get_post_meta(get_the_ID(), 'bk_token_image', true),
			// 'wrapper_class' => 'show_if_simple',
			'label'         => __('Asset Image', 'my_text_domain'),
			'description'   => __("Token image.", 'my_text_domain'),
			'default'  		=> '',
			'desc_tip'    	=> false,
			'custom_attributes' => array('readonly' => 'readonly'),
		));
		?>
		<?php
		woocommerce_wp_text_input(array(
			'id'            => 'bk_token_amount',
			'value'         => get_post_meta(get_the_ID(), 'bk_token_amount', true),
			// 'wrapper_class' => 'show_if_simple',
			'label'         => __('Number of tokens', 'my_text_domain'),
			'description'   => __('Number of tokens with the same fingerprint under the same policy.', 'my_text_domain'),
			'default'  		=> '',
			'desc_tip'    	=> false,
			'custom_attributes' => array('readonly' => 'readonly'),
		));
		?>
		<?php
		woocommerce_wp_text_input(array(
			'id'            => 'bk_token_status',
			'value'         => get_post_meta(get_the_ID(), 'bk_token_status', true),
			// 'wrapper_class' => 'show_if_simple',
			'label'         => __('Asset transaction status', 'my_text_domain'),
			'description'   => __('Status of the transaction related to this asset.', 'my_text_domain'),
			'default'  		=> '',
			'desc_tip'    	=> false,
			'custom_attributes' => array('readonly' => 'readonly'),
		));
		?>
		<?php
		woocommerce_wp_text_input(array(
			'id'            => 'bk_token_transaction',
			'value'         => get_post_meta(get_the_ID(), 'bk_token_transaction', true),
			// 'wrapper_class' => 'show_if_simple',
			'label'         => __('Transaction UUID', 'my_text_domain'),
			'description'   => __('Transaction related to this token.', 'my_text_domain'),
			'default'  		=> '',
			'desc_tip'    	=> false,
			'custom_attributes' => array('readonly' => 'readonly'),
		));
		?>
		<?php
		woocommerce_wp_textarea_input(array(
			'id'            => 'bk_token_json',
			'value'         => get_post_meta(get_the_ID(), 'bk_token_json', true),
			// 'wrapper_class' => 'show_if_simple',
			'label'         => __('Token Metadata', 'my_text_domain'),
			'description'   => __('Metadata recorded in the blockchain', 'my_text_domain'),
			'default'  		=> '',
			'desc_tip'    	=> false,
			'custom_attributes' => array('readonly' => 'readonly'),
		));
		?>

		<?php
		$asset = array(
			"uuid" => get_post_meta(get_the_ID(), 'bk_token_uuid', true),
			"transaction_uuid" => get_post_meta(get_the_ID(), 'bk_token_transaction', true),
		);

		// Generate Bakrypt Token on load
		$access = generate_access_token();
		$testnet = woocommerce_settings_get_option('wc_settings_tab_bak_testnet_active');
		?>

		<div <?php if ($testnet == "yes") echo "testnet" ?> data-token="<?php echo $access->{'access_token'} ?>" style="display: flex; justify-content: left" class="btn-action">
			<p class="form-field mint" <?php if ($asset['uuid'] != '') echo 'style="display:none"' ?>></p>
			<p class="form-field" <?php if ($asset['uuid'] == '') echo 'style="display:none"' ?>><button name="update_token" class="button-secondary woocommerce-save-button" id="sync-asset-btn">Sync Token</button></p>
			<p class="form-field view-transaction" <?php if ($asset['uuid'] == '') echo 'style="display:none"' ?>></p>
			<p class="form-field woocommerce-message" <?php if ($asset['uuid'] == '') echo 'style="display:none"' ?>><button name="delete_token" class="button-primary woocommerce-save-button">Delete Token</button></p>
		</div>

	</div>

<?php

}

add_action("add_meta_boxes", "add_ipfs_meta_box");
function add_ipfs_meta_box()
{
	add_meta_box("ipfs-meta-box", "Blockchain asset image", "ipfs_meta_box_markup", "product", "side", "low", null);
}
function ipfs_meta_box_markup($post)
{
	global $thepostid, $product_object;
	$thepostid      = $post->ID;
	$product_object = $thepostid ? wc_get_product($thepostid) : new WC_Product();
	$bk_token_att = get_post_meta(get_the_ID(), 'bk_att_token_image', true);
	$img_metadata = wp_get_attachment_metadata($bk_token_att);
	$img_ipfs = null;
	if ($img_metadata && array_key_exists('ipfs', $img_metadata)) {
		$img_ipfs = $img_metadata['ipfs'];
	}
	wp_nonce_field(basename(__FILE__), "ipfs-box-nonce");
?>
	<div id="product_images_container">
		<ul class="product_images">
			<?php
			// $product_image_gallery = $product_object->get_gallery_image_ids('edit');
			$product_image_gallery  = array($bk_token_att);

			$attachments         = array_filter($product_image_gallery);
			$update_meta         = false;
			$updated_gallery_ids = array();

			if (!empty($attachments)) {
				foreach ($attachments as $attachment_id) {
					$attachment = wp_get_attachment_image($attachment_id, 'thumbnail',
						false,
						array('id' => 'preview_bk_att_token_image', 'data-ipfs' => $img_ipfs));

					// if attachment is empty skip.
					if (empty($attachment)) {
						$update_meta = true;
						continue;
					}
			?>
					<li class="image" data-attachment_id="<?php echo esc_attr($attachment_id); ?>">
						<?php echo $attachment; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped 
						?>
						<ul class="actions">
							<li><a href="#" class="delete tips" data-tip="<?php esc_attr_e('Delete image', 'woocommerce'); ?>"><?php esc_html_e('Delete', 'woocommerce'); ?></a></li>
						</ul>
						<?php
						// Allow for extra info to be exposed or extra action to be executed for this attachment.
						do_action('woocommerce_admin_after_product_gallery_item', $thepostid, $attachment_id);
						?>
					</li>
				<?php

					// rebuild ids to be saved.
					$updated_gallery_ids[] = $attachment_id;
				}

				// need to update product meta to set new gallery ids
				if ($update_meta) {
					update_post_meta($post->ID, 'bk_att_token_image', esc_attr($bk_token_att));
				}
			} else {
				?>
				<li class="image" data-attachment_id="<?php echo esc_attr($attachment_id); ?>">
					<span id="preview_bk_att_token_image"></span>
				</li>
			<?php
			}
			?>
		</ul>
		<input type="hidden" id="bk_att_token_image" readonly name="bk_att_token_image" value="<?php echo esc_attr($bk_token_att); ?>" />
		<input type="hidden" id="bk_att_token_image_ipfs" readonly name="bk_att_token_image_ipfs" value="<?php echo esc_attr($img_ipfs); ?>" />
	</div>

	<a href="#" id="bk_token_image_media_manager"><?php esc_attr_e('Choose from gallery', 'mytextdomain'); ?></a>
<?php
}

add_action('wp_ajax_product_token_get_image', 'product_token_get_image');
function product_token_get_image()
{
	if (isset($_GET['id'])) {

		$attachment_id = filter_input(INPUT_GET, 'id', FILTER_VALIDATE_INT);
		# Verify IPFS information
		$img_metadata = wp_get_attachment_metadata($attachment_id);
		$img_ipfs = "";
		if ($img_metadata && array_key_exists('ipfs', $img_metadata)) {
			$img_ipfs = $img_metadata['ipfs'];
		}

		# Upload to IPFS node if nothing is found
		if ($img_ipfs == '') {
			$bak_file = upload_attachment_to_ipfs($attachment_id);
			$img_ipfs = $bak_file->{'ipfs'};
			$img_metadata['ipfs'] = $img_ipfs;
			wp_update_attachment_metadata($attachment_id, $img_metadata);  // save it back to the db
		}

		// Return image object
		$image = wp_get_attachment_image(
			$attachment_id,
			'thumbnail',
			false,
			array('id' => 'preview_bk_att_token_image', 'data-ipfs' => $img_ipfs)
		);
		$data = array(
			'image'    => $image,
		);
		wp_send_json_success($data);
	} else {
		wp_send_json_error();
	}
}



// Store and save custom product meta data
add_action('woocommerce_process_product_meta', 'bak_save_blockchain_meta');
function bak_save_blockchain_meta($post_id)
{
	// grab the custom SKU from $_POST
	$bk_token_uuid = isset($_POST['bk_token_uuid']) ? sanitize_text_field($_POST['bk_token_uuid']) : '';
	$bk_token_policy = isset($_POST['bk_token_policy']) ? sanitize_text_field($_POST['bk_token_policy']) : '';
	$bk_token_fingerprint = isset($_POST['bk_token_fingerprint']) ? sanitize_text_field($_POST['bk_token_fingerprint']) : '';
	$bk_token_asset_name = isset($_POST['bk_token_asset_name']) ? sanitize_text_field($_POST['bk_token_asset_name']) : '';
	$bk_token_name = isset($_POST['bk_token_name']) ? sanitize_text_field($_POST['bk_token_name']) : '';
	$bk_token_image = isset($_POST['bk_token_image']) ? sanitize_text_field($_POST['bk_token_image']) : '';
	$bk_token_amount = isset($_POST['bk_token_amount']) ? sanitize_text_field($_POST['bk_token_amount']) : '';
	$bk_token_status = isset($_POST['bk_token_status']) ? sanitize_text_field($_POST['bk_token_status']) : '';
	$bk_token_transaction = isset($_POST['bk_token_transaction']) ? sanitize_text_field($_POST['bk_token_transaction']) : '';
	$bk_token_json = isset($_POST['bk_token_json']) ? sanitize_text_field($_POST['bk_token_json']) : '';

	// Update attachment, token_image rel
	$bk_att_token_image = isset($_POST['bk_att_token_image']) ? sanitize_text_field($_POST['bk_att_token_image']) : '';

	if ($bk_token_image != '' && $bk_token_uuid != '' && $bk_att_token_image == '') {
		# Insert attachment
		$att_id = insert_attachment_from_ipfs($bk_token_image);
		$bk_att_token_image = $att_id;
	}

	// grab the product
	$product = wc_get_product($post_id);

	// save the custom SKU using WooCommerce built-in functions
	$product->update_meta_data('bk_token_uuid', $bk_token_uuid);
	$product->update_meta_data('bk_token_policy', $bk_token_policy);
	$product->update_meta_data('bk_token_fingerprint', $bk_token_fingerprint);
	$product->update_meta_data('bk_token_asset_name', $bk_token_asset_name);
	$product->update_meta_data('bk_token_name', $bk_token_name);
	$product->update_meta_data('bk_token_image', $bk_token_image);
	$product->update_meta_data('bk_token_amount', $bk_token_amount);
	$product->update_meta_data('bk_token_status', $bk_token_status);
	$product->update_meta_data('bk_token_transaction', $bk_token_transaction);
	$product->update_meta_data('bk_token_json', $bk_token_json);
	$product->update_meta_data('bk_att_token_image', $bk_att_token_image);

	$product->save();
}

function insert_attachment_from_ipfs($ipfs)
{
	$upload = fetch_ipfs_attachment($ipfs);
	$att_id = null;
	if ($upload) {
		$file_path        = $upload['file'];
		$file_name        = basename($file_path);
		$file_type        = wp_check_filetype($file_name, null);
		$attachment_title = sanitize_file_name(pathinfo($file_name, PATHINFO_FILENAME));
		$wp_upload_dir    = wp_upload_dir();

		$args = array(
			'guid'           => $wp_upload_dir['url'] . '/' . $file_name,
			'post_mime_type' => $file_type['type'],
			'post_status'    => 'inherit',
			'post_content' => '',
			'post_title' => $attachment_title,
			'ipfs'       => $bk_token_image
		);

		$att_id = wp_insert_attachment($args, $file_path, $post_id);

		// you must first include the image.php file
		// for the function wp_generate_attachment_metadata() to work
		require_once(ABSPATH . "wp-admin" . '/includes/image.php');
		$attach_data = wp_generate_attachment_metadata($att_id, $file_path);
		$attach_data['ipfs'] = $bk_token_image;
		wp_update_attachment_metadata($att_id, $attach_data);
	}

	return $att_id;
}

function fetch_ipfs_attachment($ipfs)
{
	$url  = "https://gateway.bakrypt.io/ipfs/" . str_replace("ipfs://", "", $ipfs);

	$response = wp_remote_get($url);

	$upload = null;

	if (is_wp_error($response)) {
		$error_message = $response->get_error_message();
		echo "Something went wrong: $error_message";
	} else {

		$file = $response['body'];
		$upload = wp_upload_bits(basename(str_replace("ipfs://", "", $ipfs) . '.' . explode("/", $response['headers']['content-type'])[1]), null, $file);
		$upload['mime_type'] = $response['headers']['content-type'];

		if (!empty($upload['error'])) {
			return false;
		}
	}
	return $upload;
}

function generate_access_token()
{
	$testnet = woocommerce_settings_get_option('wc_settings_tab_bak_testnet_active');
	if ($testnet != "yes") {
		$url  = "https://bakrypt.io/auth/token/";
		$client_id = woocommerce_settings_get_option('wc_settings_tab_bak_client_id');
		$client_secret = woocommerce_settings_get_option('wc_settings_tab_bak_client_secret');
		$username = woocommerce_settings_get_option('wc_settings_tab_bak_username');
		$password = woocommerce_settings_get_option('wc_settings_tab_bak_password');
	} else {
		$url  = "https://testnet.bakrypt.io/auth/token/";
		$client_id = woocommerce_settings_get_option('wc_settings_tab_bak_testnet_client_id');
		$client_secret = woocommerce_settings_get_option('wc_settings_tab_bak_testnet_client_secret');
		$username = woocommerce_settings_get_option('wc_settings_tab_bak_testnet_username');
		$password = woocommerce_settings_get_option('wc_settings_tab_bak_testnet_password');
	}

	$response = wp_remote_post(
		$url,
		array(
			'method' => 'POST',
			'timeout' => 30,
			'redirection' => 5,
			'httpversion' => '1.0',
			'blocking' => true,
			'headers' => array("content-type" => "application/x-www-form-urlencoded"),
			'body' => http_build_query(array(
				"client_id" => $client_id,
				"client_secret" => $client_secret,
				"username" => $username,
				"password" => $password,
				"grant_type" => "password"
			)),
		)
	);

	$access = array();
	if (
		is_wp_error($response)
	) {
		$error_message = $response->get_error_message();
		echo "Something went wrong: $error_message";
	} else {
		$access = json_decode($response["body"]);
	}
	return $access;
}

function upload_attachment_to_ipfs($attachment_id)
{
	$testnet = woocommerce_settings_get_option('wc_settings_tab_bak_testnet_active');
	if ($testnet != "yes") {
		$url  = "https://bakrypt.io/v1/files/";
	} else {
		$url  = "https://testnet.bakrypt.io/v1/files/";
	}

	$token = generate_access_token();

	$img_url = wp_get_attachment_url($attachment_id);
	$img_name = basename(get_attached_file($attachment_id));
	$content_type = get_post_mime_type($attachment_id);

	$boundary = wp_generate_password(24);
	$payload = '';
	// Upload the file
	$payload .= '--' . $boundary;
	$payload .= "\r\n";
	$payload .= 'Content-Disposition: form-data; name="' . 'file' .
		'"; filename="' . $img_name . '"' . "\r\n";
	if ($content_type) {
		$payload .= 'Content-Type: ' . $content_type . "\r\n";
	}
	$payload .= "\r\n";
	$payload .= file_get_contents($img_url);
	$payload .= "\r\n";

	$payload .= '--' . $boundary . '--';

	$response = wp_remote_post(
		$url,
		array(
			'method' => 'POST',
			'timeout' => 30,
			'redirection' => 5,
			'httpversion' => '1.0',
			'blocking' => true,
			'headers' => array(
				'content-type' => 'multipart/form-data; boundary=' . $boundary,
				"authorization" => "Bearer " . $token->{'access_token'}
			),
			'body' => $payload,
		)
	);

	$attachment = array();
	if (is_wp_error($response)) {
		$error_message = $response->get_error_message();
		echo "Something went wrong: $error_message";
	} else {
		$attachment = json_decode($response["body"]);
	}

	return $attachment;
}

//==================================== LIST SECTION ===================================
// Additional column in products list and filters
add_filter('manage_product_posts_columns', 'bak_fingerprint_column');
function bak_fingerprint_column($columns)
{
	$columns['asset_fingerprint'] = __('Token');

	return $columns;
}
// Show custom field in a new column
add_action('manage_product_posts_custom_column', 'bak_fingerprint_column_data', 10, 2);
function bak_fingerprint_column_data($column, $post_id)
{

	switch ($column) {
		case 'asset_fingerprint': // This has to match to the defined column in function above
			$get_fingerprint = get_post_meta($post_id, 'bk_token_fingerprint', true);
			echo "<a target='_blank' rel='nofollow' href='https://cexplorer.io/asset/" . $get_fingerprint . "'>" . $get_fingerprint . "</a>";
			break;
	}
}

// Filter render
function bak_get_filter_options()
{
	$options = [
		[
			'name' => 'Filter by Tokenization Status',
			'value' => '',
			'selected' => (!isset($_GET['tokenize']) || empty($_GET['tokenize'])) ? 'selected' : '',
		],
		[
			'name' => 'Tokenized',
			'value' => 'yes',
			'selected' => (isset($_GET['tokenize']) && $_GET['tokenize'] == 'yes') ? 'selected="selected"' : '',
		],
		[
			'name' => 'Non-Token',
			'value' => 'no',
			'selected' => (isset($_GET['tokenize']) && $_GET['tokenize'] == 'no') ? 'selected="selected"' : '',
		],
	];

	// html
	$output = '';
	foreach ($options as $option) {
		$output .= '<option value="' . $option['value'] . '" ' . $option['selected'] . '>' . $option['name'] . '</option>';
	}

	return $output;
}

// Define function to set your filter
add_filter('woocommerce_product_filters', 'bak_custom_filter');
function bak_custom_filter($output)
{
	global $wp_query;
	$output .= '<select class="token-filter dropdown_product_cat" name="tokenize">' . bak_get_filter_options() . '</select>';

	return $output;
}

// Set up the query
add_action('pre_get_posts', 'bak_products_filter_query');
function bak_products_filter_query($query)
{
	if (is_admin()) {
		if (isset($_GET['tokenize']) && !empty($_GET['tokenize'])) {

			$meta_query = (array)$query->get('meta_query');
			$meta_query[] = [
				'key'     => 'bk_token_fingerprint', // replace with your own meta key
				'value'   => '',
				'compare' => ($_GET['tokenize'] == "yes") ? '!=' : "=",
			];

			$query->set('meta_query', $meta_query);
		}
	}
}

// Orders section
//https://rudrastyh.com/woocommerce/customize-order-details.html

// Initiate wc bakrypt class
function wcbakrypt_init()
{
	require_once WCBAK_ABSPATH . '/includes/class-wc-bakrypt.php';
	WC_Bakrypt::init();
}

add_action('plugins_loaded', 'wcbakrypt_init', 11);

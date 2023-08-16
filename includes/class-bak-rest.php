<?php

/**
 * RestAdapter
 *
 * A class which represents bakrypt's API and features.
 *
 * @package BakExtension\api
 * @version 1.0.0
 * @since   1.0.0
 */

namespace BakExtension\api;

defined('ABSPATH') || exit;

use BakExtension\controllers\Product;

class RestAdapter
{
    public $access_token;
    public $settings;

    function __construct()
    {
        if (!$this->settings) {
            $testnet = get_option('wc_settings_tab_bak_testnet_active');
            if ($testnet != "yes") {
                $url = "https://bakrypt.io";
                $client_id = get_option('wc_settings_tab_bak_client_id');
                $client_secret = get_option('wc_settings_tab_bak_client_secret');
                $username = get_option('wc_settings_tab_bak_username');
                $password = get_option('wc_settings_tab_bak_password');
            } else {
                $url = "https://testnet.bakrypt.io";
                $client_id = get_option('wc_settings_tab_bak_testnet_client_id');
                $client_secret = get_option('wc_settings_tab_bak_testnet_client_secret');
                $username = get_option('wc_settings_tab_bak_testnet_username');
                $password = get_option('wc_settings_tab_bak_testnet_password');
            }

            $this->settings = array(
                "url" => $url,
                "client_id" => $client_id,
                "client_secret" => $client_secret,
                "username" => $username,
                "password" => $password,
                "testnet" => $testnet
            );
        }
    }

    public function generate_access_token()
    {

        $response = wp_remote_post(
            $this->settings['url'] . "/auth/token/",
            array(
                'method' => 'POST',
                'timeout' => 30,
                'redirection' => 5,
                'httpversion' => '1.0',
                'blocking' => true,
                'headers' => array("content-type" => "application/x-www-form-urlencoded"),
                'body' => http_build_query(
                    array(
                        "client_id" => $this->settings['client_id'],
                        "client_secret" => $this->settings['client_secret'],
                        "username" => $this->settings['username'],
                        "password" => $this->settings['password'],
                        "grant_type" => "password"
                    )
                ),
            )
        );

        $access = array();
        if (
            is_wp_error($response)
        ) {
            $error_message = $response->get_error_message();
            echo "Something went wrong:" . esc_html($error_message);
        } else {
            $access = json_decode($response["body"]);
        }

        # Set access token
        $this->access_token = $access;

        return $access;
    }

    public function upload_attachment_to_ipfs($attachment_id)
    {

        if (!$this->access_token) {
            $this->generate_access_token();
        }

        $token = $this->access_token;

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
            $this->settings['url'] . "/v1/files/",
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
            echo "Something went wrong: " . esc_html($error_message);
        } else {
            $attachment = json_decode($response["body"]);
        }

        return $attachment;
    }

    public function upload_attachment_to_ipfs_from_url($url)
    {

        if (!$this->access_token) {
            $this->generate_access_token();
        }

        $token = $this->access_token;

        $img_url = $url;
        $img_name = basename($url);
        $content_type = get_headers($url, 1)["Content-Type"];

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
            $this->settings['url'] . "/v1/files/",
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
            echo "Something went wrong: " . esc_html($error_message);
        } else {
            $attachment = json_decode($response["body"]);
        }

        return $attachment;
    }

    public static function fetch_ipfs_attachment($ipfs)
    {
        $url = "https://gateway.bakrypt.io/ipfs/" . str_replace("ipfs://", "", $ipfs);

        $response = wp_remote_get($url);

        $upload = null;

        if (is_wp_error($response)) {
            $error_message = $response->get_error_message();
            echo "Something went wrong: " . esc_html($error_message);
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

    public static function insert_attachment_from_ipfs($ipfs, $post_id)
    {
        $upload = self::fetch_ipfs_attachment($ipfs);
        $att_id = null;
        if ($upload) {
            $file_path = $upload['file'];
            $file_name = basename($file_path);
            $file_type = wp_check_filetype($file_name, null);
            $attachment_title = sanitize_file_name(pathinfo($file_name, PATHINFO_FILENAME));
            $wp_upload_dir = wp_upload_dir();

            $args = array(
                'guid' => $wp_upload_dir['url'] . '/' . $file_name,
                'post_mime_type' => $file_type['type'],
                'post_status' => 'inherit',
                'post_content' => '',
                'post_title' => $attachment_title,
                'ipfs' => $ipfs
            );

            $att_id = wp_insert_attachment($args, $file_path, $post_id);

            // you must first include the image.php file
            // for the function wp_generate_attachment_metadata() to work
            require_once(ABSPATH . "wp-admin" . '/includes/image.php');
            $attach_data = wp_generate_attachment_metadata($att_id, $file_path);
            $attach_data['ipfs'] = $ipfs;
            wp_update_attachment_metadata($att_id, $attach_data);
        }

        return $att_id;
    }

    public function fetch_token_data($uuid)
    {
        $url = $this->settings["url"] . "/v1/assets/" . $uuid;
        $token = $this->access_token;
        $headers = array(
            'Authorization' => 'Bearer ' . $token->{'access_token'},
            'Content-Type' => 'application/json',
        );

        $args = array(
            'headers' => $headers,
            'timeout' => 30, // Set timeout to 30 seconds
        );

        $response = wp_remote_get($url, $args);

        $response_body = [];

        if (!is_wp_error($response)) {
            $response_code = wp_remote_retrieve_response_code($response);
            $response_body = json_decode($response["body"]);

            // Handle the response data
            // ...
        } else {
            $error_message = $response->get_error_message();
            echo "Something went wrong: " . esc_html($error_message);
        }

        return $response_body;
    }

    // Function to check if the route is authorized
    public static function check_permission($request)
    {

        // Check if authorization header is present
        $authorization = $request->get_header('Authorization');
        if (empty($authorization)) {
            return new \WP_Error('rest_no_authorization', 'Authorization header is missing.', array('status' => 401));
        }

        // Extract the token from the Authorization header
        $auth_header = str_replace('Basic ', '', $authorization);
        // $decoded_auth = base64_decode($auth_header);

        list($username, $password) = explode(':', $auth_header);

        // Authenticate the user using the application password
        $user = wp_authenticate_application_password(null, $username, $password);

        if (is_wp_error($user)) {
            return new \WP_Error('rest_invalid_authorization', 'Invalid authorization token.', array('status' => 401));
        }

        // Example: Allow only users with 'edit_posts' capability
        if (!$user->has_cap('edit_posts')) {
            return new \WP_Error('rest_forbidden', 'You do not have permission to access this endpoint.', array('status' => 403));
        }

        return True;
    }

    // Register a custom REST API endpoint for products
    public static function product_routes()
    {

        # GET
        register_rest_route(
            'bak/v1',
            '/products/(?P<id>\d+)',
            array(
                'methods' => 'GET',
                'callback' => array('BakExtension\api\RestAdapter', 'get_product_details'),
                'permission_callback' => array("BakExtension\api\RestAdapter", 'check_permission')
            )
        );

        # POST
        register_rest_route(
            'bak/v1',
            '/products/mint',
            array(
                'methods' => 'POST',
                'callback' => array('BakExtension\api\RestAdapter', 'get_product_details'),
                'permission_callback' => array("BakExtension\api\RestAdapter", 'check_permission')
            )
        );

        register_rest_route(
            'bak/v1',
            '/products/ipfs',
            array(
                'methods' => 'POST',
                'callback' => array('BakExtension\api\RestAdapter', 'get_product_details'),
                'permission_callback' => array("BakExtension\api\RestAdapter", 'check_permission')
            )
        );

        # PUT
        register_rest_route(
            'bak/v1',
            '/products',
            array(
                'methods' => 'PUT',
                'callback' => array('BakExtension\api\RestAdapter', 'get_product_details'),
                'permission_callback' => array("BakExtension\api\RestAdapter", 'check_permission')
            )
        );

        register_rest_route(
            'bak/v1',
            '/products/(?P<id>\d+)',
            array(
                'methods' => 'PUT',
                'callback' => array('BakExtension\api\RestAdapter', 'get_product_details'),
                'permission_callback' => array("BakExtension\api\RestAdapter", 'check_permission')
            )
        );

        # DELETE
        register_rest_route(
            'bak/v1',
            '/products/(?P<id>\d+)',
            array(
                'methods' => 'DELETE',
                'callback' => array('BakExtension\api\RestAdapter', 'get_product_details'),
                'permission_callback' => array("BakExtension\api\RestAdapter", 'check_permission')
            )
        );
    }

    public static function auth_routes()
    {

        # POST
        register_rest_route(
            'bak/v1',
            '/auth/token',
            array(
                'methods' => 'POST',
                'callback' => array('BakExtension\api\RestAdapter', 'get_product_details'),
                'permission_callback' => array("BakExtension\api\RestAdapter", 'check_permission')
            )
        );

        register_rest_route(
            'bak/v1',
            '/auth/refresh',
            array(
                'methods' => 'POST',
                'callback' => array('BakExtension\api\RestAdapter', 'get_product_details'),
                'permission_callback' => array("BakExtension\api\RestAdapter", 'check_permission')
            )
        );

    }

    // Callback function for getting product detailsnamespace BakExtension\api;
    public static function get_product_details($request)
    {
        $product_id = $request->get_param('id');

        if (empty($product_id)) {
            return new \WP_Error('invalid_param', 'Invalid product ID', array('status' => 400));
        }

        // Check if the product exists
        $product = wc_get_product($product_id);

        if (!$product) {
            return new \WP_Error('not_found', 'Product not found', array('status' => 404));
        }

        // Get the product data here
        $product_data = Product::get_product_data($product_id);

        // Create a serializer instance
        $serializer = new \WP_REST_Response();
        $serializer->set_data($product_data);

        return $serializer;
    }
}
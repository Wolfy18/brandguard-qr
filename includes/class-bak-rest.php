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
class RestAdapter
{
    public $access_token;
    public $settings;

    function __construct()
    {
        if (!$this->settings) {
            $testnet = woocommerce_settings_get_option('wc_settings_tab_bak_testnet_active');
            if ($testnet != "yes") {
                $url = "https://bakrypt.io";
                $client_id = woocommerce_settings_get_option('wc_settings_tab_bak_client_id');
                $client_secret = woocommerce_settings_get_option('wc_settings_tab_bak_client_secret');
                $username = woocommerce_settings_get_option('wc_settings_tab_bak_username');
                $password = woocommerce_settings_get_option('wc_settings_tab_bak_password');
            } else {
                $url = "https://testnet.bakrypt.io";
                $client_id = woocommerce_settings_get_option('wc_settings_tab_bak_testnet_client_id');
                $client_secret = woocommerce_settings_get_option('wc_settings_tab_bak_testnet_client_secret');
                $username = woocommerce_settings_get_option('wc_settings_tab_bak_testnet_username');
                $password = woocommerce_settings_get_option('wc_settings_tab_bak_testnet_password');
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

    public static function insert_attachment_from_ipfs($ipfs)
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
                'ipfs' => $bk_token_image
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
}

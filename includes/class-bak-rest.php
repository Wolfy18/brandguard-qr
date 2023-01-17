<?php

namespace BakExtension\api;

class RestAdapter
{

}

function generate_access_token()
{
    $testnet = woocommerce_settings_get_option('wc_settings_tab_bak_testnet_active');
    if ($testnet != "yes") {
        $url = "https://bakrypt.io/auth/token/";
        $client_id = woocommerce_settings_get_option('wc_settings_tab_bak_client_id');
        $client_secret = woocommerce_settings_get_option('wc_settings_tab_bak_client_secret');
        $username = woocommerce_settings_get_option('wc_settings_tab_bak_username');
        $password = woocommerce_settings_get_option('wc_settings_tab_bak_password');
    } else {
        $url = "https://testnet.bakrypt.io/auth/token/";
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
            'body' => http_build_query(
                array(
                    "client_id" => $client_id,
                    "client_secret" => $client_secret,
                    "username" => $username,
                    "password" => $password,
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
        $url = "https://bakrypt.io/v1/files/";
    } else {
        $url = "https://testnet.bakrypt.io/v1/files/";
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


function fetch_ipfs_attachment($ipfs)
{
    $url = "https://gateway.bakrypt.io/ipfs/" . str_replace("ipfs://", "", $ipfs);

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
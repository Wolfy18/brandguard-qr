<?php

/**
 * Cron
 *
 * A class which represents cron jobs
 *
 * @package BakExtension\core
 * @version 1.0.0
 * @since   1.0.0
 */

namespace BakExtension\core;

defined('ABSPATH') || exit;

use BakExtension\api\RestAdapter;
use BakExtension\controllers\ProductList;

class Cron
{

    public static function bak_run_cron_task()
    {
        # Get all non-completed products and sync them
        $args = array(
            'post_type' => 'product',
            'posts_per_page' => -1,
            'post_status' => array('publish', 'private'),
            'meta_query' => array(
                'relation' => "AND",
                array(
                    'key' => 'bk_token_uuid',
                    'compare' => 'EXISTS',
                ),
                array(
                    'relation' => 'AND',
                    array(
                        'relation' => 'OR',
                        array(
                            'key' => 'bk_token_status',
                            'value' => 'confirmed',
                            'compare' => '!=',
                        ),
                        array(
                            'key' => 'bk_token_status',
                            'value' => 'canceled',
                            'compare' => '!=',
                        ),
                        array(
                            'key' => 'bk_token_status',
                            'value' => 'error',
                            'compare' => '!=',
                        ),
                        array(
                            'key' => 'bk_token_status',
                            'value' => 'rejected',
                            'compare' => '!=',
                        ),
                    ),
                    array(
                        'relation' => 'OR',
                        array(
                            'key' => 'bk_token_fingerprint',
                            'compare' => 'NOT EXISTS',
                        ),
                        array(
                            'key' => 'bk_token_fingerprint',
                            'value' => '',
                            'compare' => '=',
                        ),
                    ),
                ),

            )
        );

        $products = get_posts($args);

        # Generate access token
        $adapter = new RestAdapter();
        $adapter->generate_access_token();

        foreach ($products as $product) {
            $product_id = $product->ID;
            $token_uuid = get_post_meta($product_id, 'bk_token_uuid', true);

            if ($token_uuid) {
                $_data = $adapter->fetch_token_data($token_uuid);

                if (!empty($_data)) {
                    $data = array(
                        "bk_token_policy" => $_data->transaction->policy_id,
                        "bk_token_transaction" => $_data->transaction->uuid,
                        "bk_token_json" => $_data->transaction->metadata,
                        "bk_token_uuid" => $_data->uuid,
                        "bk_token_fingerprint" => $_data->fingerprint,
                        "bk_token_asset_name" => $_data->asset_name,
                        "bk_token_name" => $_data->name,
                        "bk_token_image" => $_data->image,
                        "bk_token_amount" => $_data->amount,
                        "bk_token_status" => $_data->status
                    );

                    ProductList::update_record($product_id, $data);
                }
            }
        }
    }
}


<?php

if (!class_exists('WC_Bakrypt')) :

    /**
     * My Extension core class
     */
    class WC_Bakrypt
    {
        /**
         * The single instance of the class.
         */
        protected static $_instance = null;

        /**
         * Constructor.
         */
        protected function __construct()
        {
            // Instantiation logic will go here.
        }

        public static function init()
        {
            /**
             * Check if WooCommerce is activated
             */

            if (!function_exists('is_woocommerce_activated')) {
                function is_woocommerce_activated()
                {
                    if (!class_exists('woocommerce')) {
                        // wp_die(__('Please activate WooCommerce.', 'bakrypt-wc-extension'), 'Plugin dependency check', array('back_link' => true));
                        
                    }
                }
            }

            is_woocommerce_activated();
        }

        /**
         * Main Extension Instance.
         * Ensures only one instance of the extension is loaded or can be loaded.
         */
        public static function instance()
        {
            if (is_null(self::$_instance)) {
                self::$_instance = new self();
            }

            return self::$_instance;
        }

        /**
         * Cloning is forbidden.
         */
        public function __clone()
        {
            // Override this PHP function to prevent unwanted copies of your instance.
            // Implement your own error or use `wc_doing_it_wrong()`
        }

        /**
         * Unserializing instances of this class is forbidden.
         */
        public function __wakeup()
        {
            // Override this PHP function to prevent unwanted copies of your instance.
            // Implement your own error or use `wc_doing_it_wrong()`
        }
    }
endif;

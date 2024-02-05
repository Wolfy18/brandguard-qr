<?php

function bak_get_template($template_name, $args = array())
{
    ob_start();

    // Convert associative array of arguments to individual variables
    extract($args);

    // Include the template
    include plugin_dir_path(WCBAK_PLUGIN_FILE) . 'templates/' . $template_name;

    // Get the contents of the buffer and clean it
    echo ob_get_clean();
}

<?php
/**
 * Plugin Name:       Current Year Block
 * Description:       Block to display current year, with editable prefix and suffix. Suitable for copyright notices.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           1.2.0
 * Author:            Sideways Design
 * Author URI:        https://sidewaysdesign.com/
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       current-year-with-prefix-and-suffix
 *
 * @package           create-block
 */

function create_block_editable_copyright_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_editable_copyright_block_init' );
<?php
/**
 * Plugin Name:       Editable Copyright Block
 * Description:       A block to insert the current year as part of an editable paragraph.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1
 * Author:            Sideways Design
 * Author URI:        https://sidewaysdesign.com/
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       editable-copyright-block
 *
 * @package           create-block
 */

function create_block_editable_copyright_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_editable_copyright_block_init' );
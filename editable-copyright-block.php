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
	register_block_type( __DIR__ . '/build', array(
		'render_callback' => 'swd_editable_copyright_render_callback',
	) );
}
add_action( 'init', 'create_block_editable_copyright_block_init' );

/**
 * Render callback for the dynamic block.
 *
 * @param array $attributes Block attributes.
 * @return string The rendered block HTML.
 */
function swd_editable_copyright_render_callback( $attributes ) {
	$prefix  = isset( $attributes['prefix'] ) ? $attributes['prefix'] : '';
	$suffix  = isset( $attributes['suffix'] ) ? $attributes['suffix'] : '';
	$year    = date( 'Y' );
	
	// Prepare the wrapper attributes.
	$wrapper_attributes = get_block_wrapper_attributes( array(
		'class' => 'editable-copyright-block_wrapper',
	) );

	return sprintf(
		'<div %1$s><p>%2$s%3$s%4$s</p></div>',
		$wrapper_attributes,
		esc_html( $prefix ),
		esc_html( $year ),
		esc_html( $suffix )
	);
}
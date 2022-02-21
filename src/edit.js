/**
* Retrieves the translation of text.
*
* @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
*/
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { useBlockProps } from '@wordpress/block-editor';
import { TextControl, FontSizePicker } from '@wordpress/components';


/**
* Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
* Those files can contain any CSS code that gets applied to the editor.
*
* @see https://www.npmjs.com/package/@wordpress/scripts#using-css
*/
import './editor.scss';

/**
* The edit function describes the structure of your block in the context of the
* editor. This represents what the editor will render when the block is used.
*
* @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
*
* @return {WPElement} Element to render.
*/

// const MY_TEMPLATE = [
// 	[ 'core/paragraph', { textColor: 'foreground', placeholder: 'Attribution Role' } ],
// ];


export default function Edit({ attributes, setAttributes }) {
	const currentYear = new Date().getFullYear();
const {	prefix, suffix } = attributes;
	// const [ prefix, setPrefix ] = useState( '©' );
	// const [ suffix, setSuffix ] = useState( 'Company Name' );

	const blockProps = useBlockProps( {
		className: 'editable-copyright-block_wrapper',
	} );

	return (
		<div { ...blockProps }>
		<TextControl label={__("Prefix", 'swd')} value={prefix} onChange={(val)=>setAttributes( { prefix: val } ) } />
		<p>{currentYear}</p>
		<TextControl label={__("Suffix", 'swd')} value={suffix} onChange={(val)=>setAttributes( { suffix: val } ) } />
		</div>
		);
	}
	
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { TextControl, PanelBody } from "@wordpress/components";
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const currentYear = new Date().getFullYear();
	const { prefix, suffix } = attributes;

	const blockProps = useBlockProps({
		className: "editable-copyright-block_wrapper",
	});

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Settings", "swd")}>
					<TextControl
						label={__("Prefix", "swd")}
						value={prefix}
						onChange={(val) => setAttributes({ prefix: val })}
						help={__("Text to appear before the year (e.g., ©).", "swd")}
					/>
					<TextControl
						label={__("Suffix", "swd")}
						value={suffix}
						onChange={(val) => setAttributes({ suffix: val })}
						help={__("Text to appear after the year (e.g., Company Name).", "swd")}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<p>
					{prefix}
					{currentYear}
					{suffix}
				</p>
			</div>
		</>
	);
}

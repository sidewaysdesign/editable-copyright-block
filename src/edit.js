import { __ } from "@wordpress/i18n";
import { useState } from "@wordpress/element";
import "./editor.scss";

import {
	AlignmentToolbar,
	BlockControls,
	useBlockProps,
	InspectorControls,
} from "@wordpress/block-editor";
import {
	TextControl,
	PanelBody,
	ToolbarGroup,
	CheckboxControl,
	SelectControl,
} from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
	const { prefix, suffix, alignment, htmlTag } = attributes;

	const [initialPrefix] = useState(prefix);
	const [initialSuffix] = useState(suffix);

	const blockProps = useBlockProps({
		style: { textAlign: alignment },
	});

	const handleFocus = (event) => {
		const range = document.createRange();
		range.selectNodeContents(event.target);
		const sel = window.getSelection();
		sel.removeAllRanges();
		sel.addRange(range);
	};

	const handlePrefixChange = (event) => {
		setAttributes({ prefix: event.target.textContent });
	};

	const handleSuffixChange = (event) => {
		setAttributes({ suffix: event.target.textContent });
	};

	const handlePrefixToggle = (value) => {
		setAttributes({ prefix: value ? initialPrefix : "" });
	};

	const handleSuffixToggle = (value) => {
		setAttributes({ suffix: value ? initialSuffix : "" });
	};

	const Tag = htmlTag || "p"; // fallback to 'p' tag if no htmlTag selected

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<AlignmentToolbar
						value={alignment}
						onChange={(newAlignment) =>
							setAttributes({ alignment: newAlignment })
						}
					/>
				</ToolbarGroup>
			</BlockControls>
			<InspectorControls>
				<PanelBody title={__("Display Options", "swd")}>
					<CheckboxControl
						label={__("Show Prefix", "swd")}
						checked={!!prefix}
						onChange={handlePrefixToggle}
					/>
					<CheckboxControl
						label={__("Show Suffix", "swd")}
						checked={!!suffix}
						onChange={handleSuffixToggle}
					/>
					<SelectControl
						label={__("HTML Element", "swd")}
						value={htmlTag}
						options={[
							{ label: __("<p>"), value: "p" },
							{ label: __("<div>"), value: "div" },
						]}
						onChange={(value) => {
							setAttributes({ htmlTag: value });
						}}
					/>
				</PanelBody>
			</InspectorControls>
			<div className="editable-copyright-block_wrapper">
				<Tag {...blockProps}>
					{prefix && (
						<span
							className="editable-copyright-block_prefix"
							contentEditable
							suppressContentEditableWarning
							onBlur={handlePrefixChange}
							onFocus={handleFocus}
						>
							{prefix}
						</span>
					)}
					<span className="editable-copyright-block_year">
						{new Date().getFullYear()}
					</span>
					{suffix && (
						<span
							className="editable-copyright-block_suffix"
							contentEditable
							suppressContentEditableWarning
							onBlur={handleSuffixChange}
							onFocus={handleFocus}
						>
							{suffix}
						</span>
					)}
				</Tag>
			</div>
		</>
	);
}

import { registerBlockType } from "@wordpress/blocks";

import "./style.scss";

import Edit from "./edit";
import save from "./save";

registerBlockType("create-block/editable-copyright-block", {
	title: "Editable Copyright Block",
	category: "widgets",
	attributes: {
		htmlTag: {
			type: "string",
			default: "p",
		},
		prefix: {
			type: "string",
			default: "©",
		},
		suffix: {
			type: "string",
			default: "[Organization Name]",
		},
		alignment: {
			type: "string",
			default: "left",
		},
	},
	supports: {
		color: {
			text: true,
			background: true,
			link: true,
		},
		spacing: true,
		typography: {
			fontSize: true,
			lineHeight: true,
			__experimentalFontFamily: true,
			__experimentalTextDecoration: true,
			__experimentalFontStyle: true,
			__experimentalFontWeight: true,
			__experimentalLetterSpacing: true,
			__experimentalTextTransform: true,
			__experimentalWritingMode: true,
			__experimentalDefaultControls: {
				fontSize: true,
			},
		},
	},
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
});

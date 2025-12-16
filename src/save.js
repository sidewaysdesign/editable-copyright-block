/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 *For dynamic blocks, this returns null because rendering is handled on the server.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {null} Dynamic blocks return null.
 */
export default function save() {
	return null;
}
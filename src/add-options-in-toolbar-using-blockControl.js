import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, BlockControls } from '@wordpress/block-editor';
import {
	ToolbarGroup,
	ToolbarButton,
	ToolbarDropdownMenu
} from "@wordpress/components";
import './editor.scss';

export default function add_options_in_toolbar_using_blockControl({ attributes, setAttributes }) {
	const { text } = attributes;
	return (
		<>
			<BlockControls group="inline">
				<p> Inline Control</p>
			</BlockControls>
			<BlockControls group="block">
				<p>Block Control</p>
			</BlockControls>
			<BlockControls controls={[
				{
					title: "Button 1",
					icon: "admin-collapse",
					isActive: true,
					onClick: () => console.log("Clicked Button 1")
				},
				{
					title: "Button 2",
					icon: "admin-generic",
					isActive: true,
					onClick: () => console.log("Clicked Button 2")
				}
			]}>
				{text &&
					<ToolbarGroup>
						<ToolbarButton
							title='Aline Left'
							icon="editor-alignleft"
							onClick={() => console.log('Align Left')}
						/>
						<ToolbarButton
							title='Aline Center'
							icon="editor-aligncenter"
							onClick={() => console.log('Align Center')}
						/>
						<ToolbarButton
							title='Aline Right'
							icon="editor-alignright"
							onClick={() => console.log('Align Right')}
						/>
						<ToolbarDropdownMenu
							icon="arrow-down-alt2"
							label={__('More Alignments', 'text-box')}
							controls={[
								{
									title: __('Wide', 'text-box'),
									icon: 'align-wide',
								},
								{
									title: __('Full', 'text-box'),
									icon: 'align-full-wide',
								}
							]}
						/>
					</ToolbarGroup>
				}
			</BlockControls>
			<RichText
				{...useBlockProps()}
				onChange={(value) => setAttributes({ text: value })}
				value={text}
				placeholder={__('Your Text', 'text-box')}
				tagName="h4"
				allowedFormats={[]}
			/>
		</>
	);
}

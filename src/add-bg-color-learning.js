import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
	InspectorControls,
	AlignmentToolbar,
	PanelColorSettings,
	ContrastChecker,
	withColors
} from '@wordpress/block-editor';
import './editor.scss';

function Edit( props ) {
	const { attributes, setAttributes, backgroundColor, textColor, setBackgroundColor, setTextColor} = props;
	const { text, alignment } = attributes;
	const onChangeText = (newText) => {
		setAttributes({ text: newText })
	}
	const onChangeAlignment = (newAlign) => {
		setAttributes({ alignment: newAlign })
	}
	return (
		<>
			<InspectorControls>
			<PanelColorSettings 
				title={__("Color Setting", 'text-box')} 
				icon="admin-appearance" 
				initialOpen 
				disableCustomColors={false} 
				colorSettings={[
					{
						value: backgroundColor.color,
						onChange: setBackgroundColor,
						label: __("Background Color", "text-box")
					},
					{
						value: textColor.color,
						onChange: setTextColor,
						label: __("Text Color", "text-box")
					}
				]}
				>
					<ContrastChecker 
					textColor={textColor.color} 
					backgroundColor={backgroundColor.color} 
					/>
				</PanelColorSettings>
			</InspectorControls>
			<BlockControls>
				<AlignmentToolbar value={alignment} onChange={onChangeAlignment} />
			</BlockControls>

			<RichText
				{...useBlockProps({
					className: `text-box-align-${alignment}`,
					style: {
						backgroundColor: backgroundColor.color,
						color: textColor.color,
					}
				})}
				onChange={onChangeText}
				value={text}
				placeholder={__('Your Text', 'text-box')}
				tagName="h4"
				allowedFormats={[]}
			/>
		</>
	);
}

export default withColors({
	backgroundColor: "backgroundColor",
	textColor: "Color"
})(Edit);
// =================== Save function ==================================
// import { useBlockProps, RichText, getColorClassName } from '@wordpress/block-editor';
// import className from "classnames";

// export default function save( { attributes } ) {
// 	const { text, alignment, backgroundColor, textColor, customBackgroundColor, customTextColor} = attributes;
// 	const backgroundClass = getColorClassName(
// 		"background-color",
// 		backgroundColor
// 	);
// 	const textClass = getColorClassName(
// 		"color",
// 		textColor
// 	);
// 	const classes = className( `text-box-align-${ alignment }`, {
// 		[textClass]: textClass,
// 		[backgroundClass]: backgroundClass
// 	})
// 	return (
// 		<RichText.Content
// 			{ ...useBlockProps.save({
// 				className: classes ,
// 				style: {
// 					backgroundColor:backgroundClass ? undefined : customBackgroundColor,
// 					color: textClass ? undefined : customTextColor,
// 				}
// 			}) }
// 			tagName="h4"
// 			value={ text }
// 		/>
// 	);
// }

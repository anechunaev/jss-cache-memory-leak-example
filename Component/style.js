module.exports = ({
	text,
	box,
}) => ({
	base: {
		margin: 0,
		padding: [box.sizing.inner],
		color: text.default.normal.color,
		font: `${text.default.normal.weight} ${text.default.normal.size}px/${text.default.normal.lineHeight}px ${text.default.normal.font}`,
	},
	wrapper: {
		color: text.default.normal.color,
		padding: [box.sizing.inner],
		margin: [box.sizing.outer],
	},
	link: {
		color: text.interactive.normal.color,
		cursor: 'pointer',
		'&:hover': {
			color: text.interactive.hover.color,
		},
	},
});
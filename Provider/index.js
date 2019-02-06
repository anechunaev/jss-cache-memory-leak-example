const {
	Component,
	createElement,
} = require('react');
const {
	create: createJss,
} = require('jss');
const {
	default: injectStyles,
	createTheming,
	JssProvider,
} = require('react-jss');
const jssCamelCase = require('jss-camel-case').default;
const jssDefaultUnit = require('jss-default-unit').default;
const jssCache = require('jss-cache').default;
const jssNested = require('jss-nested').default;
const defaultTheme = require('./theme');

const jss = createJss({}).use(jssCache(), jssCamelCase(), jssNested(), jssDefaultUnit());

const theming = createTheming('__CUSTOM_LIB__');
const {
	ThemeProvider,
} = theming;

const withStyles = (styles) => (component) => {
	const styled = injectStyles(styles, {
		theming,
	})(component);
	styled.displayName = 'CustomLib.WithStyles';
	return styled;
};

class CustomThemeProvider extends Component {
	render() {
		const {
			children = null,
				theme,
				registry,
		} = this.props;

		return createElement(
			JssProvider, {
				jss,
				registry,
			},
			createElement(
				ThemeProvider, {
					theme,
				},
				children,
			),
		);
	}
};
CustomThemeProvider.defaultProps = {
	theme: defaultTheme,
};

module.exports = {
	withStyles,
	default: CustomThemeProvider
};
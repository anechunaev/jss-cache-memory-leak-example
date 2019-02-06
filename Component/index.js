const {
	Component,
	createElement,
} = require('react');
const {
	withStyles
} = require('../Provider');
const styles = require('./style');

class CustomComponent extends Component {
	render() {
		const {
			classes,
		} = this.props;

		return createElement(
			'div', {
				className: classes.base,
			},
			createElement(
				'p', {
					className: classes.wrapper,
				},
				[
					createElement(
						'span', {
							key: 'text',
						},
						'Lorem ipsum dolor sit ',
					),
					createElement(
						'a', {
							className: classes.link,
							key: 'link',
						},
						'amet',
					),
				],
			),
		);
	}
}

module.exports = withStyles(styles)(CustomComponent);
const {
	createServer,
} = require('http');
const {
	createElement,
} = require('react');
const {
	renderToString,
} = require('react-dom/server');
const {
	SheetsRegistry,
} = require('react-jss');
const Provider = require('./Provider').default;
const CustomComponent = require('./Component');

createServer((_req, res) => {
	const sheets = new SheetsRegistry();
	const components = createElement(
		Provider, {
			registry: sheets
		},
		createElement(
			CustomComponent,
		),
	);
	const html = renderToString(components);

	const content = `
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<title>Example</title>
			<style type="text/css" id="server-side-styles">${sheets.toString()}</style>
		</head>
		<body>
			<div data-render="ssr" id="main">${html}</div>
		</body>
		</html>`;
	res.writeHead(200, {
		'Content-Type': 'text/html'
	});
	res.end(content.replace(/[\t\n]/g, ''), 'utf-8');
}).listen(
	8080,
	() => console.log('Server started @ http://0.0.0.0:8080')
);
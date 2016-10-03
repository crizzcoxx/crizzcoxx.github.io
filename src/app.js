const React = require('react')
const ReactDOM = require('react-dom')
const Pageheader = require('./page-header.js')
const styles = {
	backgroundColor: 'black',
	height: '55px',
	color: 'green',
	width: '100%',
	margin: '0'
}

const Homepage = () => (
	<div style= {styles}>tests</div>
)

ReactDOM.render(<Homepage/>, document.getElementById('app'))
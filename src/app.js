const React = require('react')
const ReactDOM = require('react-dom')
const Pageheader = require('./page-header.js')
const styles = {
	backgroundColor: '#039F6F',
	height: '55px',
	color: 'black',
	width: '100%',
	margin: '0'
}

const Homepage = () => (
	<div style= {styles}>test</div>
)

ReactDOM.render(<Homepage/>, document.getElementById('app'))
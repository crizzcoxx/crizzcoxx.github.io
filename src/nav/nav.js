const React = require('react');
const ReactDOM = require('react-dom');

const Navlogo = React.createClass ({
	render () {
		return (
		<div> 
			<img src= {this.props.src} />
		</div>
		)
	}
})

module.exports = Navlogo








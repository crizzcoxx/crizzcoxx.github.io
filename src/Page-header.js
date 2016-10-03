const React = require('react')
const ReactDOM = require('react-dom')

const Pageheader = React.createClass ({
	render () {
		return (
			<div style= 
				{{backgroundColor: this.props.bgColor}, {height: this.props.height}}>
			</div>

		)
	}

})

module.exports = Pageheader
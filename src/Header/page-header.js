const React = require('react')
const ReactDOM = require('react-dom')

const Pageheader = React.createClass ({
	render () {
		return (
		<div> 
			<img src= {this.props.src} />
    </div>
		)
	}
})

module.exports = Pageheader
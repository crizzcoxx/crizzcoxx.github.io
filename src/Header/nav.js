const React = require('react')
const ReactDOM = require('react-dom')
const ReactRouter = require('react-router')
const {Link} = ReactRouter

const Unorderedlist = React.createClass ({
	render () {
		return (
      <div>
        <ul ClassName='nav-ul'>
          <Link to='/portfolio.js' className='portfolio'>Portfolio</Link>
          <Link to='/contact.js' className='contact-me'>Contact Me</Link>
        </ul>
      </div>
		)
	}
})

module.exports = Unorderedlist








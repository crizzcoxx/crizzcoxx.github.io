const React = require('react')
const ReactDOM = require('react-dom')
const styles = require('app.css')
const Unorderedlist = require('./nav.js')
const Pageheader = require('./page-header.js')
const ReactRouter = require('react-router')
const {Link} = ReactRouter

const Home = () => (
  <div className={styles.bheader}>
    <img src= 'http://www.clipartkid.com/images/808/big-image-png-AeddOq-clipart.png' />
    <ul className={styles.navul}>
      <Link to='/contact.js' className='links'>Contact Me</Link>
      <Link to='/portfolio.js' className='links' id='portfolio'>Portfolio</Link>
    </ul>
  </div>
)

module.exports = Home








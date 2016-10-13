const React = require('react')
const ReactDOM = require('react-dom')
const styles = require('app.css')
const Pageheader = require('./page-header.js')
const ReactRouter = require('react-router')
const Section1 = require('./section1.js')
const {Link} = ReactRouter

const Home = () => (
  <div className={styles.bheader}>
    <Pageheader src= 'http://www.clipartkid.com/images/808/big-image-png-AeddOq-clipart.png' />
    <ul className={styles.navul}>
      <Link to='/contact.js' className='links' id='contact'>Contact Me</Link>
      <Link to='/portfolio.js' className='links' id='portfolio-link'>Portfolio</Link>
    </ul>
    <section className={styles.parallax}>
      <Section1 title='place holder text' layerBack='stuff' layerBase='thirds' />
    </section>
  </div>
)

module.exports = Home

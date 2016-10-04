const React = require('react');
const ReactDOM = require('react-dom');
const Pageheader = require('./page-header/page-header.js');
const styles = require('./page-header/page-header.css');
const Navlogo = require('./nav/nav.js')

const Homepage = () => (
	<div className={ styles.bheader }>
	<img src= 'http://www.clipartkid.com/images/808/big-image-png-AeddOq-clipart.png' />
    <p className="text">Global Selectors</p>
  </div>
)

ReactDOM.render(<Homepage/>, document.getElementById('app'))
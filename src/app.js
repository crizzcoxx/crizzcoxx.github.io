const React = require('react')
const ReactDOM = require('react-dom')
const Home = require('./Header/home.js')
const Portfolio = require('./Header/portfolio.js')
const Contact = require('./Header/contact.js')
const ReactRouter = require('react-router')
const { Router, Route, hashHistory } = ReactRouter

const App = () => (
	<Router history= {hashHistory}>
    <Route path ='/' component={Home} />
    <Route path='portfolio.js' component={Portfolio} />
    <Route path='contact.js' component={Contact} />
  </Router>
)

ReactDOM.render(<App/>, document.getElementById('app'))
const React = require('react')
const ReactDOM = require('react-dom')
const styles = require('app.css')

const Section1 = React.createClass ({
  render () {
    return (
      <div className={styles.parallax__group}>{this.props.title}
        <div className={styles.parallax__layer} id={styles.parallax__layer__back}>{this.props.layerBack}</div>
        <div className={styles.parallax__layer} id={styles.parallax__layer__base}>{this.props.layerBase}</div>
      </div>

    )
  }
})

module.exports = Section1

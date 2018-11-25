import React from 'react'
{{#if redux}}
import { connect } from 'react-redux'

import { updateTitle } from '../../actions/title'
{{/if}}
{{#unless scss}}
import * as styles from './home.scss'
{{/unless}}
{{#unless less}}
import * as styles from './home.less'
{{/unless}}
{{#unless stylus}}
import * as styles from './home.styl'
{{/unless}}

class Home extends React.Component {
  render() {
    return (
      <div className={styles.contianer}>
        <img className={styles.logo} src={require('../../assets/logo.svg')} />
        <p {{#if redux}}onClick={() => updateTitle('欢迎使用react脚手架')} {{/if}}className={styles.title}>{this.props.title}</p>
      </div >
    )
  }
}

{{#if redux}}
export default connect((state) => {
  return {
    title: state.title
  }
})(Home)
{{else}}
export default Home
{{/if}}
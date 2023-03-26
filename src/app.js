import { Component } from 'react'
import { FC } from 'react'
import './app.less'

// class App extends Component {

//   componentDidMount () {}

//   //程序/页面，启动或切前台时触发；对应小程序的onShow
//   componentDidShow () {}

//   //程序/页面，切后台或隐藏时触发；对应小程序的onHide
//   componentDidHide () {}

//   render () {
//     // this.props.children 是将要会渲染的页面
//     return this.props.children
//   }
// }
export const App=(props)=>{
  return (
    props.children
  )
}

export default App;

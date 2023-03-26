import { Component } from 'react'
import { View} from '@tarojs/components'
import './dialog.less'

export const Dialog=(props)=>{
    return (
      <View className='dialog'>{props.children}
      </View>
    )
}

export default Dialog;

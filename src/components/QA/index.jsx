import { Component,useState } from 'react'
import { View, Input,Textarea,Button} from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.less'
import Dialog from '../../pages/index/Dialog'

export const QA=(props)=>{
    const handleInput=(e)=>{
      props.setInput({...props.quesAndText,title:e.target.value})
      
    }
    const handleTextarea=(e)=>{
      props.setInput({...props.quesAndText,text:e.target.value})
    }
    const isCancle=()=>{
      props.setShowQA(false)
    }
    const showText=()=>{
        //判断如果其中一个没有值，则提示且不进行展示。否则展示到
        if(props.quesAndText['title']==''|| props.quesAndText['text']==''){
          Taro.showToast({
            title:'输入不能为空',
            icon:'success'
          })
        }else{
          //将对象加入到数组中
          props.quesList.push({id:parseInt(Math.random()*10000),...props.quesAndText})//对象存进去
          props.setList(props.quesList)
          props.setStore("question",props.quesList)
          props.setShowQA(false)
          props.setTrue(true)
        }
    }
     
        
    
    return (
      <Dialog>
        <View className='question'>
          <View className='ques-body'>
            <Input placeholder='请输入你的问题:' className='ques-title' onInput={handleInput}></Input>
            <Textarea placeholder='请输入你的描述:' className='ques-text' onInput={handleTextarea}></Textarea>
            <View className='btnType'>
              <Button onClick={showText}>确认</Button>
              <Button onClick={isCancle}>取消</Button>
            </View>
            
          </View>
        </View>
      </Dialog>
      
    )
}
export default QA;

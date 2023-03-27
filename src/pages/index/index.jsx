import { Component,useEffect,useState} from 'react'
import { View, Text,Button} from '@tarojs/components'
import Taro from '@tarojs/taro'
// import './dialog.less'
import './index.less'
// import Dialog from './Dialog'
import QA from '../../components/QA'

//为了让数据随着更新也能保留在页面上，使用Taro中的getStorageSync
function getStore(key){
  let str = Taro.getStorageSync(key)
  if(!str){return []}
  return JSON.parse(str)
}
//将改变之后的字符串传入进来
function setStore(key,obj){
  let str;
  if(typeof obj ==="object"){
    str = JSON.stringify(obj)
  }
  Taro.setStorageSync(key,str)
}
export const Index = ()=> {
  const [isShowQA,setShowQA]=useState(false)
  const [quesAndText,setInput]=useState({title:'',text:''})
  const [quesList,setList] = useState(getStore("question")) //存储数据的空列表
  const [isTrue,setTrue] = useState(false)
  const changeShow =()=>{
    setShowQA(true)
    if(quesList==[]){
      setTrue(false)
    }
    setInput({title:'',text:''})
  }
  // useEffect(()=>{
  //   setTotalTxt([...totalTxt,quesAndText])
  // },[totalTxt])
  // componentWillMount () { }

  // componentDidMount () { }

  // componentWillUnmount () { }

  // //程序/页面，启动或切前台时触发；对应小程序的onShow
  // componentDidShow () { }
  
  // //程序/页面，切后台或隐藏时触发；对应小程序的onHide
  // componentDidHide () { }
    return (
      <View>
        <Text className='index'>问答展示模块</Text>
      {isTrue?(quesList.map((item,index)=>{
            // console.log('数组对象最终形式',quesList)
            // console.log(item)
          return(
                <View className='showtxt'>
                  <Text className='txt1'>{index+1}、你的问题是: {item['title']}</Text>
                  <Text className='txt2'>你的描述是: {item['text']}</Text>
                </View> 
                 
                )
      })):null}
        {isShowQA?<QA setShowQA={setShowQA} 
                      setInput={setInput} 
                      quesAndText={quesAndText} 
                      setTrue={setTrue} 
                      quesList={quesList} 
                      setList={setList} 
                      setStore={setStore}/>:null}
          <Button className='btn' onClick={changeShow}>提问</Button>
         
      </View>
      
    )
}
export default Index;

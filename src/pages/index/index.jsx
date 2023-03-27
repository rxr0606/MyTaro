import { Component,useEffect,useState} from 'react'
import { View, Text,Button,Image} from '@tarojs/components'
import Taro from '@tarojs/taro'
// import './dialog.less'
import './index.less'
import yes from '../../img/good.png'
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
  const [quesAndText,setInput]=useState({title:'',text:'',vote:0})
  const [quesList,setList] = useState(getStore("question")) //存储数据的空列表
  const [isTrue,setTrue] = useState(getStore("question").length==0?false:true)
  const changeShow =()=>{
    setShowQA(true)
    if(quesList==[]){
      setTrue(false)
    }
    //下一条评论的初始化
    setInput({title:'',text:'',vote:0})
  }

  useEffect(()=>{
    Taro.clearStorage()
  },[])

  const handleYes=(item)=>{
    return ()=>{
      console.log(item)
      item.vote++;
      console.log('更新前的列表',item)
      //更新后的item.vote放进状态里,先map遍历找到对应id的那一项并修改
      let newList = quesList.map((newitem)=>{
        if(newitem.id === item.id){
            newitem = {...item} //更新状态         
          }
        return newitem
      })
      //这里出问题，新的列表先前一个变为了undefined。原因是return写在了if里==
      //更新quesList
      setList(newList)
      //更新setStore
      setStore("question",newList)
    }
  }
    return (
      <View>
        <Text className='index'>问答展示模块</Text>
      
      {
      isTrue?(  
            quesList.sort((a,b)=>{return b.vote - a.vote}).map((item,index)=>{
            return(
                  <View className='showtxt'>
                    <View className='txt'>
                      <Text className='txt1'>{index+1}、你的问题是: {item['title']}</Text>
                      <Text className='txt2'>你的描述是: {item['text']}</Text>
                    </View>

                    <View className='imgT'>
                      <Image src={yes} className='img' onClick={handleYes(item)}></Image>
                      <Text className='vote'>{item.vote}</Text>
                    </View>
                  </View> 
                   
                  )
                  })
         
        // </View>
        ):<View className='default'><Text >快来提问吧！</Text></View>}
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

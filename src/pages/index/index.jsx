import { Component,useEffect,useState} from 'react'
import { View, Text,Button} from '@tarojs/components'

// import './dialog.less'
import './index.less'
// import Dialog from './Dialog'
import QA from '../../components/QA'

var totalTxt = []
export const Index = ()=> {
  const [isShowQA,setShowQA]=useState(false)
  const [quesAndText,setInput]=useState({title:'',text:''})
  const [isTrue,setTrue] = useState(false)
  const changeShow =()=>{
    setShowQA(true)
    if(totalTxt==[]){
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
      {isTrue?(totalTxt.map((item,index)=>{
            // console.log(index)
            // console.log(item)
          return(
                <View className='showtxt'>
                  <Text className='txt1'>{index+1}、你的问题是: {item['title']}</Text>
                  <Text className='txt2'>你的描述是: {item['text']}</Text>
                </View>   
                )
      })):null}
        {isShowQA?<QA setShowQA={setShowQA} setInput={setInput} quesAndText={quesAndText} setTrue={setTrue} totalTxt={totalTxt}/>:null}
          <Button className='btn' onClick={changeShow}>提问</Button>
         
      </View>
      
    )
}
export default Index;

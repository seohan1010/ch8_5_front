import {useState, useRef} from 'react';
import ChattingBlock from '../components/ChattingBlock';
import classes from '../style/pages_style/chatting.module.css';


interface Element {
    index: Number,
    isHuman: Number,
    message: String
}

const default_msg = "안녕하세요? 무엇을 도와드릴까요?"

const Chatting =()=>{

    const [ cbarr, setCbarr ] = useState<Element[]>([{index: 0,isHuman: 0, message:default_msg}]);
    const [ index, setIndex] = useState<any>(0);
    const userMsg = useRef<any>("");
  

    // 함수안의 내용, 즉 함수 내부에서 호출한 함수의 작업이 
    // 종료된 후에 변경된 state의 값을 사용할수 있다. 
    const clickEvent =(num: Number)=>{
            // 클릭 이벤트가 발생할때마다 index의 값을 증가 
            setIndex((index: any)=> ++index);
            console.log(index+1)
        if(num===0){
            insertBot();
        }else if(num===1){
            insertHuman()
        }


    }

    const insertBot = () => {
        console.log('index is : ',index+1)
        const obj = {index: index+1, isHuman: 0,message:default_msg}
        setCbarr((cbarr:Element[])=>[...cbarr, obj])
    }

    const insertHuman = () => {
        const userMsgRef = userMsg.current.value;
        console.log('index is : ',index+1);
        setCbarr((cbarr: Element[])=>[...cbarr, {index: index+1, isHuman:1, message: userMsgRef}]);
        userMsg.current.value = "";
    }

    const resetChat = () => {
        console.log('reset chat...');
        setTimeout(()=>{
            setCbarr([{index:0,isHuman:0,message:default_msg}]);
        },1500);
      
    }

    return (
        <>
            <div className={classes.chatting__wrap}>
                {cbarr.map((element:any, index:any)=><ChattingBlock key={element.index} obj={element}></ChattingBlock>)}
            </div>
            <div style={{backgroundColor:'green', textAlign:'center'}}>
                <textarea style={{ resize: 'none', width: '100vw'}} ref={userMsg} />
            <button style={{margin:'5px'}} onClick={()=>clickEvent(0)}>this is bot button</button><button style={{margin:'5px'}} onClick={()=>clickEvent(1)}>this is human button</button>
            <button style={{width:'90vw'}} onClick={resetChat}>reset</button>
            </div>
        </> 
    );

}




export default Chatting;
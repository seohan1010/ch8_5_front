import {useState, useEffect} from 'react';
import ChattingBlock from '../components/ChattingBlock';
import classes from '../style/pages_style/chatting.module.css';


interface Element {
    index: Number,
    isHuman: Number
}

const Chatting =()=>{

    const [ cbarr, setCbarr ] = useState<Element[]>([{index: 0,isHuman: 1}]);
    const [ index, setIndex] = useState<any>(0);

  
    //새로운 채팅에 배열의 마지막 인덱스를 1증가시킨 index값을 할당하고 배열의 마지막에 넣는다. 


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
        const obj = {index: index+1, isHuman: 0}
        setCbarr((cbarr:Element[])=>[...cbarr, obj])
    }

    const insertHuman = () => {
        console.log('index is : ',index+1);
        setCbarr((cbarr: Element[])=>[...cbarr, {index: index+1, isHuman:1}]);

    }

    return (
        <>
            <div className={classes.chatting__wrap}>
                {cbarr.map((element:any,index:any)=><ChattingBlock key={element.index} arr={element}></ChattingBlock>)}
            </div>
            <div style={{backgroundColor:'green',textAlign:'center'}}>
            <button style={{margin:'5px'}} onClick={()=>clickEvent(0)}>this is bot button</button><button style={{margin:'5px'}} onClick={()=>clickEvent(1)}>this is human button</button>
            </div>
        </> 
    );

}




export default Chatting;
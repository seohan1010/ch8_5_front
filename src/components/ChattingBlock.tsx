import {useState} from 'react';
import classes from '../style/pages_style/chattingBlock.module.css'

interface Element {
    index: Number,
    isHuman: Number;
}

const ChattingBlock = (props: any) => {


        const bool = props.arr.isHuman === 1;
        console.log(props.arr.isHuman);
        console.log(bool);


    return (
        <>
            <div className={classes.chatting__block}>
                <div className={bool ? classes.human__inner : classes.chatbot__inner}>
                this is chatting block  this is chatting block   this is chatting block  this is chatting block 
                </div>
            </div>
        </>
    );
}


export default ChattingBlock;
import classes from '../style/pages_style/chattingBlock.module.css'



const ChattingBlock = (props: any) => {


        const bool = props.obj.isHuman === 1;
        console.log(props.obj.isHuman);
        console.log(bool);


    return (
        <>
            <div className={classes.chatting__block}>
                <div className={bool ? classes.human__inner : classes.chatbot__inner}>
                            {props.obj.message}
                </div>
            </div>
        </>
    );
}


export default ChattingBlock;
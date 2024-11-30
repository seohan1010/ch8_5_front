import classes from '../style/pages_style/chattingPage.module.css';
import Chatting from '../components/Chatting';

const ChattingPage = () => {


    return (
        <div className={classes.mainpage__wrap}>
                <Chatting></Chatting>
        </div>
    )
}


export default ChattingPage;
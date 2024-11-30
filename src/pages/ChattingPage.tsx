import classes from '../style/pages_style/chattingPage.module.css';
import Chatting from '../components/Chatting';
import Footer from '../components/Footer';
const ChattingPage = () => {


    return (
        <div className={classes.mainpage__wrap}>
                <div style={{width:'100vw',height: '50px',backgroundColor:'purple'}}></div>
                <Chatting></Chatting>
                <div style={{width:'100vw',height:'50vh'}}></div>
                <Footer></Footer>
        </div>
    )
}


export default ChattingPage;
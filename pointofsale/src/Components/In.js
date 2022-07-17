import React, { useRef, useState } from "react";
import classes from "./in.module.css"
import { useNavigate } from "react-router-dom";


const In = (props) => {
    const password = useRef();
    const passwordConfirm = useRef();
    const userName = useRef();
    const [UserName, setUserName] = useState("");
    const [Password, setPassword] = useState("");
    const UserNameREF = userName.value;
    const PasswordREF = password.value;
    let [spano, setspano] = useState(false);
    let [emp, setemp] = useState(true)
    const Handleachange = () => {
        if (password.current.value === passwordConfirm.current.value) {
            setspano(false);
        } else {
            setspano(true);
        }
    }
    const emptychange = () => {
        if (userName.current.value === "") {
            setemp(false);
        } else {
            setemp(true);
        }
    }

    const re_enter = <><label htmlFor='title'>Re-Enter Password</label>

        <input type="password" id="title" className={classes.control} ref={passwordConfirm} onChange={Handleachange} />
        <span  >{spano ? "doesnot match" : ""}</span>
    </>
    //         const link1=()=>{
    //  <Link to={props.linking}></Link>
    //         }

    let history = useNavigate();
    const interchangePage = () => {
        history(props.linking);

    }
    let history1 = useNavigate();
    const SignUp = () => {
        setUserName(userName.value);
        setPassword(passwordConfirm.value);
        history1(props.linking1);
    }
    const SignIn = () => {
        const [condition, setcondition] = useState(false);
        let history2 = useNavigate();
        if (UserName === UserNameREF) {
            setcondition(true);
        }
        else {
            {alert('Username Doesnot Match')}
            setcondition(false);
        }if (Password === PasswordREF) {
            setcondition(true);
        } else {
            {alert('password Doesnot Match')}
            setcondition(false);
        }
        if (condition) {
            history2('/signup')
        }
    }


    return (


        <div className={classes.form}>
            <form >
                <h1>{props.TITLE}</h1>
                <div className={classes.imagecontainer}>
                    <img alt={props.TITLE} src={props.image} className={classes.avatar}>
                    </img>
                </div>
                <div className={classes.control}>

                    <label htmlFor='title'>UserName</label>

                    <input type="text" id="title" className={classes.control} onChange={emptychange} ref={userName} />
                    <span  >{emp ? "" : "Must not be empty"}</span>

                    <label htmlFor='title'>Password</label>

                    <input type="password" id="title" className={classes.control} ref={password} />
                    {props.linking === '/' ? re_enter : ""}

                </div>
                <div className={classes.actions}>
                    <button onClick={props.linking === '/' ? SignUp : SignIn}>{props.TITLE}</button>
                </div>
            </form>
            <div className={classes.actions}>
                <button onClick={interchangePage} >{props.button}</button>
            </div>
        </div>
    );
}
export default In;
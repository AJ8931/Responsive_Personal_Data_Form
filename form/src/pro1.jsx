import React, { useState, useEffect } from "react";
import './pro1.css';


const Pro1=()=>{
    const initialvalue ={username:"" ,
    number:"" , 
    email:"" ,
     password:""};
     const [formvalues, setvalues]=useState(initialvalue);
     const [formError, setError]=useState({});
     const [isSubmit, setSubmit]=useState(false);


    const handleachange=(e)=>{
        const { name, value } = e.target;
        setvalues({...formvalues, [name]: value});

    };

    const handlesubmit=(e)=>{
        e.preventDefault();
        setError(validate(formvalues)); 
    setSubmit(true);
    
    }
    
    useEffect(()=>{
        console.log(formError);
        console.log(formvalues);
        // console.log(...formvalues);
        if(Object.keys(formError).length === isSubmit){
        }
    })
    const validate=(values)=>{
        const errors = {};
        const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(!values.username){
            errors.username="Username is required!";
        }
        if(!values.number){
            errors.number="number is required!";
        }else if(isNaN(values.number)){
            
            errors.number="number is required!";
        }
        if(!values.email){
            errors.email="email is required!";
        } else if(!regex.test(values.email)){

            errors.email="email is required!";
            }
        
        if(!values.password){
            errors.password="password is required!";
        }else if(values.password.length<4){
            errors.password="password must be of 4 characters!";

        }
        return(errors);

    }

return(
    <>
    <form onSubmit={handlesubmit} >
    <div className="bg" >
    <div className="_form_" >
    <h1>:Login Form:</h1>
    <pre> {JSON.stringify(formvalues , undefined, 2)} </pre>
        <div className="Field" >
            <label>
            Username:
            </label><br/>
                <input type="text" name="username" placeholder="Enter your Name" value={formvalues.username} 
                    onChange={handleachange} />
                    <p>{formError.username}</p>
        </div>
        <div className="Field" >
            <label>
            Number:
            </label><br/>
                <input type="text" name="number" placeholder="Enter Number"  value={formvalues.number}
                    onChange={handleachange}
                />
                    <p>{formError.number}</p>
        </div>
        <div className="Field" >
            <label>
            Email:
            </label><br/>
                <input type="text" name="email" placeholder="Enter Email" value={formvalues.email}
                    onChange={handleachange}/>
                    <p>{formError.email}</p>
        </div>
        <div className="Field" >
            <label>
            Password:
            </label><br/>
                <input type="password" name="password" placeholder="Enter Password" value={formvalues.password}
                    onChange={handleachange}/>
                    <p>{formError.password}</p>
        </div>
    <button className="button blue">Submit</button>
    </div>
        </div>
    </form>
        </>
);
}
export default Pro1;
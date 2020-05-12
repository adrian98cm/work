import React, {useEffect,useRef} from 'react'

import classes from './Cockpit.module.css'

import AuthContext from '../../context/auth-context'

const Cockpit = (props) => {

    const toggleBtnRef = useRef(null);
    

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');

        // const timer = setTimeout(() =>{
        //     alert('Saved data to cloud!');
        // } ,1000)
        toggleBtnRef.current.click();
        return () => {
            //clearTimeout(timer);
            console.log('[Cockpit.js] cleanup work in useEffect');
        };
    }, []);

    const assignedClasses = [];
    let btnClass = '';

    if(props.showPersons){
        btnClass = classes.Red;
    }


    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }


    return (

        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is working!</p>
            <button ref={toggleBtnRef} className={btnClass} 
            onClick={props.clicked}>
                Switch Name
            </button>
            <AuthContext>
            {(context) => <button onClick={context.login}>Log in</button>}
            </AuthContext>
        </div>

    );
};

export default React.memo(Cockpit);
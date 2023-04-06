
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch,budget, currency } = useContext(AppContext);
    
    const changebudget = (val)=>{

        if(val === '20010') {
            alert("The budget cannot be more than 20000");
            return;
        }

        if(val === "960" ) {
            alert("The budget cannot lower than spending!");
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: val
        });

    }


    return (
        <div className='alert alert-secondary'>
            <span>Budget:{currency}
            <input type='number'
            min="950" max="20010"
            step ="10"
            input value ={budget}
            onChange={(event) => changebudget(event.target.value)}>
                </input></span>
            
            
        </div>
        
        
    );
};
export default Budget;
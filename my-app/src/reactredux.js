import React ,{Component} from 'react';
import {createStore} from 'redux';


class Redux extends Component{
    render(){


        const reducer = function(state,action){
            if(action.type ==="ATTACT"){
                return action.payload
            }

            if(action.type ==="GREEN ATTACK"){
                return action.payload
            }
            return state;
        }

        // store 
        const store=createStore(reducer,"Syed");

        // reducer
      

        store.subscribe(()=>{
            console.log("store is now",store.getState());
        })

        store.dispatch({type:"ATTACTa",payload:"iRON MAN"})
        store.dispatch({type:"GREEN aATTACK",payload:"I AM REHAN"})

        


        return(
            <div>
                test
                {store.getState()}
            </div>
        )
    }
}

export default Redux;
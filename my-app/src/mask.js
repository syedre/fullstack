import React, { useState } from 'react'
import MaskedInput from 'react-maskedinput'
 

 const CreditCardDetails = () => {
   
    const[{card,expiry,cvv},setState]=useState(['','','']);
    const [abc,setAbc]=useState(true);
   
     const _onChange = (e) => {
      setState({[e.target.name]: e.target.value})
    }
    
   
     
    
      return(
       <div className="CreditCardDetails">
        <label>
          IP:{' '}
         { abc 
              ?<MaskedInput mask={[/[1-2]/, /[0-9]/, /[0-9]/, '.', /[1-2]/, /[0-9]/, /[0-9]/, '.', /[1-2]/, /[0-9]/, /[0-9]/, '.', /[1-2]/, /[0-9]/, /[0-9]/]} name="card" size="20" onChange={_onChange}
              pipe={value => {
                const subips = value.split('.')
                const invalidSubips = subips.filter(ip => {
                  ip = parseInt(ip) 
                  return ip < 0 || ip > 255
                })
                return invalidSubips.length > 0 ? false : value
              }}
              placeholderChar={'\u2000'}
              keepCharPositions={true}
              showMask/>
              : <MaskedInput  disabled mask={[/[1-2]/, /[0-9]/, /[0-9]/, '.', /[1-2]/, /[0-9]/, /[0-9]/, '.', /[1-2]/, /[0-9]/, /[0-9]/, '.', /[1-2]/, /[0-9]/, /[0-9]/]}
               name="card" size="20" onChange={_onChange}/>
         }
         { abc 
              ?<MaskedInput mask="1111.1111.1111.1111" name="card" size="20" onChange={_onChange}/>
              : <MaskedInput  disabled mask="1111.1111.1111.1111" name="card" size="20" onChange={_onChange}/>
         }
          
              </label>
       
        
      </div>
      );
    }
  

  export default CreditCardDetails;
import React, { useEffect, useState } from 'react';
import ApolloClient from 'apollo-boost';

// import Aaaa from './oneplus';
import './App.css';
import {  gql } from 'apollo-boost';
import { ApolloProvider, useQuery ,useMutation } from '@apollo/client';




const client = new ApolloClient({
  uri:'http://localhost:4000/graphql'
  
});

const ADD_USER = gql`
mutation AddUser($firstname: String) {
  addUser(firstname: $firstname) {
    
    firstname
  }
}
`;



const GET_LAUNCHES = gql`
{
  abcd{
    firstname
    id
    age
  }
}


`;

 const Aaaa=() =>{
  //  const [abcd,setdata]=useState([]);
    const { loading, error, data } = useQuery(GET_LAUNCHES);
    
    
  
    // const [abcd,setdata]=useState([]);
    
   
     
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
     

     
     
    

     
       
  return data.abcd.map(({ id,firstname ,age}) => (
    <center>
      <div key={id}>
      <p>
       {/* {id} */}
       
       {firstname}
      </p>
     
    </div>
    </center>
  ));
      
   

      
  }

  function AddTodo() {
    let input;
    const [addTodo, { data }] = useMutation(ADD_USER);
  
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            addTodo({ variables: { firstname: input.value } });
            input.value = '';
          }}
        >
          <input
            ref={node => {
              input = node;
            }}
          />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
const App =()=>{
 
return(

      <ApolloProvider client={client}>
        <Aaaa/>
        <AddTodo/>
       </ApolloProvider>
  
    
    
);
}

export default App;





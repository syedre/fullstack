import React, { useEffect, useState } from 'react';
import ApolloClient from 'apollo-boost';

// import Aaaa from './oneplus';
import './App.css';
import { ApolloProvider, useQuery ,useMutation } from '@apollo/client';
import * as Constants from './graphql/queries';
import Addtodo from './components/addtodo';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MyButton from './components/styledButton';




const client = new ApolloClient({
  uri:'https://graphqlapolo.herokuapp.com/v1/graphql'
  
});


const RehanList = () =>{
  const { loading, error, data } = useQuery(Constants.GET_LIST_REHAN);
  const [deletedata] = useMutation( Constants.Delete_data,{
    refetchQueries:mutationResult=>[{query:Constants.GET_LIST_REHAN}]
  });
  if (loading) return <p>Loadinf</p> 
  if (error) return <p>{error.message}</p> 
  return data.rehan_syed.map(({FNAME,LNAME,ID})=>(
    <div >
      {FNAME} {LNAME}
      <p>{ID}</p>
      <div>
        <MyButton  onClick={()=>deletedata({variables:{UserName:FNAME}})}>delete</MyButton>
      </div>

    </div>
  ))

}

 const Aaaa=() =>{
  //  const [abcd,setdata]=useState([]);
    const { loading, error, data } = useQuery(Constants.GET_LAUNCHES);
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
    const [addTodo, { data }] = useMutation(Constants.ADD_USER);
  
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

  const Adddata = ()=>{
    const [createdata] = useMutation( Constants.Add_Fname_Lname,{
      refetchQueries: mutationResult=>[{query:Constants.GET_LIST_REHAN}]
    });
    let fname,lname,userid;
    return(
      <>
        <form onSubmit={e=>{
          e.preventDefault();
          createdata({variables:{FNAME:fname.value,LNAME:lname.value,ID:userid.value}});
          fname.value='';
          lname.value=''
          userid.value=''
        }}>
          <input className="input-value" variant="outlined" ref={value => fname = value } id="fname"  type="text"/>
          <input ref={value => lname = value } id="lname"type="text"/>
          <input ref={value => userid = value } id="userid" type="number"/>
          <button type="submit">submit</button>
        </form>
      </>
    )
  }



  
const App =()=>{
 
return(

      <ApolloProvider client={client}>
        <Grid container>
          <Grid item md={6} lg={6} sm={6} style={{backgroundImage:"linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",width:"100vw",height:"100vh"}}>
          <Adddata/>
          </Grid>
          <Grid item md={6} lg={6} sm={6} style={{width:"100vw",height:"100vh"}}>
              <RehanList/>

          </Grid>
        </Grid>


        <div style={{display:"flex",justifyContent:"space-between"}}>
          <div style={{backgroundColor:"red",visibility:"hidden",width:"40px"}}>
            

          </div>
          <div style={{}}>asfd</div>
          <div style={{backgroundColor:"red",width:"40px"}} >
            dkfkd

          </div>

        </div>
        {/* <Aaaa/> */}
        {/* <AddTodo/> */}
        {/* <RehanList/>
        <Adddata/>
        <Addtodo/> */}
       </ApolloProvider>
  
    
    
);
}

export default App;





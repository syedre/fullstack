import React from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';

const Courses = ()=>(
    <Query query = {gql`
        {
            Article{
                id
                name
                age
                city
        }
    }

   
   `}>
       {({loading,error,data}) =>{
           if(loading) return <p>loading....</p>;
           if(error) return <p>console.error();....</p>;

           return data.Article.map(({id,name})=>(
               <div key={id}>
                   <p>{`${name}`}</p>
               </div>
           ));

       }}
       </Query>


);
export default Courses


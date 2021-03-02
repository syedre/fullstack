import React, { Component} from 'react';
// import {gql,useQuery} from "apollo-boost";
import { useQuery, gql,graphql } from '@apollo/client';


const getUser=gql`
query user {
    user(id:"60289b4c2eda6e18ec06c827"){
      firstname
      age
    }
  }

`;


 function Aaaa() {
    const { loading, error, data } = useQuery(getUser);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
    return data.user.map(({ id, firstname,age }) => (
      <div key={id}>
        <p>
         {firstname}
        </p>
        <p>{age}</p>
      </div>
    ));
  }

  export default graphql(getUser)(Aaaa);
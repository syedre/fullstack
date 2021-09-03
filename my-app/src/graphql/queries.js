import {  gql } from 'apollo-boost';


export const ADD_USER = gql`
mutation AddUser($firstname: String) {
  addUser(firstname: $firstname) {
    
    firstname
  }
}
`;

export const Add_Fname_Lname = gql` 

mutation  insert_rehan_syed_one ($FNAME:String,$LNAME:String,$ID:Int){
  insert_rehan_syed_one(object: {
    FNAME:$FNAME,
    LNAME:$LNAME,
    ID:$ID
  })
  {
    ID
  }
}
`;



export const GET_LAUNCHES = gql`
{
  abcd{
    firstname
    id
    age
  }
}


`;

export const GET_LIST_REHAN = gql`
 {
  rehan_syed {
    FNAME
    ID
    LNAME
  }
}

`;

export const Delete_data= gql`
mutation  Delete_rehan_syed($UserName:String!) {
  delete_rehan_syed(where: {FNAME:{_eq: $UserName}}){
    affected_rows
  }

}

`;
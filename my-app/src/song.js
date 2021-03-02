import React,{Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';


class Song extends Component{
    renderSon(){
        return this.props.data.user.map(s=>{
            return(
                <li>
                    {s.firstname}
                </li>
            )
        })
    }
    render(){
        console.log(this.props);
        return(   
             <div>
                    {this.renderSon()}
        </div>
    );
    }
}

const query = gql`
{
    user(id:"60289b4c2eda6e18ec06c827"){
      firstname
      age
    }
}

`;

export default graphql(query)(Song);
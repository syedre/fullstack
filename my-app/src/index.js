import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import ApolloClient from 'apollo-boost';
import { ApolloProvider} from 'react-apollo';
import * as serviceWorker from './serviceWorker';
import Song from './song';

const client = new ApolloClient({
    uri:'http://localhost:4000/graphql'
    
  });
  

const Root=()=>{
    return(
        <ApolloProvider client={client}>
            <div>sdcdscv</div>
            <Song/>
        </ApolloProvider>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();

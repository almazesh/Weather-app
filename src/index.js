import React from 'react';
import reactDom from 'react-dom';
import {ApolloProvider , ApolloClient , InMemoryCache} from '@apollo/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const client = new ApolloClient({
    cache:new InMemoryCache(),
    uri:'https://graphql-weather-api.herokuapp.com/'
})



reactDom.render(    
    <ApolloProvider client={client}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ApolloProvider>,
    document.getElementById('root')
)
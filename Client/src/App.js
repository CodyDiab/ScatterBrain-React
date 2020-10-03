import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from "./pages/Homepage"
import Login from "./pages/Login"
import Subject from "./pages/Subject"
import EditSubject from "./pages/EditSubject"
import EditResource from "./pages/EditResource"

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql'
});

function App() {
  return (
  <ApolloProvider>
   <div>
      <Switch>

      </Switch>
   </div>
   </ApolloProvider>
  );
}

export default App;

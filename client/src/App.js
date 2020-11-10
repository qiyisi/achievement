import { BrowserRouter as Router, Route } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { Container } from "semantic-ui-react";

import { AuthProvider } from "./context/auth";
import AuthRoute from "./util/AuthRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Router>
          <Container>
            <Route exact path="/" component={Home}></Route>
            <AuthRoute exact path="/login" component={Login}></AuthRoute>
            <AuthRoute exact path="/register" component={Register}></AuthRoute>
          </Container>
        </Router>
      </AuthProvider>
    </ApolloProvider>
  );
};

export default App;

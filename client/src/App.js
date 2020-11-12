import { BrowserRouter as Router } from "react-router-dom";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "apollo-link-context";
import { Container } from "semantic-ui-react";

import { AuthProvider } from "./context/auth";
import AuthRoute from "./util/AuthRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css";

const httpLink = createHttpLink({
  uri: "http://localhost:4000/",
});

const authLink = setContext(() => {
  const token = localStorage.getItem("jwtToken");
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Router>
          <Container>
            <AuthRoute exact path="/" component={Home}></AuthRoute>
            <AuthRoute exact path="/login" component={Login}></AuthRoute>
            <AuthRoute exact path="/register" component={Register}></AuthRoute>
          </Container>
        </Router>
      </AuthProvider>
    </ApolloProvider>
  );
};

export default App;

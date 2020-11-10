import { useContext } from "react";
import { Button } from "semantic-ui-react";

import { AuthContext } from "../context/auth";

const Home = () => {
  const { user, logout } = useContext(AuthContext);
  console.log(user);
  return <Button onClick={logout}>logout</Button>;
};
export default Home;

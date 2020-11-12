// import { useContext } from "react";
import { useQuery, gql } from "@apollo/client";
import {
  // Button,
  // Item,
  // Segment,
  // Checkbox,
  // Label,
  // Icon,
  // Grid,
  // Form,
  // TextArea,
  Loader,
} from "semantic-ui-react";

// import { AuthContext } from "../context/auth";
import MenuBar from "../components/MenuBar";
import AchvItem from "../components/AchvItem";
import AchvForm from "../components/AchvForm";

const GET_ACHVS = gql`
  {
    getAchvs {
      id
      title
      createdAt
      user
    }
  }
`;

const Home = () => {
  const { data, loading } = useQuery(GET_ACHVS);
  return (
    <>
      <MenuBar />
      <AchvForm />
      {loading && <Loader active inline="centered" />}
      {data &&
        data.getAchvs.map((achv) => <AchvItem achv={achv} key={achv.id} />)}
    </>
  );
};
export default Home;

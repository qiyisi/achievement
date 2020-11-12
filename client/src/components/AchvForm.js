import { useMutation, gql } from "@apollo/client";
import { Form } from "semantic-ui-react";

import { useForm } from "../util/hooks";
import { GET_ACHVS } from "../util/graphql";

const CREATE_ACHV = gql`
  mutation createAchv($title: String!) {
    createAchv(title: $title) {
      id
      title
      createdAt
      user
    }
  }
`;

const AchvForm = () => {
  const { values, onChange, onSubmit } = useForm(createAchvCallback, {
    title: "",
  });

  const [createAchv, { error }] = useMutation(CREATE_ACHV, {
    variables: values,
    update(proxy, result) {
      const data = proxy.readQuery({
        query: GET_ACHVS,
      });
      proxy.writeQuery({
        query: GET_ACHVS,
        data: { getAchvs: [result.data.createAchv, ...data.getAchvs] },
      });
      values.title = "";
    },
    onError(err) {
      console.log(err);
    },
  });

  function createAchvCallback() {
    createAchv();
  }

  return (
    <Form onSubmit={onSubmit}>
      <Form.Input
        placeholder="Create new achv"
        name="title"
        onChange={onChange}
        value={values.title}
        error={error ? true : false}
      />
      <Form.Button primary>Create</Form.Button>
    </Form>
  );
};

export default AchvForm;

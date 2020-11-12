import { useMutation, gql } from "@apollo/client";
import { Button } from "semantic-ui-react";

import { GET_ACHVS } from "../util/graphql";

const DELETE_ACHV = gql`
  mutation deleteAchv($achvId: ID!) {
    deleteAchv(achvId: $achvId)
  }
`;

const DeleteButton = ({ achvId }) => {
  const [deleteAchv] = useMutation(DELETE_ACHV, {
    update(proxy) {
      const data = proxy.readQuery({
        query: GET_ACHVS,
      });
      proxy.writeQuery({
        query: GET_ACHVS,
        data: { getAchvs: data.getAchvs.filter((achv) => achv.id !== achvId) },
      });
    },
    variables: {
      achvId,
    },
  });
  return <Button icon="delete" onClick={deleteAchv}></Button>;
};

export default DeleteButton;

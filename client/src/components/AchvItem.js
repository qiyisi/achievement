import { Segment, Checkbox, Item } from "semantic-ui-react";

import DeleteButton from "./DeleteButton";

const AchItem = ({ achv }) => {
  return (
    <Segment
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "10px",
        alignItems: "center",
      }}
    >
      <Checkbox />
      <Item style={{ flex: "1 1 auto" }}>
        <Item.Content>
          <Item.Header as="h5">{achv.title}</Item.Header>
        </Item.Content>
      </Item>
      <DeleteButton achvId={achv.id} />
    </Segment>
  );
};

export default AchItem;

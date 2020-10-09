import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import LeftColumn from "./LeftColumn";
import CenterColumn from "./CenterColumn";
import RightColumn from "./RightColumn";
import { setTypes, setAchievements } from "../actions";
import { getCollection } from "../database/firebase";

const Content = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getCollection("types").then((result) => dispatch(setTypes(result)));
    getCollection("achievements").then((result) =>
      dispatch(setAchievements(result))
    );
  });

  return (
    <div className="content">
      <LeftColumn />
      <CenterColumn />
      <RightColumn />
    </div>
  );
};

export default Content;

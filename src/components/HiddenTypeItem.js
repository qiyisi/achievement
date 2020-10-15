import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateSettings } from "../actions";
import { ReactComponent as SVGKeyboardArrowRight } from "../svg/keyboard_arrow_right.svg";
import { ReactComponent as SVGKeyboardArrowDown } from "../svg/keyboard_arrow_down.svg";

const HiddenTypeItem = () => {
  const settings = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(
      updateSettings({ showHiddenTypeItems: !settings.showHiddenTypeItems })
    );
  };

  return (
    <div className="type-item" onClick={onClick}>
      <div>
        {settings && settings.showHiddenTypeItems ? (
          <SVGKeyboardArrowDown />
        ) : (
          <SVGKeyboardArrowRight />
        )}
        <div className="type-item-name">hidden</div>
      </div>
    </div>
  );
};

export default HiddenTypeItem;

import React, { useContext } from "react";
import { useStyles } from "../../utils/useStyles";
import { StatContext } from "../../context/StatContext";
import StyledItem from "../common/StyledItem";
import { statList } from "../../utils/util";
import { useNavigate } from "react-router-dom";
import "../../css/stats.css";

const StatBtn = () => {
  const classes = useStyles();
  const navigator = useNavigate();
  const { setIsDesc } = useContext(StatContext);

  const handleClick = (e) => {
    // eslint-disable-next-line default-case
    switch (e.target.innerText) {
      case "성별 분포":
        return navigator("/stats/gender");
      case "종 분포":
        return navigator("/stats/species");

      case "성격 분포":
        return navigator("/stats/personality");

      case "취미 분포":
        return navigator("/stats/hobby");

      case "스타일 분포":
        return navigator("/stats/style");

      case "성별 인기도 분포":
        return navigator("/stats/popularity-by-gender");

      case "종별 인기도 분포":
        return navigator("/stats/popularity-by-species");
    }
  };

  return (
    <>
      <div className="stats">
        {statList.map((item, idx) => {
          return (
            <StyledItem
              key={idx}
              type="whiteItem"
              content={item}
              className={classes.statMenuItem}
              onClick={(e) => {
                handleClick(e);
                setIsDesc(true);
              }}
            />
          );
        })}
      </div>
    </>
  );
};

export default StatBtn;

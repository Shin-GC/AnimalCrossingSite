import { useState, useContext, useEffect } from "react";
import { useStyles } from "../../utils/useStyles";
import "../../css/GameResult.css";
import { Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import HomeButton from "../common/HomeButton";
import { BtnText } from "../../utils/util";
import * as Api from "../../api";
import { NicknameContext } from "../../context/NicknameContext";
import { GameContext } from "../../context/GameContext";
import { CopyToClipboard } from "react-copy-to-clipboard/src";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GameResult = () => {
  const [gameScore, setGameScore] = useState(0);
  const [rank, setRank] = useState(0);
  const [userId, setUserId] = useState(null);
  const [value, setValue] = useState(window.location.href);
  const [copied, setCopied] = useState(false);

  const { id } = useParams();

  const { nickname } = useContext(NicknameContext);
  const { score, setScore } = useContext(GameContext);

  const classes = useStyles();
  const navigator = useNavigate();

  const settingDefault = (data) => {
    setGameScore(data.score);
    setRank(data.rank);
  };

  const getScoreAndRank = async () => {
    try {
      const bodyData = { nickname: nickname, score: score };
      const { data } = await Api.post("scores", bodyData);
      settingDefault(data.payload);
      setUserId(data.payload.id);
      return data.payload;
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (id) {
      getCopiedLink();
    } else {
      getScoreAndRank();
    }
    return () => setScore(0);
  }, []);

  const getCopiedLink = async () => {
    try {
      const { data } = await Api.get(`scores/userId?userId=${id}`);
      settingDefault(data.payload);
      setUserId(data.payload.id);
      return data.payload;
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (copied) {
      toast.success(
        <div>
          ????????? ?????????????????????!
          <br /> ?????????????????????!
        </div>,
        {
          icon: "????",
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    }
    return () => setCopied(false);
  }, [copied]);

  useEffect(() => {
    // ???????????? ???????????? ?????????
    if (userId && userId !== null && !value.includes(userId)) {
      setValue(value + `/${userId}`);
    }
  }, [userId]);

  const typoStyles = {
    fontFamily: "TmoneyRoundWindExtraBold",
    fontSize: "1.5rem",
  };
  const gameResultHandler = (e) => {
    if (e.target.innerText === BtnText.HOME) {
      navigator("/");
    } else if (e.target.innerText === BtnText.SHARE) {
      setCopied(true);
    } else if (e.target.innerText === BtnText.RETRY) {
      navigator("/game");
    } else {
      navigator("/game-hof");
    }
  };
  return (
    <div className="gameResultRoot">
      <textarea readOnly={true} value={value} className="copyUrl" />
      <HomeButton
        Icon={EmojiEventsIcon}
        className={classes.fab}
        onClick={gameResultHandler}
      />
      <img
        src="/images/rakun.png"
        alt="raccoon"
        className={classes.gameResultImg}
      />
      <div className="contentRoot">
        <div>
          <ToastContainer />
          <img
            src="/images/gameResult.png"
            alt="comment"
            className={classes.gameResultComment}
          />
          <img
            className={`${classes.bottomArrow} blinkImg`}
            src="/images/triangleBottomArrow.png"
            alt="arrow"
          />
          <Typography sx={typoStyles} variant={"body1"} className="content1">
            ???????????????!
          </Typography>
          <Typography sx={typoStyles} variant={"body1"} className="content2">
            ????????? ????????? <span className="gameResultScore">{gameScore}???</span>{" "}
            ??????,
          </Typography>
          <Typography sx={typoStyles} variant={"body1"} className="content3">
            ?????? ????????? <span className="gameResultRank">{rank}???</span> ?????????!
          </Typography>
        </div>

        <div className="resultBtnWrapper">
          <CopyToClipboard text={value} onCopy={() => setCopied(true)}>
            <button onClick={gameResultHandler}>????????????</button>
          </CopyToClipboard>
          <button onClick={gameResultHandler}>?????????</button>
          <button onClick={gameResultHandler}>????????????</button>
        </div>
      </div>
    </div>
  );
};

export default GameResult;

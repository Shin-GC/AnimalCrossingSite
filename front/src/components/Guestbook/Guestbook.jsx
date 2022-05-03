import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useStyles } from "../../utils/useStyles";
import * as Api from "../../api";
import { Slider } from "@mui/material";
import { styled as Styled } from "@mui/material/styles";
import { Box, Modal, Typography } from "@mui/material";
import BackButton from "../common/BackButton";
import PostButton from "../common/PostButton";
import { useNavigate } from "react-router-dom";
import { guestbookImgList } from "../../utils/util";

const Navigator = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  width: 100vw;
`;

const Container = styled.div`
  position: relative;
&::before {
  background-image: url("/images/guestbookBg.jpg");
  content: " ";
  display: block;
  position: absolute;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0.8;
  z-index: -1;
`;

const pop = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Content = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${pop} 1s linear forwards;
`;

const Wrapper = styled.div`
  position: relative;
  top: 30px;
  right: 50px;
`;

const ContentWrapper = styled.div`
  width: 85vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: space-around;
  overflow: scroll;
  overflow-x: hidden;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Card = styled.div`
  width: 140px;
  height: 140px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Column = styled.div`
  margin-right: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-top: 20%;
`;

const PrettoSlider = Styled(Slider)({
  color: "#52af77",
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#52af77",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});



const Guestbook = () => {
  const navigate = useNavigate();

  const [modal, setModal] = useState(false); // 모달 열기
  const [guestbook, setGuestbook] = useState([]);
  const [content, setContent] = useState([]);
  const [date, setDate] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0);
  const classes = useStyles();

  async function getDataList() {
    try {
      const { data } = await Api.get('guestbooks');
      setGuestbook(data.payload);
      console.log(data.payload); // 백엔드에서 데이터 잘 오는지 확인
      setCount(data.payload.length);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getDataList();
  }, []);

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    outline: "none",
    borderRadius: "0.3em",
    fontFamily: "TmoneyRoundWindExtraBold !important",
    p: 4,
  };

  const scrollHandler = (e, val) => {
    const element = document.getElementById("content");
    const maxScrollLeft = element.scrollWidth - element.clientWidth;
    element.scrollLeft = (maxScrollLeft / 100) * val;
  };

  // 방명록을 보여주는 부분
  const handleClick = (item) => {
    setModal((v) => !v);
    setContent(item.content);
    setDate(item.createdAt.slice(0, 10)); // 날짜를 연-월-일로 자름 ex) 2022-05-04
  };

  const cardPerColumn = 2;
  const columns = [];

  for (let i = 0; i < parseInt(count / cardPerColumn); i++) {
    columns.push(
      guestbook.slice(cardPerColumn * i, cardPerColumn * (i + 1)).map((guestbook, idx) => {
        return ( 
          <Card key={idx} src={guestbookImgList[guestbook.id%5].img} onClick={() => handleClick(guestbook)} />
        );
      })
    );
  }

  const restCards = count % cardPerColumn;

  if (restCards > 0) {
    columns.push(
      guestbook.slice(-restCards).map((guestbook, idx) => {
        return (
          <Card key={idx} src={guestbookImgList[guestbook.id%5].img} onClick={() => handleClick(guestbook)} />
        );
      })
    );
  }

  return (
    <Container>
      <Navigator>
        <BackButton content={ window.location.pathname === "/explore" ? "메인메뉴" : "뒤로가기" } />
        <Wrapper>
          <PostButton onClick={() => navigate('/guestbook/post')} />
            {/* PostButton을 누르면 모달로 하고 싶음!! */}
        </Wrapper>
      </Navigator>
      <Content>
        <ContentWrapper>
          <PrettoSlider onChange={scrollHandler} />
          <ContentContainer id="content">
            {columns.map((column, idx) => {
              return <Column key={idx}>{column}</Column>;
            })}
            <Modal 
              open={modal}
              onClose={handleClick}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={modalStyle} className="modalBg">
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  className={classes.modalFont}
                >
                  {content}
                  <p className="date">
                    {date}
                  </p>
                  <p className="sender">
                    익명의 누군가로부터
                  </p>
                </Typography>
              </Box>
            </Modal>
          </ContentContainer>
        </ContentWrapper>
      </Content>
    </Container>
  );
};


export default Guestbook;
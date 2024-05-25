import styled from "styled-components";
import PeopleBox from "./PeopleBox";

import sumin from "../../assets/profileImg/sumin.jpg";
import sungjoo from "../../assets/profileImg/sungjoo.jpg";
import donghak from "../../assets/profileImg/donghak.png";
import yewon from "../../assets/profileImg/yewon.jpg";
import sohyeon from "../../assets/profileImg/sohyeon.jpg";
import jake from "../../assets/profileImg/jake.png";
import coach1 from "../../assets/profileImg/coach1.png";
import coach2 from "../../assets/profileImg/coach2.png";

const People = () => {
  const handleButtonClick = () => {
    window.open("https://lab.ssafy.com/s10-final/S10P31B201", "_blank");
  };

  return (
    <Wrapper>
      <TitleContainer>
        <div className="small-title">Contributors</div>
      </TitleContainer>
      <BannerContainer>
        <BannerColumn>
          <PeopleBox
            img={yewon}
            text="이예원"
            api="네이버 검색 API를 활용한 다양한 검색 기능"
            app="팀장, 체리톡 어플 개발"
          />

          <PeopleBox
            img={sohyeon}
            text="박소현"
            api="카카오 검색 API를 활용한 도서 검색 기능"
            app="오린지 어플, 사과 어플 개발"
          />

          <PeopleBox
            img={donghak}
            text="김동학"
            api="텍스트, 이미지, 비디오 API를 활용한 미디어 처리 기능"
            app="오린지 어플 개발"
          />
          <PeopleBox
            img={coach1}
            text="양희제"
            api="미남 API를 활용한 미모 인식 기능"
            app="팀 데브웨이 코치"
          />
        </BannerColumn>
        <BannerColumn>
          <PeopleBox
            img={sungjoo}
            text="양성주"
            api="OpenWeatherMap API를 활용한 날씨 정보 기능"
            app="오린지 어플, 사과 어플 개발"
          />
          <PeopleBox
            img={sumin}
            text="이수민"
            api="한국수출입은행 API를 활용한 환율 정보 기능"
            app="체리톡 어플 개발"
          />
          <PeopleBox
            img={jake}
            text="김준섭"
            api="GPT, Google cloud API를 활용한 STT,TTS 기능"
            app="인프라, 오린지 어플 개발"
          />
          <PeopleBox
            img={coach2}
            text="김주아"
            api="미녀 API를 활용한 미모 인식 기능"
            app="팀 데브웨이 코치"
          />
        </BannerColumn>
      </BannerContainer>
      <Btn onClick={handleButtonClick}>Together us</Btn>
    </Wrapper>
  );
};

export default People;

const Wrapper = styled.div`
  display: flex;
  margin-top: 200px;
  margin-left: 20px;
  flex-direction: column;
  align-items: center;
  h3 {
    padding: 20px;
  }
`;

const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
`;

const BannerColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Btn = styled.div`
  margin: 40px;
  padding: 15px;
  border-radius: 30px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  &:hover {
    background-color: #009132;
    color: #ffffff;
    transition: 0.3s;
  }
`;

const TitleContainer = styled.div`
  border: 2px solid #4ecb71;
  border-radius: 30px;
  padding: 10px;
  margin-bottom: 20px;
  .small-title {
    font-weight: bold;
    font-size: 20px;
  }
`;

import styled from "styled-components";
import Oringe from "../components/byDevway/oringe";
import Chelitalk from "../components/byDevway/chelitalk";
import Sagwa from "../components/byDevway/sagwa";
import Header from "../components/Common/Header";

function byDevway() {
    return (
        <ByDevContainer>
            <MainContent>
                <Header name="SERVICE" />
                <Info>
                    DEVWAY 소스를 활용해 만든 멋진 서비스들을 소개할게요!
                </Info>
                <Body>
                    <Sagwa />
                    <Oringe />
                    <Chelitalk />
                </Body>
                <Footer>
                    QR코드를 통해 APK 파일을 다운로드 할 수 있습니다.
                </Footer>
            </MainContent>
        </ByDevContainer>
    );
}

export default byDevway;

// Styled components
const ByDevContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
`;

const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`;

const Info = styled.h3`
    color: black;
    margin-top: 40px;
`;

const Body = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    margin-bottom: 30px;
`;

const Footer = styled.div`
    color: black;
    text-align: center;
    width: 100%;
    margin-top: auto;
    padding: 20px 0;
`;

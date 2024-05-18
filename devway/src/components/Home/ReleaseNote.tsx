import styled from "styled-components";
import ReleaseDetail from "./ReleaseDetail";

function Releasenote() {
    return (
        <Wrapper>
            <ReleaseDetail ver="v.1.9.0" text="오타 변환 기능 추가" color="#6FBD72" />
            <ReleaseDetail ver="v.1.8.2" text="버그 수정" color="#FFEB81" />
            <ReleaseDetail ver="v.1.8.1" text="버그 수정" color="#6FBD72" />
            <ReleaseDetail ver="v.1.8.0" text="지역 검색 기능 추가" color="#FFEB81" />
            <ReleaseDetail ver="v.1.7.0" text="백과사전 검색 기능 추가" color="#6FBD72" />
            <ReleaseDetail ver="v.1.6.0" text="네이버 블로그 및 이미지 검색 기능 추가" color="#FFEB81" />
            <ReleaseDetail ver="v.1.5.0" text="뉴스 검색 기능 추가" color="#6FBD72" />
            <ReleaseDetail ver="v.1.4.1" text="버그 수정" color="#FFEB81" />
            <ReleaseDetail ver="v.1.4.0" text="환율 기능 추가" color="#6FBD72" />
            <ReleaseDetail ver="v.1.3.0" text="날씨 기능 추가 " color="#FFEB81" />
            <ReleaseDetail ver="v.1.2.1" text="버그 수정" color="#6FBD72" />
            <ReleaseDetail
                ver="v.1.2.0" text="도서 검색 기능 추가"
                color="#FFEB81"
            />
            <ReleaseDetail ver="v.1.1.0" text="STT, TTS 기능 추가" color="#6FBD72" />
            <ReleaseDetail ver="v.1.0.1" text="버그 수정" color="#FFEB81" />
            <ReleaseDetail ver="v.1.0.0" text="데브웨이 오픈" color="#6FBD72" />
        </Wrapper>
    );
}

export default Releasenote;

const Wrapper = styled.div`
    padding-top: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 20px;
`;

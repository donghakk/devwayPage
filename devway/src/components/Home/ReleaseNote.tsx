import styled from "styled-components";
import ReleaseDetail from "./ReleaseDetail";

function Releasenote() {
  return (
    <Wrapper>
      <ReleaseDetail text="v.1.0.0  데브웨이 오픈" color="#FFEB81" />
      <ReleaseDetail text="v.1.0.0  데브웨이 오픈" color="#6FBD72" />
      <ReleaseDetail text="v.1.0.0  데브웨이 오픈" color="#FFEB81" />
      <ReleaseDetail text="v.1.0.0  데브웨이 오픈" color="#6FBD72" />
      <ReleaseDetail text="v.1.0.0  데브웨이 오픈" color="#FFEB81" />
      <ReleaseDetail text="v.1.0.0  데브웨이 오픈" color="#6FBD72" />
      <ReleaseDetail text="v.1.1.0  버그 수정" color="#FFEB81" />
      <ReleaseDetail text="v.1.0.0  데브웨이 오픈" color="#6FBD72" />
    </Wrapper>
  );
}

export default Releasenote;

const Wrapper = styled.div`
  padding-top: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

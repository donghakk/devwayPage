import styled from "styled-components";

interface ReleaseDetailProps {
  ver: string
  text: string;
  color: string;
}

function ReleaseDetail(props: ReleaseDetailProps) {
  return (
    <Wrapper>
      <NoteOne color={props.color}>
        <Ver>{props.ver}</Ver>
        {props.text}</NoteOne>
    </Wrapper>
  );
}

export default ReleaseDetail;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const NoteOne = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  border: none;
  width: 80%;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
`;

const Ver = styled.div`
  font-weight: bold;
  padding: 5px;
  padding-right: 20px;
  font-size: 18px;
`
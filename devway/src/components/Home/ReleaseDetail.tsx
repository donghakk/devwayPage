import styled from "styled-components";

interface ReleaseDetailProps {
  text: string;
  color: string;
}

function ReleaseDetail(props: ReleaseDetailProps) {
  return (
    <Wrapper>
      <NoteOne color={props.color}>{props.text}</NoteOne>
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
`;

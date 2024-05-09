import styled from "styled-components";

interface ReleaseDetailProps {
  text: string;
  color: string;
}

function ReleaseDetail(props: ReleaseDetailProps) {
  return <Wrapper color={props.color}>{props.text}</Wrapper>;
}

export default ReleaseDetail;

const Wrapper = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  border: none;
  width: 100px;
`;

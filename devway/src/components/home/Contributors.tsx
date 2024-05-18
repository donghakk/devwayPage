import styled from "styled-components";

interface ContributorsProps {
  text: string;
  img: string;
}

function Contributors(props: ContributorsProps) {
  return (
    <Wrapper>
      <Box>
        <img src={props.img} alt="img" />
      </Box>
      <Name>{props.text}</Name>
    </Wrapper>
  );
}

export default Contributors;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
const Name = styled.div`
  font-size: 16px;
`;

const Box = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 70%;
  overflow: hidden;
  margin-right: 10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

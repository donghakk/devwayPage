import styled from "styled-components";

interface ContributorsProps {
    text: string;
    img: string;
    api: string;
}

function PeopleBox(props: ContributorsProps) {
    return (
        <Wrapper>
            <Box>
                <img src={props.img} alt="img"/>
            </Box>
            <Content>
                <Name>{props.text}</Name>
                <p>{props.api}</p>
            </Content>
        </Wrapper>
    );
}

export default PeopleBox;

const Wrapper = styled.div`
    display: flex;
    align-items: flex-start
    margin: 10px;
    width: 30vw;
    border-radius: 5px;
    box-shadow: 0 5px 13px rgba(0,0,0,0.10);
    padding: 10px;
    padding-top: 20px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 30px;
`;

const Name = styled.div`
    font-size: 16px;
    text-align: center;
    margin-top: 5px;
    font-weight: bold;
`;

const Box = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 30px;
    margin-left: 30px;
    img {
        width: 50px;
        height: 50px;
        object-fit: cover;
    }
`;

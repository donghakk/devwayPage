import styled from "styled-components";

<<<<<<< HEAD
function byDevway(){
    // ts

    return(
        // html
        <Intro>
            <h1>
                DEVWAY 소스를 활용해 만든 서비스가 세상에 나왔어요!
            </h1>
        </Intro>
    )
=======
function byDevway() {
  return (
    <Container>
      <div className="headerContainer">
        <Header />
      </div>
    </Container>
  );
>>>>>>> cd94f2a1b695f467e14fdea54d4e9c302b9da76b
}

export default byDevway;

// css
const Intro = styled.div`
display : flex;
    h1{
        width : 100px;
        height : 100px;
        color : balck;   
    }
`;
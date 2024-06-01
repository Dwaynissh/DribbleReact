import styled from "styled-components"
import Header from "../Components/Static/Header";


const Heropage = ()=>{
    return(
        <div>
          <Header/>
          <Container>
            <InputHolder>
              <ImageViewer>

              </ImageViewer>
              <ButtonLabel>

              </ButtonLabel>
              <LabelInput>

              </LabelInput>
              <TitleInput>

              </TitleInput>
            </InputHolder>
          </Container>
        </div>
    );
}
export default Heropage;
const Pr = styled.div`
height: 200px;
width: 300px;
background-color: blue;
`
// const Upload = styled.button`
// `;
// const Upload = styled.button`
// `;
const TitleInput = styled.button`
`;
const LabelInput = styled.input`

`;
const ButtonLabel = styled.div`
`;
const ImageViewer = styled.input`
`;
const InputHolder = styled.div`
  height: 70%;
  width: 40%;
  background-color: lightblue;
  border: 1px solid grey;
`;
const Container = styled.div`
  height: calc(100vh - 90px);
  width: 100%;
  background-color: lawngreen;
  display: flex;
  justify-content: center;
  align-items: center;
`;
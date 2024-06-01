import { styled } from "styled-components";
import vid from "../Assets/dribblevideo.mp4"
import { BsSearch } from "react-icons/bs"
import Buttonprops from "../Components/Props/Buttonprops"
import Cardprops from "../Components/Props/Cardprops";


const Hero = () => {
  return (
    <div>
      <Heroo> 
        <Video src={vid} autoPlay loop muted/>
        <TextContent>
          <General>
            <CardSection>
              <CardRoller>
                <Buttonprops text="Romance"/>
                <Buttonprops text="Comedy"/>
                <Buttonprops text="Action"/>
                <Buttonprops text="Fantasy"/>
                <Buttonprops text="Crime"/>
                <Buttonprops text="Adventure"/>
                <Buttonprops text="Horror"/>
                <Buttonprops text="Humor"/>
                <Buttonprops text="Fiction"/>
                <Buttonprops text="War"/>
                <Buttonprops text="Tales"/>
                <Buttonprops text="Folklore"/>
                <Buttonprops text="Fairy"/>
                <Buttonprops text="Satire"/>
                <Buttonprops text="Classics"/>
                <Buttonprops text="Youth"/>
                <Buttonprops text="Opera"/>
                <Buttonprops text="Thrillers"/>
                <Buttonprops text="Mystery"/>
                <Buttonprops text="Literature"/>
                <Buttonprops text="Essay"/>
                <Buttonprops text="Live"/>
                <Buttonprops text="Plays"/>
                <Buttonprops text="Gory"/>
                <Buttonprops text="Myth"/>
              </CardRoller>
            </CardSection>
            <TextSection>
              <Outline>
                <Explore>
                Explore the world’s leading Books
                <br /> and Authors 
                </Explore>
                <Millions>Millions of designers and agencies around the world showcase     their portfolio work <br />
                 on Dribbble - the home to the world’s best design and creative professionals.
                </Millions>
                <Search>
                  <BsSearch style={{marginLeft: "20px"}}/>
                  <Input type="text" placeholder="Search By Author Name" 
                  />
                </Search>
              </Outline>
            </TextSection>
          </General>
        </TextContent>
      </Heroo>
      <Space>

      </Space>
      <SectionCards>
        <SectionCardsWrapper> 
          <Cardprops category= 'Motivational' letter="N" author="Napoleon Hill" views={52}/>
          <Cardprops category= 'Comedy' letter="P" author="Prince John" views={109}/>
          <Cardprops category= 'Motivational' letter="H" author="Habeeb Ahmed" views={79}/>
          <Cardprops category= 'Motivational' letter="A" author="Ahmed Rufai" views={12}/>
          <Cardprops category= 'Motivational' letter="F" author="Francis Man" views={24}/>
          <Cardprops category= 'Motivational' letter="D" author="Daniel Ore" views={45}/>
        </SectionCardsWrapper>
      </SectionCards>
    </div>
  )
}

export default Hero


// const SectionCardsWrapper = styled.div`
  
// `;
const SectionCardsWrapper = styled.div`
  width: 80%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
`;
const SectionCards = styled.div`
  min-height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Space = styled.div`
  height:10vh;
  width: 100%;
`;
const Input = styled.input`
 font-size: 18px;
 outline: none;
 border: none;
 margin-left: 15px;
`;

const Search = styled.div`
  height: 50px;
  width: 55%;
  font-size: 20px;
  background-color: white;
  border: none;
  border-radius: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 100px;
  margin-top: 20px;
`;
const Millions = styled.div`
  text-align: center;
  font-size: 15px;
  color: white;
  margin-top: 20px;
`;
const Explore = styled.div`
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  color: white;
  margin-top: 20px;
`;
const Outline = styled.div`
  height: 100%;
  width: 40%;
`;
const TextSection = styled.div`
  height: 63%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardRoller = styled.div`
  height: 40%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  scroll-behavior: auto;
  overflow-y: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const CardSection = styled.div`
  height: 37%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
const General = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TextContent = styled.div`
  height: 75vh;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Video = styled.video`
  height: 75vh;
  width: 100%;
  object-fit: cover;
  position: absolute;
`;

const Heroo = styled.div`
  height: 75vh;
  width: 100%;
  background-color: #040404;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
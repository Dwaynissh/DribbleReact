import React from "react";
import { styled } from "styled-components";
import { GrView } from "react-icons/gr"

interface iCard  {
    category?: string;
    letter?: string;
    author?: string;
    views?: number;   
}

const Cardprops: React.FC<iCard> = ({category,letter,author,views}) => {
    return (
        <div>
            <MainCard>
                <CardImage>
                    <TopCard>
                        {category}  
                    </TopCard>
                </CardImage>
                <CardIcons>
                    <Round>
                        {letter}  
                    </Round>
                    <AuthorName>
                        {author!}
                    </AuthorName>
                    <TheViews>
                     <GrView style={{ marginRight: "10px"}}/>
                        {views!}
                    </TheViews>
                </CardIcons>
            </MainCard>
        </div>
    )
}

export default Cardprops;
const TheViews =styled.div<{

}>`
margin-left: 120px;
`;
const AuthorName =styled.div<{

}>`
margin-left: 10px;
font-weight: bold;
`;
const Round =styled.div<{
}>`
height: 45px;
width: 50px;
border-radius: 70%;
border: none;
background-color: yellow;
color: white;
font-size: 20px;
margin-left: 10px;
display: flex;
justify-content: center;
align-items: center;
`;
const CardIcons = styled.div<{

}>`
height: 20%;
width: 100%;
color: blue;
display: flex;
justify-content: flex-start;
align-items: center;
`;
const TopCard = styled.div<{

}>`
height: 35px;
width: 130px;
background-color: rgb(52, 56, 59);
opacity: 0.8;
color: white;
display: flex;
justify-content: center;
align-items: center;
margin: 20px;
border-radius: 20px;
`;
const CardImage = styled.div<{

}>`
height: 80%;
width: 100%;
background-color: aqua;
`;
const MainCard = styled.div<{

}>
`
height: 250px;
width: 350px;
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

&:hover {
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    transform: scale(1.05);
}
`;
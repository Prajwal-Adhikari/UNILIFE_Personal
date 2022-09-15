import { useState } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import styled from 'styled-components'
import { sliderItems } from '../data';

const Container = styled.div`
  margin-top: 50px;
  background: linear-gradient(100deg, #0df7eb, #0648fd);
  width: 100%;
  height: 70vh;
  display: flex;
  position: relative;
  overflow:hidden;

`;

const Arrow = styled.div`
  color: #000000;
  opacity: 0.5;
  width: 50px;
  height: 50px;
  background-color: #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  margin: auto;
  z-index: 2;
  cursor: pointer;
  &:hover {
    background-color: #dbdd47;
    transition: ease-in-out 0.25s;
  }
  background: rgb(255, 255, 255);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(71, 80, 104, 0.3);
`

const Wrapper = styled.div`
  height: 100%;
  display:flex;
  transform: translateX(${props=>props.slideIndex * -100}vw);
  transition: all 1.5s ease;
`;

const Slide = styled.div`
  width: 100vw;
  height: 70vh;
  display: flex;
  align-items: center;
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  width: 50vw;
  background-color: pink;
`
const InfoContainer = styled.div`
  flex: 1;
  height: 100%;
  width: 50 vw;
  background-color: #d1d1d1;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
`

const Title = styled.h1`
    margin-top: 20px;
    margin-bottom : 10px;
    margin-left : 20px ;
    font-size: 70px;
`;
const Description = styled.p`
   
    margin-bottom : 10px;
    margin-left : 20px ;
    font-size: 25px;
`;
const Button = styled.button`
    margin-bottom : 10px;
    margin-left : 20px ;
    font-size: 20px;
    padding: 7px;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    color:white;
    background-color: #023504;
   
    &:hover{
      color: black;
      background-color: #ecfa2d;
    }
    transition: step-start 0.85s;
`;

const Slider = () => {
  const [slideIndex,setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if(direction === "left"){
      setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
    }else{
      setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
    }
  };


  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>

        {sliderItems.map((item)=>(
        <Slide>
          <ImgContainer>
            <Image src= {item.img} />
          </ImgContainer>
          <InfoContainer>
            <Title>{item.title}</Title>
            <Description>
              {item.description}
            </Description>
            <Button>Buy</Button>
          </InfoContainer>
        </Slide>
))}


      </Wrapper>
      <Arrow direction="right" onClick={()=>handleClick("left")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  )
}

export default Slider

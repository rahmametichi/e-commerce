


import { ArrowLeftOutlined , ArrowRightOutlined } from '@material-ui/icons'
import styled from 'styled-components'
import { useState } from 'react';
import { sliderItems } from '../data';


const Container = styled.div
`
width : 100%;
position : relative;
height:100vh;
overflow : hidden ;
display:flex;
margin-bottom:-200px;
` ;

const Wrapper = styled.div`
display:flex;
height:100%;
`

/*const Arrow = styled.div`
width:50px;
height:50px;
top:0;
bottom:0;
margin:auto;
display:flex;
align-items:center;
justify-content:center;
background-color:white;
left:${props=>props.direction==="left" && "10px"};
right:${props=>props.direction==="right" && "10px"};
position:absolute;
background: transparent;
z-index!2;
border-raduis:50%;
cursor : pointer;
`;*/
const Announcement = styled.div`height:30px;
background-color:teal;
color:white ; 
display:flex;
align-items:center;
justify-content:center;
font-weight : 500;
font-size:14px;`

const Slide = styled.div`
display : flex ; 
align-items:center;
background-color: #${props=>props.bg};
`
const ImgContainer = styled.div`
height:100%;
flex:1;
`
const Image = styled.img`
height:60%;
`

const InfoContainer = styled.div`
padding:50px;
margin-top : -350px;
flex:1;`

const Title = styled.h1`
font-size:70px;

`
const Description = styled.p`
margin : 50px 0px;
font-size : 20px;
font-weight:500;
letter-spacing:3px;

`
const Button = styled.button`
padding:10px;
font-size:20px;
background-color : transparent;
cursor : pointer ;
`


const Slider = () => {
 /* const [slideIndex,setSlideIndex]=useState(0)
  const handleClick=(direction)=>{
    if (direction === "left"){
      setSlideIndex(
        slideIndex > 0  ? slideIndex-1 : 2 )
      
    }
    else {
      setSlideIndex(
        slideIndex < 2 ? slideIndex+1 : 0 )
    }

  }*/

  return (
    <Container>
        {/*<Arrow direction='left'>
            <ArrowLeftOutlined onClick={()=>handleClick("left")}/>
  </Arrow>*/ }
            <Wrapper>
              {sliderItems.map((item)=>(
                <Slide  bg="f5fafd" key={item.id}>
                <ImgContainer>
                <Image src={item.img}/>
                </ImgContainer>
                <InfoContainer>
                <Title>{item.title}</Title>
                <Description>
                    {item.desc}
                  </Description>
                <Button>SHOP NOW</Button>
                </InfoContainer>
             
                </Slide>
              ))}
              
            </Wrapper>
            
        {/* <Arrow direction='right'>
            <ArrowRightOutlined onClick={()=>handleClick("right")}/>
              </Arrow>*/ }
        </Container>
        
  )
}

export default Slider 
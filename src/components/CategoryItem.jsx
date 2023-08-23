import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
margin:3px;
height:70vh; 
position:relative;

flex:1;`
const Image = styled.img`
height:100%;
width:100%;
${mobile({height:"30vh"})};
object-fit:cover;`


const Info = styled.div`
top : 0;
left:0;
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
position:absolute;`

const Title = styled.h1`
color:white;
margin-bottom:20px;

`

const Button = styled.button`
border:none;
padding:10px;
border-radius:2px;
background-color:white;
font-weight:600;
color:black;
cursor:pointer;`




const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
        </Info>
        

    </Container>
  )
}

export default CategoryItem
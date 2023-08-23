import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import { mobile } from "../responsive"


const Container=styled.div``

const Wrapper = styled.div`
padding:50px;
${mobile({padding:"10px" , flexDirection:"column" })};
display:flex;`

const ImgContainer = styled.div`
flex:1;`

const Image = styled.img`
width:80%;
${mobile({height:"40vh"})};
height:60vh;
object-fit:cover;`

const InfoContainer = styled.div`
padding:0px 50px;
flex:1;`

const Title = styled.h1`
font-weight:200;
`
const Desc = styled.p`
margin:20px 0px;`
const Price = styled.span`
font-weight:100;
font-size:40px;`

const FilterContainer=styled.div`
display:flex;
margin:30px 0px;
width:50%;
justify-content:space-between;`

const Filter=styled.div`
display:flex;
align-items:center;
`

const FilterTitle=styled.span`
font-size:20px;
font-weight:200`

const FilterColor=styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${props=>props.color};
cursor:pointer;
margin:0px 5px;`

const FilterSize=styled.select`
margin-left:10px;
padding:5px;`

const FilterSizeOption=styled.option``

const AddContainer=styled.div`
display:flex;
align-items:center;
width:50%;
justify-content:space-between;
`
const AmountContainer=styled.div`
display:flex;
align-items:center;
font-weight:700;`

const Amount =styled.span`
width:30px;
height:30px;
border-radius:10px;
display:flex;
align-items:center;
justify-content:center;
margin : 0px 5px;
border:1px solid teal;`

const Button=styled.button`
padding:15px;
border:2px solid teal;
font-weight:500;
background-color:white;
cursor:pointer;
&:hover{background-color:teal;}
`





const Product = () => {
  return (
  <Container>
      <Navbar/>
      <Announcement/>
        <Wrapper>
            <ImgContainer>
            <Image src="https://www.etam.com/dw/image/v2/AAWW_PRD/on/demandware.static/-/Sites-EPAP-master/default/dw27a2f127/652794101_x.jpg?sw=600&sh=708&strip=false"/>
            </ImgContainer>

            <InfoContainer>

                <Title>Denim Tshirt</Title>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aut facere possimus accusantium fuga quas praesentium tempora inventore quis necessitatibus non id, explicabo animi vero sit. Tempore ratione molestiae facilis!</Desc>
                <Price>20$</Price>

                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="darkblue"/>
                        <FilterColor color="gray"/>
                    </Filter>

                    <Filter>
                    <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        
                    </Filter>
                    
                    
                </FilterContainer>
                
            <AddContainer>

                <AmountContainer>

                    <Remove/>
                    <Amount>1</Amount>
                    <Add/>

                </AmountContainer>
                <Button>ADD TO CART</Button>




            </AddContainer>



            </InfoContainer>




        </Wrapper>
      <Newsletter/>
      <Footer/>

  </Container>
  )
}

export default Product
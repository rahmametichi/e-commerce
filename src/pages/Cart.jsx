import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { mobile } from '../responsive'


const Container=styled.div``

const Wrapper=styled.div`
${mobile({padding:"10px"})}
padding:20px;`

const Title=styled.h1`
font-weight:300;
text-align:center;`

const Top=styled.div`
display:flex;
padding:20px;
align-items:center;
justify-content:space-between;
`

const TopButton = styled.button`
padding:10px;
cursor:pointer;
border: ${props=>props.type==="filled" && "none"};
background-color: ${props=>props.type==="filled" ? "black" : "transparent"};
color:${props=>props.type==="filled" && "white"};
font-weight:600;`

const TopTexts=styled.div``
const TopText=styled.span`
text-decoration:underline;
cursor:pointer;
margin:0px 10px;`


const Bottom=styled.div`
display:flex;
justify-content:space-between;`
const Info=styled.div`
flex:3;`


const Product=styled.div`
display:flex;
justify-content:space-between;
;`
const ProductDetail=styled.div`
display:flex;
flex:2;
;`
const Image =styled.img`
width:200px;
`
const Details=styled.div`
padding:20px;
display:flex;
flex-direction:column;
justify-content:space-around;
;`
const ProductName=styled.span`
;`
const ProductId=styled.span`
;`
const ProductColor=styled.span`
width:20px;
height:20px;
border-radius:50%;
background-color:${props=>props.color}
;`
const ProductSize=styled.span`
;`

const PriceDetail=styled.div`
flex:1;
display:flex;
justify-content : center;
align-items:center;
flex-direction:column;
;`
const ProductAmountContainer=styled.div`
display:flex;
margin-bottom:20px:
align-items:center`
const ProductAmount=styled.div`
margin-bottom:5px;
font-size:24px;`
const ProductPrice=styled.div`
font-size:30px;
font-weight:300;
`
const Hr = styled.hr`
background-color:#eee;
height:1px;
border:none;`

const Summary=styled.div`
border:0.5px solid lightgray;
border-radius:10px;
padding:20px;
height:50vh;
flex:1;`

const SummaryTitle = styled.h1`
font-weight:200;`

const SummaryItem=styled.div`
margin : 30px 0px;
display:flex;
justify-content:space-between;
font-weight:${props=>props.type === "total" && "500"};
font-size:${props=>props.type === "total" && "24px"};

`
const SummaryItemText=styled.span`
`
const SummaryItemPrice=styled.span`
`
const Button=styled.button`
width:100%;
padding:10px;
background-color:black;
color:white;
font-weight:600;
`


const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
       <Wrapper>
           <Title>YOUR BAG</Title>
           <Top>
               <TopButton>CONTINUE SHOPPING</TopButton>
              
               <TopTexts>
                   <TopText>
                    Shopping Bag(2)
                   </TopText>
                   <TopText>
                       Your Wishlist(0)
                   </TopText>


               </TopTexts>
               <TopButton type="filled">CHECK OUT NOW</TopButton>

           </Top>
           <Bottom>
               <Info>

                   <Product>
                       <ProductDetail>
                           <Image src="https://static.pullandbear.net/2/photos/2022/V/0/2/p/4545/505/620/4545505620_2_1_2.jpg?t=1651768746959"/>
                           <Details>
                               <ProductName><b>Products : </b> T-shirt bas tie-dye</ProductName>
                               <ProductId><b>ID : </b> 369874521</ProductId>
                               <ProductColor color="pink"/>
                               <ProductSize><b>Size : </b> M</ProductSize>
                           </Details>
                       </ProductDetail>
                       <PriceDetail>
                           <ProductAmountContainer>
                               <Add/>
                               <ProductAmount>2</ProductAmount>
                               <Remove/>
                           </ProductAmountContainer>
                           <ProductPrice>20$</ProductPrice>
                       </PriceDetail>
                   </Product>
                <Hr/>
                   <Product>
                       <ProductDetail>
                           <Image src="https://static.pullandbear.net/2/photos/2022/V/0/2/p/4545/505/500/4545505500_2_1_2.jpg?t=1648560909264"/>
                           <Details>
                               <ProductName><b>Products : </b> T-shirt bas tie-dye</ProductName>
                               <ProductId><b>ID : </b> 369874521</ProductId>
                               <ProductColor color="lightblue"/>
                               <ProductSize><b>Size : </b> M</ProductSize>
                           </Details>
                       </ProductDetail>
                       <PriceDetail>
                           <ProductAmountContainer>
                               <Add/>
                               <ProductAmount>2</ProductAmount>
                               <Remove/>
                           </ProductAmountContainer>
                           <ProductPrice>20$</ProductPrice>
                       </PriceDetail>
                   </Product>


               </Info>
               <Summary>
                   <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                   <SummaryItem>
                       <SummaryItemText>Subtotal</SummaryItemText>
                       <SummaryItemPrice>40$</SummaryItemPrice>
                   </SummaryItem>
                   <SummaryItem>
                       <SummaryItemText>Estimated Shipping</SummaryItemText>
                       <SummaryItemPrice>5.90$</SummaryItemPrice>
                   </SummaryItem>
                   <SummaryItem>
                       <SummaryItemText>Shipping Discount</SummaryItemText>
                       <SummaryItemPrice>-5.90$</SummaryItemPrice>
                   </SummaryItem>
                   <SummaryItem type="total" >
                       <SummaryItemText >Total</SummaryItemText>
                       <SummaryItemPrice>40$</SummaryItemPrice>
                   </SummaryItem>
                    <Button>CHECK OUT NOW</Button>
               </Summary>
           </Bottom>



       </Wrapper>
        <Footer/>

    </Container>
  )
}

export default Cart
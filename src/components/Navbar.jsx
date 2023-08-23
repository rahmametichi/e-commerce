import React from 'react'
import styled from 'styled-components'
import {Badge} from '@material-ui/core'
import {Search,ShoppingCartOutlined} from '@material-ui/icons'
import { mobile } from '../responsive'
const Container = styled.div
`
height : 100px ; 
${mobile({height:"50px"})};
`

const Wrapper = styled.div
`padding : 10px 20px ; 
${mobile({padding:"10px 0px"})};
display : flex ; 
justify-content : space-between ;`

const Left = styled.div
`
flex : 1 ;
display : flex;
align-items: center;
`
const Language = styled.span`
font-size:16px;
${mobile({display:"none"})};
cursor : pointer;
 `
const SearchContainer = styled.div`
border : 0.5px solid lightgray;
margin-left : 25px ; 
padding : 5px;
display:flex;
align-items:center;
`

const Input = styled.input`
${mobile({width:"50px"})};
border : none;
`


const Center = styled.div
`
flex : 1;
text-align : center;
`
const Logo = styled.h1`
${mobile({fontSize:"25px"})};
font-weight : bold;`
const Right = styled.div
`
flex : 1 ;
display : flex ; 
align-items : center;
${mobile({justifyContent:"center"})};
justify-content:space-around;`
const MenuItem = styled.div`
font-size : 16px ;
${mobile({fontSize:"12px"})};
cursor : pointer;`


const Navbar = () => {
  
  
  
    return (



    <Container>
        
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                <Input placeholder='Search'/>
                <Search/>
                </SearchContainer>


            
            </Left>
            <Center><Logo>SHOP</Logo></Center>

            <Right>
            <MenuItem>
            SIGN UP
        
            </MenuItem>
            <MenuItem>
            SIGN IN 
            </MenuItem>
            <MenuItem>
            <Badge color='primary' badgeContent={4}>
                <ShoppingCartOutlined/>
            
                </Badge>

            
            </MenuItem>
            </Right>
            


        </Wrapper>
    
    
    </Container>
  )
}

export default Navbar
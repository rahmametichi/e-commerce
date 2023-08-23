import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Info = styled.div`
width:100%;
height:100%;
position:absolute;
opacity:0;
top:0;
background-color:rgba(0,0,0,0.2);
z-index:3;
display:flex;
align-items:center;
transition:all 0.5s ease;
cursor:pointer;
justify-content:center;
left:0;`

const Container = styled.div`flex:1;
margin:5px;
min-width:280px;
display:flex;
align-items:center;
justify-content: center;
background-color:#ebebeb;
height:350px;
position:relative;
&:hover ${Info}{
  opacity:1;

}
`

const Circle = styled.div`
width:180px;
height:200px;
border-radius:50%;
background-color:white;
position :absolute;

`
const Image = styled.img`
z-index:2;
height:90%;`


const Icon = styled.div`
            width:36px;
            height:36px;
            border-radius:50%;
            background-color:white;
            display:flex;
            justify-content:center;
            margin : 10px;
            align-items:center;
            heigtht:40px;      
            transition:all 0.5s ease ;
            &:hover{
              background-color:white;
              transform:scale(1.1);
            }
`;

const Product = ({item}) => {
  return (
    <Container>

        <Circle/>
        <Image src={item.img}/>
        <Info>


        <Icon>

            <SearchOutlined/>
            
            </Icon>
        <Icon>

        <ShoppingCartOutlined/>

        </Icon>
        <Icon>

        <FavoriteBorderOutlined/>

        </Icon>
        


        </Info>


         </Container>
  )
}

export default Product
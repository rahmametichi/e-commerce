import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;
background-size:cover;
justify-content:center;
background: linear-gradient(rgba(255,255,255,0.5),
                rgba(255,255,255,0.5)) ,
url("https://static.pullandbear.net/2/photos//2022/V/0/1/p/4714/327/413/02/4714327413_5_1_8.jpg?t=1645116084079&imwidth=1024") center`

const Wrapper = styled.div`
padding:20px;
background-color:white;
${mobile({width:"75%"})}
width:25%;`
const Title = styled.h1`
font-size:24px;
font-weight:300;`


const Form = styled.form`
display:flex;
flex-direction:column;`


const Input = styled.input`
flex:1;
min-width:40%;
margin:10px 0px;
padding:10px;`

const Button = styled.button`
width:40%;
border:none;
padding:15px 20px;
background-color:teal;
color:white;
margin-bottom:10px;
cursor:pointer;`

const Link  = styled.a`
margin:5px 0px;
font-size:12px;
text-decoration:underline;
cursor:pointer;`



const Login = () => {
  return (

    <Container>

<Wrapper>

<Title>SIGN IN</Title>
<Form>
  
    <Input placeholder="username"/>
    <Input placeholder="password"/>

<Button>LOGIN</Button>
<Link>DO NOT REMEMBER THE PASSWORD?</Link>
<Link>CREATE A NEW ACCOUNT</Link>

</Form>




</Wrapper>
    </Container>
    
  )
}

export default Login
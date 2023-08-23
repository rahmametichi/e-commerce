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
url("https://static.pullandbear.net/2/static2/itxwebstandard/images/home/2022-05/06/Newin_man.jpg?v=20220511220605") center`

const Wrapper = styled.div`
padding:20px;
background-color:white;
${mobile({width:"75%"})}
width:40%;`
const Title = styled.h1`
font-size:24px;
font-weight:300;`


const Form = styled.form`
display:flex;
flex-wrap:wrap;`




const Input = styled.input`
flex:1;
min-width:40%;
margin:20px 10px 0px 0px;
padding:10px;`
const Agreement = styled.span`
font-size:12px;
margin:20px 0px;`
const Button = styled.button`
width:40%;
border:none;
padding:15px 20px;
background-color:teal;
color:white;
cursor:pointer;`




const Register = () => {
  return (

    <Container>
        <Wrapper>

            <Title>SIGN UP</Title>
            <Form>
                <Input placeholder="name"/>
                <Input placeholder="lastname"/>
                <Input placeholder="username"/>
                <Input placeholder="email"/>
                <Input placeholder="password"/>
                <Input placeholder="confirm password"/>

        <Agreement>By creating an account,
            I consent to the processing of my personnal data in accordance with the 
          <br></br>  <b>PRIVACY POLICY</b>
        </Agreement>
        <Button>Create</Button>
            </Form>




        </Wrapper>


    </Container>
    
  )
}

export default Register
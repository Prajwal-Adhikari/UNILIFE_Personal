import styled from "styled-components"

const Container = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
  
`;
const Wrapper = styled.div`
    padding:20px;
    width:35%;
    background-image: url('https://img.freepik.com/free-vector/blue-curve-background_53876-113112.jpg?w=740&t=st=1663470219~exp=1663470819~hmac=3bf24934103af81b2dab1912e557a8398e3d087ed13e636aaa78455dab19415b');
    height: 50%;
    border-radius: 10%;
    border:2px solid gray;
    box-shadow: 7px 7px 3px #c5c9fd;
`;

const Left = styled.div`
    flex:1;
    background-image: url('https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=740&t=st=1663470057~exp=1663470657~hmac=83439417a9a3f69c4d9deeaf8e88001631bbb198d4aff9f26c4fce76f789704f');
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 100%;

`;
const Right = styled.div`
    flex:1;
    margin-top: 5%;
    padding: 15px;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`;


const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`;

const Input = styled.input`
    flex:1;
    padding: 10px;
    margin: 5px;
    width: 80%;
    border:1px solid gray;
    border-radius: 5px;
  
`;

const Button = styled.button`
    width:30%;
    padding: 7px 0px;
    margin: 10px;
    background : linear-gradient(90deg,#dce5e6,#00ccff);
    font-weight: 50;

`;

const Link = styled.a`
    margin : 5px 0px;
    text-decoration: underline;
`;


const Login = () => {
  return (
    <Container>
        
            <Left>

            </Left>
            <Right>
            <Wrapper>
            <Title>
                    LOGIN
            </Title>
            <Form>
                <Input placeholder="Username or Email"/>
                <Input placeholder="Password"/>
                
                <Button>Login</Button>
                <Link>Forgot Password?</Link>
                <Link>create an account</Link>
            </Form>
        </Wrapper>
        </Right>

        
    </Container>
  )
}

export default Login
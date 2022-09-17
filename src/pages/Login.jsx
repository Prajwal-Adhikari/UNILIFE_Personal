import styled from "styled-components"

const Container = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
  
`;
const Wrapper = styled.div`
    padding:20px;
    width:45%;
    background : linear-gradient(100deg,#ffffff,rgba(255,0,0,0.4));
    height: 50%;
    border-radius: 10%;
    border:2px solid gray;
    box-shadow: 7px 7px 3px #c5c9fd;
`;

const Left = styled.div`
    flex:1;
    background-image: url('https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg?w=740&t=st=1663395359~exp=1663395959~hmac=e29be553ca0337da41243dad4b351414f1a6418d93db5ff92980496754d12fec');
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 100%;

`;
const Right = styled.div`
    flex:1;
    margin-top: 10%;
    padding: 15px;
    height: 55%;
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
    padding: 5px;
    margin: 5px;
    width: 70%;
    border:1px solid gray;
    border-radius: 5px;
  
`;

const Button = styled.button`
    width:30%;
    padding: 10px 0px;
    background-color: white;
    border-radius: 15px;
    font-weight: 50;

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
            </Form>
        </Wrapper>
        </Right>

        
    </Container>
  )
}

export default Login
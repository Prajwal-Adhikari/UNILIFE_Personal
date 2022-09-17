import styled from "styled-components"

const Container = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
  
`;
const Wrapper = styled.div`
    padding:20px;
    width:45%;
    background : linear-gradient(100deg,#c5c9fd,#eec1db);
    height: 128%;
    border-radius: 10%;
    border:2px solid gray;
    box-shadow: 7px 7px 3px #c5c9fd;
`;

const Left = styled.div`
    flex:1;
    background-image: url('https://i.pinimg.com/736x/18/11/f3/1811f344025539b7b4abb446eb6f910d.jpg');
    background-repeat: no-repeat;
    background-position: 50%;

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
const Agreement = styled.span`
    font-size:14px;
    margin: 20px 0px;
     display: flex;
    justify-content: center;
    align-items:center;
    width:70%; 
`;
const Button = styled.button`
    width:30%;
    padding: 10px 0px;
    background-color: white;
    border-radius: 15px;
    font-weight: 50;

`;

const Register = () => {
  return (
    <Container>
        
            <Left>

            </Left>
            <Right>
            <Wrapper>
            <Title>
                    CREATE AN ACCOUNT
            </Title>
            <Form>
                <Input placeholder="First Name"/>
                <Input placeholder="Middle Name"/>
                <Input placeholder="Last Name"/>
                <Input placeholder="Username"/>
                <Input placeholder="Email"/>
                <Input placeholder="Password"/>
                <Input placeholder="Confirm Password"/>
                <Agreement>
                    By creating an account, I consent to the processing of my personal data in accordance with the PRIVACY POLICY.
                </Agreement>
                <Button>REGISTER</Button>
            </Form>
        </Wrapper>
        </Right>

        
    </Container>
  )
}

export default Register
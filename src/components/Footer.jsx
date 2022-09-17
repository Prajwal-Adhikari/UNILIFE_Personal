import { Facebook, Instagram, Twitter, Room, Phone, MailOutline } from "@material-ui/icons";
import styled from "styled-components";


const Container = styled.div`
    display:flex;
    background-color: black;
    color:white;
    height:50vh;
`;
const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding:20px;   
`;

const Logo = styled.h1`
    
`;

const Description = styled.p`
    margin:20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    width:40px;
    height:40px;
    border-radius: 50%;
    color:white;
    background-color: #${props=>props.color};
    display:flex;
    justify-content: center;
    align-items: center;
    margin:0px 10px;    
`;


const Center = styled.div`
    flex:1;
    padding:20px;
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;


const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`;


const ListItem = styled.li`
    width:50%;
    margin-bottom: 10px;
`;



const Right = styled.div`
    flex:1;
    padding:20px;

`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Footer = () => {
  return (
    <Container>
            <Left>
                <Logo>
                    Unilife
                </Logo>
                <Description>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, nobis exercitationem nulla sapiente possimus suscipit labore error, inventore quasi optio iste nesciunt ea velit expedita?
                </Description>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram/>
                    </SocialIcon>
                </SocialContainer>
            </Left>

            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>
                            Home
                    </ListItem>
                    <ListItem>
                            Cart
                        </ListItem>
                        <ListItem>
                            Hostels
                        </ListItem>
                        <ListItem>
                            Rooms
                        </ListItem>
                        <ListItem>
                            Terms
                        </ListItem>
                </List>

            </Center>

            <Right>

                <Title>Contact</Title>
          
                <ContactItem>
                <Room style={{marginRight:"10px"}}/>
                    28 Kilo, Banepa-4, Dhulikhel
                </ContactItem>
                
                <ContactItem>
                <Phone style={{marginRight:"10px"}}/>
                    +977 999 888 7771
                </ContactItem>

                <ContactItem>
                    <MailOutline style={{marginRight:"10px"}}/>
                    teamunilife@gmail.com
                </ContactItem>
           
            </Right>
    </Container>
  )
}

export default Footer
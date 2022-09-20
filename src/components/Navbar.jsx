import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"

const Container = styled.div`
  height: 60px;
  background-color: #0d1118;

`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Left = styled.div`
  flex: 1;
`
const Center = styled.div`
  flex: 1;

`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding : 2px;

`;

const Input = styled.input`
    border-radius: 5px;
    flex : 1;
    height : 25px;
    font-size: 14px;
    font-weight: bold;
`;

const Logo = styled.h1`
    font-weight: bolder;
    text-align: left;
    color:white;
    &:hover {
        color: #fbff00;
    }
`;

const MenuItems = styled.div`
    font-size: 18px;
    font-weight: bold;
    color : white;
    cursor: pointer;
    margin-left : 125px ;
    &:hover {
        color: #2f84d3;
    }
`;


const Navbar = () => {
  return (
    <Container>
      <Wrapper>

        <Left>
        <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
        <Logo>UNILIFE</Logo>
              </Link>
           
        </Left>

        <Center>
            <SearchContainer>
                <Input placeholder='search a product . . .' />
                <Search style={{color:"white", fontSize:30}} />
            </SearchContainer>
        </Center>

        <Right>
            <MenuItems>
              <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                HOME
              </Link>
            </MenuItems>
            

            <MenuItems><Link to="/register" style={{ color: 'inherit', textDecoration: 'inherit'}}>
            REGISTER
              </Link></MenuItems>

            <MenuItems>
              <Link to = "/login" style={{ color: 'inherit', textDecoration: 'inherit'}}>LOGIN</Link>
            </MenuItems>
            <MenuItems><Link to = "/product" style={{ color: 'inherit', textDecoration: 'inherit'}}>PRODUCT</Link></MenuItems>
            <MenuItems>
                <Badge badgeContent={4} color = "primary">
                <Link to="/cart" style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <ShoppingCartOutlined/>
              </Link>
                    
                </Badge>
            </MenuItems>
        </Right>

      </Wrapper>
    </Container>
  )
}

export default Navbar

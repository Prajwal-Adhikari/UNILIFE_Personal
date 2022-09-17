import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
    width: 100%;
    height:100%;
    background-color: rgba(0,0,0,0.2);
    position: absolute;
    top: 0;
    left : 0;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor:pointer;
`;


const Container = styled.div`
    flex:1;
    margin: 5px;
    min-width: 280px;
    height : 350px;
    display : flex;
    justify-content: center;
    align-items: center;
    background-color: #e7f9ff;
    position:relative;
    &:hover ${Info}{
      opacity:1;
    }
    transition: all 0.25s ease;

`;


const Image = styled.img`
  height:75%;
  border-radius: 15%;


`;


const Icon = styled.div`
    width: 40px;
    height : 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    transition: all 0.35s ease;
    &:hover{
      background-color : #${props=>props.color};
      transform:scale(1.1);
    }
`;


const Product = ({item}) => {
  return (
    <Container>
     
      {/* <Cricle > */}
      <Image src = {item.img} />
      <Info>
        <Icon color = "0E68CE">
          <ShoppingCartOutlined />
        </Icon>
        <Icon color = "7FDB6A">
          <SearchOutlined />
        </Icon>
        <Icon color = "fb3958">
          <FavoriteBorderOutlined  />
        </Icon>
      </Info>
      {/* </Cricle> */}
    </Container>
    )
}

export default Product
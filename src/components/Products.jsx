import styled from "styled-components";
import Product from "./Product";
import { hostels } from "../data";

const Container = styled.div`
  padding:20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;


const Products = () => {
  return (
    <Container>
      {hostels.map((item)=>(
        <Product item = {item} key = {item.id}/>
      ))}
    </Container>
    )
}

export default Products
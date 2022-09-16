import styled from "styled-components";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Footer from "../components/Footer";
const Container = styled.div``;

const FilterContainer = styled.div`
        display:flex;
        justify-content: space-between;
`;

const Title = styled.h1`
        margin:20px;
    `;

const Filter = styled.div`
    margin:20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FilterText = styled.div`
    font-size: 20px;
    font-weight: 600;
`;

const Select = styled.select`
    margin-top: 5px;
    padding:10px;
    margin-left: 10px;
`;

const Option = styled.option`
    padding:15px;
`;

const ProductList = () => {
  return (

    <Container>
        <Navbar/>
        <Title>Rooms</Title>
        <FilterContainer>
            <Filter><FilterText>Filter:</FilterText>
            
                <Select>
                    <Option disabled selected>Newest</Option>
                    <Option>Price Ascending</Option>
                    <Option>Price Descending</Option>
                    <Option>Rating</Option>
                    <Option>Used Time</Option>
                    <Option></Option>

                </Select>
            
            </Filter>

        </FilterContainer>
        <Products/>
        <Footer />
    </Container>
    )
}

export default ProductList
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";


const Container = styled.div``;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`;
const ImgContainer = styled.div`
    flex: 1;
`;
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`;
const InfoContainer = styled.div`
    flex: 1;
    padding:0px 20px;
`;
const Title = styled.h1`
    font-weight: 200;
`;
const Description = styled.p`
    margin: 20px 0px;

`;
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const ProductBy = styled.h3`
        font-weight: 100;
    font-size: 20px;
`;


const Rating = styled.h4`
        font-weight: 100;
    font-size: 20px;
`;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 30px;
`;
const Amount = styled.span`
    width:30px;
    height:30px;
    border-radius:10px;
    border : 1px solid black;
    background-color: #e2f8f1;
    display:flex;
    justify-content: center;
    align-items: center;
    margin:0px 5px
`;
const Button = styled.button`
    margin-left:80px;
    padding:15px;
    border : 2 px solid teal;
    background-color: white;
    cursor:pointer;
    font-weight:bold;
    transition: 0.45s ease;
    &:hover{
        background-color: #a4eff5;
    }
`;


const Product = () => {
   
  return (
    <Container>
        
        <Wrapper>
            <ImgContainer>
            <Image src="https://static-01.daraz.com.np/p/6698ff6720f47ad6da734b51f27409ce.jpg" />
            </ImgContainer>
            <InfoContainer>
                <Title>Table</Title>
                <ProductBy>By : Prashant Shrestha</ProductBy>
                <Rating>Rating : 4/5</Rating>
                <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium consequuntur ratione unde omnis, inventore sequi libero? Quas aliquid nam accusamus ex distinctio saepe quidem fugit. Ipsa harum perferendis saepe temporibus ad ipsam deleniti iste perspiciatis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, amet officia ut architecto sit quos ab in aspernatur tempore id porro numquam voluptas sequi delectus quibusdam! Praesentium minus saepe nulla unde animi cum voluptatem magnam aliquam excepturi sint consectetur, est accusantium officiis ab corrupti repellat in maxime eligendi rerum earum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam totam consequatur, unde commodi voluptas ipsam eos, ducimus, distinctio ut quia vel. Sequi maiores minima ipsam id aperiam! Quod dolore corporis ut perspiciatis libero cumque commodi autem, animi dolorem eaque at laboriosam excepturi, exercitationem nobis esse voluptatibus soluta! Voluptatem, laboriosam inventore.</Description>
                <Price>Rs. 1500/-</Price>
            <AddContainer>

                <AmountContainer>
                    <Remove/>
                    <Amount>1</Amount>
                    <Add/>
                    <Button>ADD TO CART</Button>
                </AmountContainer>
            </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Footer/>

    </Container>
  )
}

export default Product
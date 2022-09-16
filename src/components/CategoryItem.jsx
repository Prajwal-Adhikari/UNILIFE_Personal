import  styled  from "styled-components";
const Container = styled.div`
    flex:1;
    margin: 3px;
    height: 60vh;
    object-fit: cover;
    position: relative;
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    position:relative;
    background-color: black;
    opacity: 0.99;
`;
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Title = styled.h1`
    color: white;
    font-size: 54px;
    margin-bottom:20px;
`;
const Button = styled.button`
    border: none;
    padding:10px;
    background-color: white;
    font-weight: 600;
    
    cursor:pointer;
    &:hover{
      color: white;
      background-color: grey;
    }
`;

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src = {item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>Shop Now</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem
import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";
import { Button, ChakraProvider, Grid, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Cart from "./components/Cart";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [total, setTotal] = useState(0)
  const [cartItems, setCartItems] = useState([])
  return (
    <ChakraProvider>
      <div className="App">
        {/* <h1>My Bakery</h1> TODO: personalize your bakery (if you want) */}
        <div className="double-col">
          <div className="left-col">
            <Heading size={'xl'} color={'white'}>Akira's Bakery</Heading>
            <SimpleGrid columns={2} spacingX={'20px'} spacingY={'20px'}>
              {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
                // <p>Bakery Item {index}</p> // replace with BakeryItem component
                <BakeryItem name={item.name} description={item.description} price={item.price} image={item.image} total={total} setTotal={setTotal} cartItems={cartItems} setCartItems={setCartItems} />
              ))}
            </SimpleGrid>
          </div>
          <div className="right-col">
            <div>
              <Heading size={'xl'} color={'white'}>Cart</Heading>
              <Cart items={cartItems} />
              {/* {cartItems.map((item, index) => (
              // <div>hi</div>
              <Text>{item}</Text>
            ))} */}
              <Heading size={'l'} color={'white'}>Total price: {total}</Heading>
              <Button position={'absolute'} onClick={() => {
                setTotal(0)
                setCartItems([])
              }}>Clear Cart</Button>
            </div>
          </div>
          </div>
        </div>
    </ChakraProvider>
  );
}

export default App;

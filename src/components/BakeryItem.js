// TODO: create a component that displays a single bakery item

import { Button, Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";


export default function BakeryItem(props) {
    return (
        <Card>
            <CardBody>
                <Image src={props.image}></Image>
                <Heading size={'l'}>{props.name}</Heading>
                <Text>{props.description}</Text>
                <Text>{props.price}</Text>
                <Button onClick={() => {
                    props.setTotal(props.total + props.price);
                    let newCart = props.cartItems
                    newCart.push(props.name)  
                    props.setCartItems(newCart);
                }}>Add to Cart</Button>
            </CardBody>
        </Card>
    )
}
import { Text } from "@chakra-ui/react";

export default function Cart(props){
    let frequencyMap = {};
    props.items.forEach(item => {
        frequencyMap[item] = (frequencyMap[item] || 0) + 1;
    });
    return(
        <div>
            {
                Object.entries(frequencyMap).map(([k, v]) => <div>
                    <Text color={'white'}>{v}x {k}</Text>
                </div>)
            }
        </div>
    )
}
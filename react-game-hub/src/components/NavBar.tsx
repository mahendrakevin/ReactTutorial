import {HStack, Image, Text} from "@chakra-ui/react";
import logo from '../assets/logo.webp'
import ColorModeSwitch from "./ColorModeSwitch.tsx";

const NavBar = () => {
    return (
        <HStack justifyContent='space-between' padding='10px'>
            <Image src={logo} boxSize='60px'/>
            <Text fontSize='2xl'>Kevin's Games</Text>
            <ColorModeSwitch/>
        </HStack>
    )
}

export default NavBar
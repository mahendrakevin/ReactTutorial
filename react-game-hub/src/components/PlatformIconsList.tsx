import {Platform} from "../hooks/useGames.ts";
import {Text} from "@chakra-ui/react";

export interface Props {
    platforms: Platform[]
}

const PlatformIconsList = ({platforms}: Props) => {
    return (
        <>
            {platforms.map((platform) => (<Text>{platform.name}</Text>))}
        </>
    )
}

export default PlatformIconsList
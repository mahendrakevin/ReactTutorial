import {FaWindows, FaPlaystation, FaXbox, FaAndroid, FaApple, FaLinux} from "react-icons/fa";
import {Platform} from "../hooks/useGames.ts";
import {HStack, Icon} from "@chakra-ui/react";
import { MdPhoneIphone } from "react-icons/md";
import {SiNintendo } from "react-icons/si";
import {BsGlobe} from "react-icons/bs";
import {IconType} from "react-icons";
export interface Props {
    platforms: Platform[]
}

const PlatformIconsList = ({platforms}: Props) => {
    const iconMap: { [key: string]: IconType } = {
        'pc': FaWindows,
        'playstation': FaPlaystation,
        'xbox': FaXbox,
        'android': FaAndroid,
        'apple': FaApple,
        'linux': FaLinux,
        'ios': MdPhoneIphone,
        'nintendo': SiNintendo,
        'web': BsGlobe
    }

    return (
        <HStack marginY={1}>
            {platforms.map((platform) => (
                <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500'/>
            ))}
        </HStack>
    )
}

export default PlatformIconsList
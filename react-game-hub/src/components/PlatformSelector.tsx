import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms.ts";
import usePlatform from "../hooks/usePlatform.ts";
import useGameQueryStore from "../store.ts";


const PlatformSelector = () => {
    const {data, error} = usePlatforms()
    const setSelectedPlatformId = useGameQueryStore(s => s.setPlatformId)
    const selectedPlatformId = useGameQueryStore(s => s.gameQuery.platformId)
    const selectedPlatform = usePlatform(selectedPlatformId)

    if (error) return null

    return(
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
                {selectedPlatform?.name || 'Select Platform'}
            </MenuButton>
            <MenuList>
                {data?.results.map(platform => (
                    <MenuItem onClick={() => setSelectedPlatformId(platform.id)} key={platform.id}>{platform.name}</MenuItem>
                ))}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector
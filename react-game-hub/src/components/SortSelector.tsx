import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";
import useGameQueryStore from "../store.ts";

const SortSelector = () => {
    const sortOrder = [
        {value: '', label: 'Relevance'},
        {value: '-added', label: 'Date Added'},
        {value: 'name', label: 'Name'},
        {value: '-released', label: 'Release Date'},
        {value: '-metacritic', label: 'Popularity'},
        {value: '-rating', label: 'Average Rating'},
    ]

    const setSortOrder = useGameQueryStore(s => s.setSortOrder)
    const sortOrders = useGameQueryStore(s => s.gameQuery.sortOrder)

    const currentSortOrder = sortOrder.find(order => order.value === sortOrders)

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
                Order By: {currentSortOrder?.label || 'Relevance'}
            </MenuButton>
            <MenuList>
                {sortOrder.map(order => (
                    <MenuItem onClick={() => setSortOrder(order.value)} key={order.value}>{order.label}</MenuItem>
                ))}
            </MenuList>
        </Menu>
    )
}

export default SortSelector
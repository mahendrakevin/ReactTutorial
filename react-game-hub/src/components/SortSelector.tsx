import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";

interface Props {
    onSelectSortOrder: (sortOrder: string) => void
    sortOrders: string
}

const SortSelector = (
    {onSelectSortOrder, sortOrders}: Props
) => {
    const sortOrder = [
        {value: '', label: 'Relevance'},
        {value: '-added', label: 'Date Added'},
        {value: 'name', label: 'Name'},
        {value: '-released', label: 'Release Date'},
        {value: '-metacritic', label: 'Popularity'},
        {value: '-rating', label: 'Average Rating'},
    ]

    const currentSortOrder = sortOrder.find(order => order.value === sortOrders)

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
                Order By: {currentSortOrder?.label || 'Relevance'}
            </MenuButton>
            <MenuList>
                {sortOrder.map(order => (
                    <MenuItem onClick={() => onSelectSortOrder(order.value)} key={order.value}>{order.label}</MenuItem>
                ))}
            </MenuList>
        </Menu>
    )
}

export default SortSelector
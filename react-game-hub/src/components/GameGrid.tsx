import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames.ts";
import GameCard from "./GameCard.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import GameCardContainer from "./GameCardContainer.tsx";
import {gameQuery} from "../App.tsx";

interface Props {
    gameQuery: gameQuery
}

const GameGrid = (
    {gameQuery}: Props
) => {
    const {data, error, isLoading} = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6]

    if (error) return <Text>{error}</Text>

    return (
        <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}}
                    spacing={6} padding='10px'>
            {isLoading && skeletons.map(skeleton => (
                <GameCardContainer key={skeleton}>
                    <GameCardSkeleton key={skeleton}/>
                </GameCardContainer>
            ))}
            {data.map(game => (
                <GameCardContainer key={game.id}>
                    <GameCard key={game.id} game={game}/>
                </GameCardContainer>
            ))}
        </SimpleGrid>
    )
}

export default GameGrid;
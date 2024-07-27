import {SimpleGrid, Spinner, Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames.ts";
import GameCard from "./GameCard.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import GameCardContainer from "./GameCardContainer.tsx";
import {gameQuery} from "../App.tsx";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
    gameQuery: gameQuery
}

const GameGrid = (
    {gameQuery}: Props
) => {
    const {
        data, error, isLoading,
        fetchNextPage,
        hasNextPage
    } = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6]

    if (error) return <Text>{error.message}</Text>

    const fetcedGameesCount = data?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0

    return (
        <InfiniteScroll next={fetchNextPage} hasMore={!!hasNextPage} loader={<Spinner/>} dataLength={fetcedGameesCount}>

            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}}
                        spacing={6} padding='10px'>
                {isLoading && skeletons.map(skeleton => (
                    <GameCardContainer key={skeleton}>
                        <GameCardSkeleton key={skeleton}/>
                    </GameCardContainer>
                ))}
                {data?.pages.map((page, index) => (
                    <React.Fragment key={index}>
                        {page.results.map(game => (
                            <GameCardContainer key={game.id}>
                                <GameCard key={game.id} game={game}/>
                            </GameCardContainer>
                        ))}
                    </React.Fragment>
                ))}
            </SimpleGrid>
        </InfiniteScroll>
    )
}

export default GameGrid;
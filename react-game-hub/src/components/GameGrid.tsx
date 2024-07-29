import {SimpleGrid, Spinner, Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames.ts";
import GameCard from "./GameCard.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import GameCardContainer from "./GameCardContainer.tsx";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";


const GameGrid = () => {
    const {
        data, error, isFetching,
        fetchNextPage,
        hasNextPage
    } = useGames();
    const skeletons = [1, 2, 3, 4, 5, 6]

    if (error) return <Text>{error.message}</Text>

    const fetcedGamesCount = data?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0

    return (
        <InfiniteScroll next={fetchNextPage} hasMore={!!hasNextPage} loader={<Spinner/>} dataLength={fetcedGamesCount}>

            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}}
                        spacing={6} padding='10px'>
                {isFetching && skeletons.map(skeleton => (
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
import {Box, Flex, Grid, GridItem, Show} from "@chakra-ui/react";
import NavBar from "./components/NavBar.tsx";
import GameGrid from "./components/GameGrid.tsx";
import GenreList from "./components/GenreList.tsx";
import {useState} from "react";
import {Genre} from "./hooks/useGenres.ts";
import PlatformSelector from "./components/PlatformSelector.tsx";
import SortSelector from "./components/SortSelector.tsx";
import GameHeading from "./components/GameHeading.tsx";
import {Platform} from "./hooks/usePlatforms.ts";

export interface gameQuery {
    genre: Genre | null
    platform: Platform | null
    sortOrder: string
    searchText: string
}

function App() {
    const [gameQuery, setGameQuery] = useState<gameQuery>({} as gameQuery)

    return <Grid templateAreas={{
        base: `'nav' 'main'`,
        lg: `'nav nav' 'aside main'`,
    }}
    templateColumns={{
        base: '1fr',
        lg: '250px 1fr',
    }}>
        <GridItem area='nav'>
            <NavBar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})}></NavBar>
        </GridItem>
        <Show above='lg'>
            <GridItem area='aside' paddingX={5}>
                <GenreList
                    onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}
                    selectedGenre={gameQuery.genre}
                />
            </GridItem>
        </Show>
        <GridItem area='main'>
            <Box paddingLeft={2}>
                <GameHeading gameQuery={gameQuery}/>
                <Flex marginBottom={5}>
                    <Box marginRight={5}>
                        <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}/>
                    </Box>
                    <SortSelector sortOrders={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>
                </Flex>
            </Box>
            <GameGrid gameQuery={gameQuery}/>
        </GridItem>
    </Grid>
}

export default App

import {Game} from "../hooks/useGames.ts";
import {Card, CardBody, Heading, HStack, Image} from "@chakra-ui/react";
import PlatformIconsList from "./PlatformIconsList.tsx";
import CriticScore from "./CriticScore.tsx";
import getCroppedImageUrl from "../services/image-url.ts";

interface Props {
    game: Game
}

const GameCard = ({game}: Props) => {
    return (
        <Card>
            <Image src={getCroppedImageUrl(game.background_image)}/>
            <CardBody>
                <Heading fontSize='2xl'>{game.name}</Heading>
                <HStack justifyContent='space-between'>
                    <PlatformIconsList platforms={game.parent_platforms.map(p => p.platform)}/>
                    <CriticScore score={game.metacritic} />
                </HStack>
            </CardBody>
        </Card>
    )
}

export default GameCard
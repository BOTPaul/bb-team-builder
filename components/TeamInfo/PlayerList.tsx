import { Player } from "@/models/common";
import { Box, Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import React, { useMemo } from "react";

interface IPlayerListProps {
	players: Player[];
}

const PlayerList: React.FC<IPlayerListProps> = ({ players }) => {
	const sortedPlayers = useMemo(() => {
		return players.sort((a, b) => (a.name > b.name ? 1 : -1));
	}, [players]);

	return (
		<Box>
			<Heading size="sm">Players</Heading>
			<Box my={4}>
				<UnorderedList px={2}>
					{players.map((p) => (
						<ListItem key={p.id}>
							<strong>0 - {p.max_count}</strong> {p.name}
						</ListItem>
					))}
				</UnorderedList>
			</Box>
		</Box>
	);
};

export default PlayerList;
import React from "react";
import { Layout, QueryResult } from "../components";
import { useQuery, gql } from "@apollo/client";
import TrackCard from "../containers/track-card";

const TRACKS = gql`
	query GetTracks {
		tracksForHome {
			id
			title
			thumbnail
			length
			modulesCount
			author {
				id
				name
				photo
			}
			modulesCount
			description
			numberOfViews
			modules {
				id
				title
				length
			}
		}
	}
`;


const Tracks = () => {
	const { data, loading, error } = useQuery(TRACKS);
	return (
		<Layout grid>
			<QueryResult data={data} error={error} loading={loading}>
				{data?.tracksForHome?.map((track) => (
					<TrackCard key={track.id} track={track} />
				))}
			</QueryResult>
		</Layout>
	);
};

export default Tracks;

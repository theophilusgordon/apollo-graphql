const gql = require("graphql-tag");

const typeDefs = gql`
	type Query {
		"Query to get tracks array for the homepage grid"
		tracksForHome: [Track!]!

		"Query to get a specific track, provides data for the track page"
		track(id: ID!): Track!
	}

	type Mutation {
		"Mutation to increment the number of times a track has been viewed"
		incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
	}

	type IncrementTrackViewsResponse {
		"the number of views for the track after the increment"
		code: Int!
		"Indicates whether the operation was successful"
		success: Boolean!
		"Descriptive message for the operation result"
		message: String!
		"the track that was viewed"
		track: Track
	}

	"A track is a group of Modules that teaches about a specific topic"
	type Track {
		id: ID!
		"The track's title"
		title: String!
		"The track's main Author"
		author: Author!
		"The track's illustration to display in track card or track page detail"
		thumbnail: String
		"The track's approximate length to complete, in minutes"
		length: Int
		"The number of modules this track contains"
		modulesCount: Int
		"The track's complete description"
		description: String
		"The number of times a track is viewed"
		numberOfViews: Int
		modules: [Module!]!
	}

	"A Module is a single unit of teaching. Multiple Modules compose a Track"
	type Module {
		id: ID!
		"Module's title"
		title: String!
		"Module's length in minutes"
		length: Int
	}

	"Author of a complete Track or a Module"
	type Author {
		id: ID!
		"Author's first and last name"
		name: String!
		"Author's profile picture"
		photo: String
	}
`;

module.exports = typeDefs;

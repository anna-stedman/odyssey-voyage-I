const resolvers = {
  Query: {
    locations: (_, __, { dataSources }) => {
      return dataSources.locationsAPI.getAllLocations();
    },
    location: (_, { id }, { dataSources }) => {
      return dataSources.locationsAPI.getLocation(id);
    },
  },
  Location: {
    // __resolveReference only has 3 parameters - reference, context and info
    __resolveReference: ({id}, {dataSources}) => {
      return dataSources.locationsAPI.getLocation(id);
    }
  },
};

module.exports = resolvers;

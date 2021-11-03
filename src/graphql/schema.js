import { gql } from 'apollo-server-core'
import { apiFiltersResolvers } from './api-filters/resolvers'
import { apiFiltersTypedefs } from './api-filters/typedefs'
import { postResolvers } from './post/resolvers'
import { postTypeDefs } from './post/typedefs'
import { userResolvers } from './user/resolvers'
import { userTypeDefs } from './user/typedefs'

const rootTypeDefs = gql`
  type Query {
    _empty: Boolean
  }
`
const rootResolvers = {
  Query: {
    _empty: () => true,
  },
}

export const typeDefs = [
  rootTypeDefs,
  userTypeDefs,
  postTypeDefs,
  apiFiltersTypedefs,
]
export const resolvers = [
  rootResolvers,
  userResolvers,
  postResolvers,
  apiFiltersResolvers,
]

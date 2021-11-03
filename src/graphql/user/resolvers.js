const user = async (_, { id }, { getUsers }) => {
  const response = await getUsers(`/${id}`)
  const user = response.json()
  return user
}

const users = async (_, __, { getUsers }) => {
  const response = await getUsers()
  const users = await response.json()
  return users
}

export const userResolvers = {
  Query: {
    user,
    users,
  },
}

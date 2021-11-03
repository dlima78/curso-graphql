const post = async (_, { id }, { getPosts }) => {
  const response = await getPosts(`/${id}`)
  const post = await response.json()

  if (typeof post.id === undefined) {
    return {
      statusCode: 404,
      message: 'Post not found',
    }
  }
  return post
}

const posts = async (_, { input }, { getPosts }) => {
  const apiFiltersInput = new URLSearchParams(input).toString()
  const response = await getPosts(`/?${apiFiltersInput}`)
  return response.json()
}

export const postResolvers = {
  Query: {
    post,
    posts,
  },
  PostResult: {
    __resolveType: (obj) => {
      if (typeof obj.statuCode !== undefined) return 'PostNotFoundError'
      if (typeof obj.id !== undefined) return 'Post'
      return null
    },
  },
}
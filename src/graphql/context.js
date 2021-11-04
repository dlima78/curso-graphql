import fetch from 'node-fetch'
import { getPosts } from '../utils/posts'
import { getUsers } from '../utils/users'
import { makePostDataLoader } from './post/dataloaders'
import { makeUserDataLoader } from './user/dataloaders'

export const context = () => ({
  userDataLoader: makeUserDataLoader(getUsers(fetch)),
  postDataLoader: makePostDataLoader(getPosts(fetch)),
  getUsers: getUsers(fetch),
  getPosts: getPosts(fetch),
})

import fetch from 'node-fetch'
require('dotenv').config()

export const context = () => ({
  getUsers: (path = '/') => fetch(`${process.env.API_URL}/users${path}`),
  getPosts: (path = '/') => fetch(`${process.env.API_URL}/posts${path}`),
})

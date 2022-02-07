import axios from 'axios'

const API_URL = 'http://localhost:5000'

function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } }
}

async function login(body) {
  const loginPromise = await axios.post(`${API_URL}/sign-in`, body)

  console.log('~>login ', loginPromise)

  return loginPromise
}

async function register(body) {
  const registerPromise = await axios.post(`${API_URL}/sign-up`, body)

  return registerPromise
}

async function getWallet(token) {
  const config = createConfig(token)
  const promise = await axios.get(`${API_URL}/wallet`, config)

  return promise
}

async function postRegistry(body, token) {
  const config = createConfig(token)
  const registryPromise = await axios.post(`${API_URL}/registry`, body, config)

  return registryPromise
}

const services = {
  login,
  register,
  getWallet,
  postRegistry
}

export default services
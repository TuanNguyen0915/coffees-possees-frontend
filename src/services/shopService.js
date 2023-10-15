import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/shops`

async function index() {
  try {
    const res = await fetch(BASE_URL)
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function show(shopId) {
  try {
    const res = await fetch(`${BASE_URL}/${shopId}`)
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export {
  index,
  show
}
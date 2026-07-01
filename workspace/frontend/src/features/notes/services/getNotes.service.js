import { getAuthHeader, handleResponse } from './utils.js'

export default async function getNotes() {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/notes`, {
    headers: { ...getAuthHeader() }
  })
  return handleResponse(res)
}

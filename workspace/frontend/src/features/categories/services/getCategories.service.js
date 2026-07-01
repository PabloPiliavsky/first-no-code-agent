import { getAuthHeader, handleResponse } from '../../notes/services/utils.js'

export default async function getCategories() {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/categories`, {
    headers: { ...getAuthHeader() }
  })
  return handleResponse(res)
}

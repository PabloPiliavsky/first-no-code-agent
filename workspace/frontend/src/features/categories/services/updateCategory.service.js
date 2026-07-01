import { getAuthHeader, handleResponse } from '../../notes/services/utils.js'

export default async function updateCategory(id, name) {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/categories/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...getAuthHeader()
    },
    body: JSON.stringify({ name })
  })
  return handleResponse(res)
}

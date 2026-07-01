import { getAuthHeader, handleResponse } from './utils.js'

export default async function updateNote(id, data) {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/notes/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...getAuthHeader()
    },
    body: JSON.stringify(data)
  })
  return handleResponse(res)
}

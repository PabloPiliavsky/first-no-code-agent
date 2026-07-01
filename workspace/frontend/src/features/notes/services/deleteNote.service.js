import { getAuthHeader, handleResponse } from './utils.js'

export default async function deleteNote(id) {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/notes/${id}`, {
    method: 'DELETE',
    headers: { ...getAuthHeader() }
  })
  return handleResponse(res)
}

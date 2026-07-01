import { getAuthHeader, handleResponse } from './utils.js'

export default async function createNote(title, content, categories) {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/notes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...getAuthHeader()
    },
    body: JSON.stringify({ title, content, categories })
  })
  return handleResponse(res)
}

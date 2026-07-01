import { getAuthHeader, handleResponse } from '../../notes/services/utils.js'

export default async function deleteCategory(id) {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/categories/${id}`, {
    method: 'DELETE',
    headers: { ...getAuthHeader() }
  })
  return handleResponse(res)
}

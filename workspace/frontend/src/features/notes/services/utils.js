export const getAuthHeader = () => {
  const userStr = localStorage.getItem('user')
  if (!userStr) return {}
  const user = JSON.parse(userStr)
  return { 'Authorization': `Bearer ${user.token}` }
}

export const handleResponse = async (res) => {
  const data = await res.json()
  if (!res.ok) throw new Error(data.message || 'API Error')
  return data
}

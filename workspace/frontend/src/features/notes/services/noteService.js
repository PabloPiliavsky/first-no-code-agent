export const createNoteService = () => {
  const getAuthHeader = () => {
    const userStr = localStorage.getItem('user')
    if (!userStr) return {}
    const user = JSON.parse(userStr)
    return { 'Authorization': `Bearer ${user.token}` }
  }

  const handleResponse = async (res) => {
    const data = await res.json()
    if (!res.ok) throw new Error(data.message || 'API Error')
    return data
  }

  return {
    getNotes: async () => {
      const res = await fetch('http://localhost:5000/api/notes', {
        headers: { ...getAuthHeader() }
      })
      return handleResponse(res)
    },
    
    createNote: async (title, content) => {
      const res = await fetch('http://localhost:5000/api/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...getAuthHeader()
        },
        body: JSON.stringify({ title, content })
      })
      return handleResponse(res)
    },
    
    updateNote: async (id, data) => {
      const res = await fetch(`http://localhost:5000/api/notes/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          ...getAuthHeader()
        },
        body: JSON.stringify(data)
      })
      return handleResponse(res)
    },
    
    deleteNote: async (id) => {
      const res = await fetch(`http://localhost:5000/api/notes/${id}`, {
        method: 'DELETE',
        headers: { ...getAuthHeader() }
      })
      return handleResponse(res)
    }
  }
}

export const noteService = createNoteService()

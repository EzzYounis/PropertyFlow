
const API_BASE_URL = process.env.API_BASE_URL

export const apiService = {
  // Dashboard API calls
  async getDashboardStats() {
    const response = await fetch(`${API_BASE_URL}/api/dashboard/stats`)
    return await response.json()
  },

  // Properties API calls
  async getProperties() {
    const response = await fetch(`${API_BASE_URL}/api/properties`)
    return await response.json()
  },

  async getProperty(id) {
    const response = await fetch(`${API_BASE_URL}/api/properties/${id}`)
    return await response.json()
  },

  async createProperty(propertyData) {
    const response = await fetch(`${API_BASE_URL}/api/properties`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(propertyData)
    })
    return await response.json()
  },

  // AI Content Generation
  async generateContent(propertyId) {
    const response = await fetch(`${API_BASE_URL}/api/ai/generate-content/${propertyId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    return await response.json()
  }
}
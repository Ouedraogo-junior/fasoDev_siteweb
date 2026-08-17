import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json', 
  },
})

export interface ContactPayload {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

export const sendContactMessage = (payload: ContactPayload) =>
  api.post('/contact', payload)
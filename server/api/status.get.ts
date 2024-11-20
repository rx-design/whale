import mongoose from 'mongoose'

export default defineEventHandler(() => {
  return {
    state: mongoose.connection.readyState,
  }
})

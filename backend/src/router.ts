import { Router } from 'express'

const router = Router()

router.get('/institutions', (request, response) => {
  return response.json({ message: 'Hello World!' })
})

export default router

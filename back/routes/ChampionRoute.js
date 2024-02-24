import express from 'express'
import { getChamps, getChamp, createChamp, updateChamp, deleteChamp } from '../controllers/ChampionController.js'


const router = express.Router()


router.get('/', getChamps)
router.get('/:id', getChamp)
router.post('/', createChamp)
router.put('/:id', updateChamp)
router.delete('/:id', deleteChamp)


export default router


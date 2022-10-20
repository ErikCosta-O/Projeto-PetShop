import { Router } from 'express'
import { Request, Response } from 'express'
const rota = Router()
//importando o controller 
import * as pageController from'../controllers/pageController'
import * as searchController from '../controllers/searchController'
//criando Rota HOME
rota.get("/",pageController.home)
rota.get("/dogs",pageController.dogs)
rota.get("/cats",pageController.cats)
rota.get("/peixes",pageController.peixes)
//pagina de busca
rota.get("/search", searchController.search)

export default rota
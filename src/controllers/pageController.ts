import { Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObject";
import { Pet } from "../models/pet";

export const home =(req:Request, res:Response)=>{
    let list = Pet.getAll()
        res.render('pages/pages',{
            menu:createMenuObject('all'),
            banner:{
                title:'Todos os animais',
                background:'allanimals.jpg'
            },
            list
        })
}
export const dogs =(req:Request, res:Response)=>{
    let list =Pet.getFromType('dog')
    res.render('pages/pages',{
        menu:createMenuObject('dogs'),
        banner:{
            title: 'Todos os Cachorros',
            background: 'banner_dog.jpg'
        },
        list
    })
}
export const cats =(req:Request, res:Response)=>{
    let list=Pet.getFromType('cat')
    res.render('pages/pages',{
        menu:createMenuObject('cats'),
        banner:{
            title:'Todos os Gatos',
            background:'banner_cat.jpg'
        },
        list
    })
}
export const peixes =(req:Request,res:Response) =>{
    let list=Pet.getFromType('fish')
    res.render('pages/pages',{
        menu:createMenuObject('peixes'),
        banner:{
            title:'Todos os Peixes',
            background:'banner_fish.jpg'
        },
        list
    })
}
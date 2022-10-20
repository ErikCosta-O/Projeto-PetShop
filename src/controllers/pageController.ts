import { Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObject";

export const home =(req:Request, res:Response)=>{
        res.render('pages/pages',{
            menu:createMenuObject('all'),
            banner:{
                title:'Todos os animais',
                background:'allanimals.jpg'
            }
        })
}
export const dogs =(req:Request, res:Response)=>{
    res.render('pages/pages',{
        menu:createMenuObject('dogs'),
        banner:{
            title: 'Todos os Cachorros',
            background: 'banner_dog.jpg'
        }
    })
}
export const cats =(req:Request, res:Response)=>{
    res.render('pages/pages',{
        menu:createMenuObject('cats'),
        banner:{
            title:'Todos os Gatos',
            background:'banner_cat.jpg'
        }
    })
}
export const peixes =(req:Request,res:Response) =>{
    res.render('pages/pages',{
        menu:createMenuObject('peixes'),
        banner:{
            title:'Todos os Peixes',
            background:'banner_fish.jpg'
        }
    })
}
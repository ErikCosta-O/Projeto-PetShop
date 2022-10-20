//ativando o MENU
type menuOptions = ''|'all'|'dogs'|'cats'|'peixes'

export const createMenuObject =(activeMenu:menuOptions)=>{
    let returnObject={
        all:false,
        dogs:false,
        cats:false,
        peixes:false 
    }
    if(activeMenu !==''){
        returnObject[activeMenu]= true
    }
    return returnObject
}
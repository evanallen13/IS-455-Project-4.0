import { addToDb } from '../CRUD/create.js'
import { addPageEditBtnEvent } from './editPage.js'

export function addPageDetailPageEvents(name,email,phone){
    const addPageDetailBtn = document.getElementById('addPageDetailPageSubmitBtn')
    const addPageDetailPageDeleteBtn = document.getElementById('addPageDetailPageDeleteBtn')
    const addPageDetailPageEditBtn = document.getElementById('addPageDetailPageEditBtn')

    addPageDetailBtn.addEventListener('click',function(){
        addToDb(name,email,phone)
    }) 
    addPageDetailPageDeleteBtn.addEventListener('click',()=>{
        if(confirm('Are you sure?')){
            location.reload()
        }
    })
    addPageDetailPageEditBtn.addEventListener('click', ()=>{
        addPageEditBtnEvent(name,email,phone)
    })
}
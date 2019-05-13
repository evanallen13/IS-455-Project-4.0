import { DB } from '../../app.js'
import { indexDetailPageEditBtnEvent } from './editBtn.js'
import { del } from '../../CRUD/delete.js'
export function indexPageDetailPage(id){
    const indexPage = document.getElementById('Contacts-Table')
    indexPage.style.visibility = 'hidden'
    indexPage.style.height = '0'

    const indexDetailPage = document.getElementById('indexDetailPage')
    indexDetailPage.style.visibility = 'visible'
    indexDetailPage.style.height = '300px'

    read(id)
}
function read(ID){
    const contacts = DB.collection('Contacts')
    const query = contacts.where('Name','<','xxx')
    query.get()
        .then(contacts => {
            contacts.forEach(doc => {
                if(doc.id === ID){
                    addToPage(doc.id,doc.data().Name, doc.data().Email, doc.data().Phone)
            }
        })
    })   
}
function addToPage(id,name,email,phone){
    let nameBox = document.getElementById('indexDetailPageName')
    let emailBox = document.getElementById('indexDetailPageEmail')
    let phoneBox = document.getElementById('indexDetailPagePhone')

    nameBox.innerHTML = name
    emailBox.innerHTML = email
    phoneBox.innerHTML = phone
    
    const indexDetailPageEditBtn = document.getElementById('indexDetailPageEditBtn')
    indexDetailPageEditBtn.addEventListener('click',()=>{
        indexDetailPageEditBtnEvent(id,name,email,phone)
    })
    const indexDetailPageSubmitBtn = document.getElementById('indexDetailPageSubmitBtn')
    indexDetailPageSubmitBtn.addEventListener('click',()=>{
        location.reload()
    })
    const indexDetailPageDeleteBtn = document.getElementById('indexDetailPageDeleteBtn')
    indexDetailPageDeleteBtn.addEventListener('click',()=>{
        del(id)
    })
}
import { addPageSubmitBtnEvent } from './addPage/addPageSubmitBtn.js'
import { tableData } from './table/table.js'

export const DB = firebase.firestore()
const indexBtn = document.getElementById('indexBtn')
const newBtn = document.getElementById('newBtn')

const indexPage = document.getElementById('Contacts-Table')

document.addEventListener('DOMContentLoaded', ()=>{
    const contacts = DB.collection('Contacts')
    contacts.onSnapshot(docs => {
        docs.forEach(function(doc){
            tableData(doc.id,doc.data().Name,doc.data().Email,doc.data().Phone)
        })
    })
})


newBtn.addEventListener('click',function(){
    addPage.style.visibility = 'visible'
    addPage.style.height = '300px'

    indexPage.style.visibility = 'hidden'
    indexPage.style.height = '0'
})

indexBtn.addEventListener('click',function(){
    location.reload()
})

/* Add Page */
const addPageSubmitBtn = document.getElementById('addPageSubmitBtn')
addPageSubmitBtn.addEventListener('click',()=>{
    addPageSubmitBtnEvent()
})
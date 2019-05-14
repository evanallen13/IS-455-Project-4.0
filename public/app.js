import { addPageSubmitBtnEvent } from './addPage/addPageSubmitBtn.js'
import { tableData } from './table/table.js'

export const DB = firebase.firestore()
const indexBtn = document.getElementById('indexBtn')
const newBtn = document.getElementById('newBtn')

const indexPage = document.getElementById('Contacts-Table')
const indexEditPage = document.getElementById('indexPageEditPage')
const indexDetailPage = document.getElementById('indexDetailPage')
const detailPageEditPage = document.getElementById('detailPageEditPage')
const addPageDetailPage = document.getElementById('addPageDetailPage')
const addPageEditPage = document.getElementById('addPageEditPage')

document.addEventListener('DOMContentLoaded', ()=>{
    const contacts = DB.collection('Contacts')
    contacts.onSnapshot(docs => {
        docs.forEach(function(doc){
            tableData(doc.id,doc.data().Name,doc.data().Email,doc.data().Phone)
        })
    })
})


newBtn.addEventListener('click',function(){
    indexPage.style.visibility = 'hidden'
    indexPage.style.height = '0'

    indexEditPage.style.visibility = 'hidden'
    indexEditPage.style.height = '0'

    indexDetailPage.style.visibility = 'hidden'
    indexDetailPage.style.height = '0'

    detailPageEditPage.style.visibility = 'hidden'
    detailPageEditPage.style.height = '0'

    addPageDetailPage.style.visibility = 'hidden'
    addPageDetailPage.style.height = '0'

    addPageEditPage.style.visibility = 'hidden'
    addPageEditPage.style.height = '0'
    
    addPage.style.visibility = 'visible'
    addPage.style.height = '300px'       
})

indexBtn.addEventListener('click',function(){
    location.reload()
})

/* Add Page */
const addPageSubmitBtn = document.getElementById('addPageSubmitBtn')
addPageSubmitBtn.addEventListener('click',()=>{
    addPageSubmitBtnEvent()
})


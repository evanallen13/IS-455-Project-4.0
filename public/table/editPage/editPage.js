import { validation } from '../../validation/validation.js'
import { DB } from '../../app.js'

export function editBtnEvent(id){
    const indexPage = document.getElementById('Contacts-Table')
    indexPage.style.visibility = 'hidden'
    indexPage.style.height = '0'

    const indexEditPage = document.getElementById('indexPageEditPage')
    indexEditPage.style.visibility = 'visible'
    indexEditPage.style.height = '300px'

    editPageContent(id)
}

function editPageContent(id){
    const indexPageEditNameInput = document.getElementById('indexPageEditNameInput')
    const indexPageEditEmailInput = document.getElementById('indexPageEditEmailInput')
    const indexPageEditPhoneInput = document.getElementById('indexPageEditPhoneInput')

    indexPageEditNameInput.value = document.getElementById(`name${id}`).innerHTML
    indexPageEditEmailInput.value = document.getElementById(`email${id}`).innerHTML
    indexPageEditPhoneInput.value = document.getElementById(`phone${id}`).innerHTML

    const submitBtn = document.getElementById('indexPageEditSubmitBtn')
    submitBtn.addEventListener('click',()=>{
        submitBtnEvent(id)
    })
}

function submitBtnEvent(id){
    const newName = document.getElementById('indexPageEditNameInput').value
    const newEmail = document.getElementById('indexPageEditEmailInput').value
    const newPhone = document.getElementById('indexPageEditPhoneInput').value
    if(validation(newEmail,newPhone,"indexPageEditPageEmailError","indexPageEditPagePhoneError")){
        DB.collection('Contacts').doc(id).update({
            "Name": newName,
            "Email": newEmail,
            "Phone": newPhone
        }).then(()=>{
            location.reload()
        })
    }
}
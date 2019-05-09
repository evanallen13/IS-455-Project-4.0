import { validation } from '../../validation/validation.js'
import { DB } from '../../app.js'
export function indexDetailPageEditBtnEvent(id,name,email,phone){
    const indexDetailPage = document.getElementById('indexDetailPage')
    indexDetailPage.style.visibility = 'hidden'
    indexDetailPage.style.height = '0'

    const detailPageEditPage = document.getElementById('detailPageEditPage')
    detailPageEditPage.style.visibility = 'visible'
    detailPageEditPage.style.height = '300px'

    editPageInputs(name,email,phone)

    const submitBtn = document.getElementById('detailPageEditSubmitBtn')
    submitBtn.addEventListener('click',()=>{
        submitBtnEvent(id)
    })
}

function editPageInputs(name,email,phone){
    const detailPageEditNameInput = document.getElementById('detailPageEditNameInput')
    const detailPageEditEmailInput = document.getElementById('detailPageEditEmailInput')
    const detailPageEditPhoneInput = document.getElementById('detailPageEditPhoneInput')

    detailPageEditNameInput.value = name
    detailPageEditEmailInput.value = email
    detailPageEditPhoneInput.value = phone
}

function submitBtnEvent(id){
    const newName = document.getElementById('detailPageEditNameInput').value
    const newEmail = document.getElementById('detailPageEditEmailInput').value
    const newPhone = document.getElementById('detailPageEditPhoneInput').value
    if(validation(newEmail,newPhone,"detailPageEditPageEmailError","detailPageEditPagePhoneError")){
        DB.collection('Contacts').doc(id).update({
            "Name": newName,
            "Email": newEmail,
            "Phone": newPhone
        }).then(()=>{
            location.reload()
        })
    }
}

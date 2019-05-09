import { addToDb } from '../CRUD/create.js'

export function addPageEditBtnEvent(name,email,phone){
    const addPageDetailPage = document.getElementById('addPageDetailPage')
    addPageDetailPage.style.visibility = 'hidden'
    addPageDetailPage.style.height = '0'

    const addPageEditPage = document.getElementById('addPageEditPage')
    addPageEditPage.style.visibility = 'visible'
    addPageEditPage.style.height = '300px'

    document.getElementById('addPageEditNameInput').value = name
    document.getElementById('addPageEditEmailInput').value = email
    document.getElementById('addPageEditPhoneInput').value = phone

    const addPageEditEditSubmitBtn = document.getElementById('addPageEditEditSubmitBtn')
    addPageEditEditSubmitBtn.addEventListener('click',()=>{
        submitBtn()
    })

}
function submitBtn(){
    const name = document.getElementById('addPageEditNameInput').value
    const email = document.getElementById('addPageEditEmailInput').value
    const phone = document.getElementById('addPageEditPhoneInput').value

    addToDb(name,email,phone)
}
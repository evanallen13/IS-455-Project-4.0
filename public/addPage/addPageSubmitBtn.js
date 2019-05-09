import { validation } from '../validation/validation.js'
import { addPageDetailPageEvents } from './detailPage.js'
const addPage = document.getElementById('addPage')
const addPageDetailPage = document.getElementById('addPageDetailPage')

export function addPageSubmitBtnEvent(){
    let info = detailInputs()

    if(validation(info[1],info[2],'addEmailError','addPhoneError')){
        addPage.style.visibility = 'hidden'
        addPage.style.height = '0'

        addPageDetailPage.style.height = '300px'
        addPageDetailPage.style.visibility = 'visible'

        document.getElementById('addPageDetailPageName').innerHTML = info[0]
        document.getElementById('addPageDetailPageEmail').innerHTML = info[1]
        document.getElementById('addPageDetailPagePhone').innerHTML = info[2]
        addPageDetailPageEvents(info[0],info[1],info[2])
    }
}

function detailInputs(){
    let nameInput = document.getElementById('addPageNameInput').value
    let emailInput = document.getElementById('addPageEmailInput').value
    let phoneInput = document.getElementById('addPagePhoneInput').value

    return [nameInput, emailInput, phoneInput]
}

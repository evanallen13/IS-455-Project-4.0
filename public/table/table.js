import { del } from '../CRUD/delete.js'
import { indexPageDetailPage } from './detailPage/tableDetailPage.js'
import { editBtnEvent } from './editPage/editPage.js'

export function tableData(id,name,email,phone){
    let test =document.getElementById(id)
    if(test === null){
        const tbody = document.querySelector('tbody')
        let tr = document.createElement('tr')
        tr.setAttribute('id',id)

        let rowInfo = tableInfo(id,name,email,phone)
        tr.appendChild(rowInfo[0])
        tr.appendChild(rowInfo[1])
        tr.appendChild(rowInfo[2])
        tr.appendChild(rowInfo[3])

        let btns = buttons(id)
        tr.appendChild(btns[0])
        tr.appendChild(btns[1])
        tr.appendChild(btns[2])
    
    tbody.appendChild(tr)
    }
}

function tableInfo(id,name,email,phone){
    let numTd = document.createElement('td')
    numTd.innerHTML = document.querySelectorAll('tr').length

    let nameTd = document.createElement('td')
    nameTd.setAttribute('id', `name${id}`)
    nameTd.innerHTML = name

    let emailTd = document.createElement('td')
    emailTd.setAttribute('id', `email${id}`)
    let a = document.createElement('a')
    a.setAttribute('href',`mailto:${email}`)
    a.innerHTML = email
    emailTd.appendChild(a)

    let phoneTd = document.createElement('td')
    phoneTd.setAttribute('id', `phone${id}`)
    phoneTd.innerHTML = phone

    return [numTd,nameTd,emailTd,phoneTd]
}

function buttons(id){
// Detail Btn
    let detailBtn = document.createElement('button')
    detailBtn.innerHTML = 'DETAIL'
    detailBtn.setAttribute('class','detailsBtn')
    detailBtn.addEventListener('click',() =>{
        indexPageDetailPage(id)
    })
    // Edit Btn
    let editBtn = document.createElement('button')
    editBtn.innerHTML = 'EDIT'
    editBtn.setAttribute('class','editBtn')
    editBtn.addEventListener('click', function(){
        editBtnEvent(id)
    })
    // Delete Btn
    let deleteBtn = document.createElement('button')
    deleteBtn.innerHTML = 'DELETE'
    deleteBtn.setAttribute('class','deleteBtn')
    deleteBtn.addEventListener('click', () =>{
        del(id)
    })

    return ([detailBtn,editBtn,deleteBtn])
}
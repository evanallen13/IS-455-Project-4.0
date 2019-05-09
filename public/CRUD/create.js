import { DB } from '../app.js'
export function addToDb(name,email,phone){
    const newContact = DB.collection('Contacts').doc(String(Date.now()))
    newContact.set({
        Name: name,
        Email: email,
        Phone: phone
    }).then(()=>{
        location.reload()
    })
}
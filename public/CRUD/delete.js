export function del(id){
    if(confirm('Are you sure?')){
        const db = firebase.firestore()
        db.collection('Contacts').doc(id).delete()
        .then(()=>{
            location.reload()
        })
    }
}
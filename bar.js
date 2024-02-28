import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import{ getDatabase, ref, onValue, remove} from 'https:///www.gstatic.com/firebasejs/9.15.0/firebase-database.js';

const appSettings= {
    databaseURL: 'https://kokteli-9bc9b-default-rtdb.europe-west1.firebasedatabase.app/'
};

const app=initializeApp(appSettings)

const database = getDatabase(app)

const kokteliUDB = ref(database, 'Stol 1')

const sve=document.getElementById('sve')


onValue(kokteliUDB, function(snapshot){
    let rezultat=Object.values(snapshot.val())
    for (let i=0;i<rezultat.length;i++){

       let novidiv=document.createElement('div');
       
       novidiv.innerHTML=rezultat[i]
        sve.append(novidiv)

        console.log(rezultat[i])
    }
})
const izbrisi=document.getElementById('izbrisi')
izbrisi.addEventListener('click',function(){
    remove(kokteliUDB)
    while (sve.firstChild) {
        sve.removeChild(sve.firstChild);}
   
})
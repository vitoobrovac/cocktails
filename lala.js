
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import{ getDatabase, ref, push } from 'https:///www.gstatic.com/firebasejs/9.15.0/firebase-database.js';

const appSettings= {
    databaseURL: 'https://kokteli-9bc9b-default-rtdb.europe-west1.firebasedatabase.app/'
};

const app=initializeApp(appSettings)

const database = getDatabase(app)

const kokteliUDB = ref(database, 'Stol 1')


const kraj=document.getElementById('kraj')



kraj.addEventListener('click', function(){
    let brojNar=Number(document.getElementById('sakriven').value)
    for(let i = 1; i <= brojNar; i++){
        let ime = document.getElementById(i).innerHTML;
        let kolicina=document.getElementById(i+'a').value;
        push(kokteliUDB, kolicina+' '+ime)
    }
        
    
    
})

//let ukupno=document.getElementById('Mojito').value+' mojito';
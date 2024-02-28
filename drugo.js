//------------------database----------------------------


//-----------------------tranzicija-info-----------------------------------

function info(element, tekst) {
    const slika = document.getElementById(element);
    const informacija = document.getElementById(tekst);
  
    if (slika.style.display === 'block') {
        slika.classList.add('fade-out');
        informacija.classList.remove('fade-out');
        informacija.classList.add('fade-in');
    } else {
        slika.classList.remove('fade-out');
        informacija.classList.remove('fade-in');
        informacija.classList.add('fade-out');
    }
  
    setTimeout(function() {
        if (slika.style.display === 'block') {
            slika.style.display = 'none';
            informacija.style.display = 'block';
        } else {
            slika.style.display = 'block';
            informacija.style.display = 'none';
        }
      
        slika.classList.remove('fade-out');
        slika.classList.remove('fade-in');
        informacija.classList.remove('fade-out');
        informacija.classList.remove('fade-in');
    }, 200);
}
let kosarica = {};


//---------------------radi-kosaricu-----------------------------------
document.getElementById('sakriven').value=0;
let i=1;
function narudžba(ime) {
    if (!kosarica[ime]) {
        let okvir=document.createElement('div');
        okvir.className='okvirB'
        const kosaricaDiv = document.getElementById('kosarica');
        kosaricaDiv.append(okvir)
        let noviElement = document.createElement('span');
        noviElement.innerHTML = ime;
        noviElement.id=i;
        
        let crta=document.createElement('hr')
        
        okvir.append(noviElement);
        

        let kolicina = document.createElement('input');
        kolicina.type = 'number';
        kolicina.className = 'kolicina-input';
        kolicina.value = 1;
        kolicina.max='20'
        kolicina.id=i+'a'
        i++;
        okvir.append(kolicina);
        okvir.append(crta)

        kosarica[ime] = kolicina;
        document.getElementById('sakriven').value=Number(document.getElementById('sakriven').value)+1;
        
       
    } else {
        kosarica[ime].value++;
    }
}



//-------------------------------put-do-kosarice-i-nazad--------------------------------

function dokosarice(){
    let kosarica=document.getElementById('kosarica');
    let grid=document.getElementById('grid');
    let dokosarice=document.getElementById('doKosarice');
    let dokoktela=document.getElementById('doKoktela');
    grid.style.display='none'
    kosarica.style.display='block'
    dokosarice.style.display='none'
    dokoktela.style.display='block'
}

function dokoktela(){
    let kosarica=document.getElementById('kosarica');
    let grid=document.getElementById('grid');
    let dokosarice=document.getElementById('doKosarice');
    let dokoktela=document.getElementById('doKoktela');
    grid.style.display='grid'
    kosarica.style.display='none'
    dokosarice.style.display='block'
    dokoktela.style.display='none'
}


//-------------------------izracun-podataka-------------------------




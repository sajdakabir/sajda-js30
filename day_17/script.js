
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];


function stripBand(bandName){
    return bandName.replace(/^(a |the |an )/i, '').trim();
}



const sortBands=
    bands.sort((a , b) => {
        if(stripBand(a)>stripBand(b)){
            return 1;
        }
        else{
            return -1;
        }
    })
    document.querySelector('#bands').innerHTML=
    sortBands.map(band =>
        
        `<li>${band} </li>`).join('');

console.log(sortBands);
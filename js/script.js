document.addEventListener('DOMContentLoaded', function () {
    const areasection = document.getElementById('Luas');
    const perimetersection = document.getElementById('Keliling');
    const areabuttons = document.getElementById('tombol-luas');
    const perimeterbuttons = document.getElementById('tombol-keliling');
    const arearesult = document.getElementById('Luas-result');
    const perimeterresult = document.getElementById('Keliling-result');
    const gotopbtn = document.getElementById('ke-keliling');
    const gotoabtn = document.getElementById('ke-luas');

    gotopbtn.addEventListener('click', function () {
      // Toggle the visibility of sections
        areasection.style.display = areasection.style.display === 'none' ? 'block' : 'none';
        perimetersection.style.display = perimetersection.style.display === 'none' ? 'block' : 'none';
        areabuttons.style.display = areabuttons.style.display === 'none' ? 'block' : 'none';
        perimeterbuttons.style.display = perimeterbuttons.style.display === 'none' ? 'block' : 'none';
        arearesult.style.display = arearesult.style.display === 'none' ? 'block' : 'none';
        perimeterresult.style.display = perimeterresult.style.display === 'none' ? 'block' : 'none';
    });

    gotoabtn.addEventListener('click', function () {
        // Toggle the visibility of sections
        areasection.style.display = areasection.style.display === 'none' ? 'block' : 'none';
        perimetersection.style.display = perimetersection.style.display === 'none' ? 'block' : 'none';
        areabuttons.style.display = areabuttons.style.display === 'none' ? 'block' : 'none';
        perimeterbuttons.style.display = perimeterbuttons.style.display === 'none' ? 'block' : 'none';
        arearesult.style.display = arearesult.style.display === 'none' ? 'block' : 'none';
        perimeterresult.style.display = perimeterresult.style.display === 'none' ? 'block' : 'none';
        });
});

function hasilLuas() {
    let tinggi = document.getElementById("Tinggi").value
    let alas = document.getElementById("Alas").value
    if(tinggi == '' || alas == ''){
        alert('tinggi dan alas tidak boleh kosong')
    } else if (parseFloat(tinggi) <= 0 || parseFloat(alas) <= 0){
        alert('tinggi dan alas harus bilangan positif')
    } else {
        let luas = parseFloat(tinggi)*parseFloat(alas)*parseFloat(1/2);
        const trimmedResult = luas.toFixed(2).replace(/\.?0+$/, '');
        document.querySelector("#Luas-result").innerHTML=trimmedResult
    }
}

function hasilKeliling() {
    let side_a = document.getElementById("a").value
    let side_b = document.getElementById("b").value
    let side_c = document.getElementById("c").value
    if(side_a == '' || side_b == '' || side_c == ''){
        alert('panjang sisi tidak boleh kosong')
    } else if (parseFloat(side_a) <= 0 || parseFloat(side_b) <= 0 || 
    parseFloat(side_c) <= 0){
        alert('panjang sisi harus bilangan positif')
    } else if (parseFloat(side_a)>=parseFloat(side_b)+parseFloat(side_c) || 
    parseFloat(side_b)>=parseFloat(side_a)+parseFloat(side_c) || 
    parseFloat(side_a)+parseFloat(side_b)<=parseFloat(side_c)){
        alert('panjang suatu sisi harus kurang dari panjang total dua sisi lainnya')
    } else {
        let keliling = parseFloat(side_a)+parseFloat(side_b)+parseFloat(side_c)
        const trimmedResult = keliling.toFixed(2).replace(/\.?0+$/, '');
        document.querySelector("#Keliling-result").innerHTML=trimmedResult
    }
}

function hapusLuas() {
  // Reset input field and result
  let heightInput=document.getElementById("Tinggi");
  if (heightInput.value!="") {
    heightInput.value="";
  }
  let baseInput=document.getElementById("Alas");
  if (baseInput.value!="") {
    baseInput.value="";
  }
  document.querySelector("#Luas-result").innerHTML="0";
}

function hapusKeliling() {
  let aInput=document.getElementById("a");
  if (aInput.value!="") {
    aInput.value="";
  }
  let bInput=document.getElementById("b");
  if (bInput.value!="") {
    bInput.value="";
  }
  let cInput=document.getElementById("c");
  if (cInput.value!="") {
    cInput.value="";
  }
  document.querySelector("#Keliling-result").innerHTML="0";
}

// document.getElementsByTagName("input").addEventListener('keydown',
// function (event) {
//     // Prevent the minus key (-) from being input
//     if (event.key === '-') {
//       event.preventDefault();
//     }
//   });

// document.getElementById("display").addEventListener('input',
// function() {
//     let chars = /^(\d)*(\.)?([0-9]{1})?$/g
// })
let mainRow = document.querySelector('.row');
let images = document.querySelectorAll('.column img');
let currentimgIndex = 0;
let expandedImg = document.getElementById('expandedImg');
let container = document.querySelector('.container');
let imgText = document.getElementById('imgtext');
let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');

function myFunction (img){
    currentimgIndex = Array.from(images).indexOf(img);
    showImage(currentimgIndex);
    container.style.display = 'block';
    mainRow.style.display = 'none';
}

function closeImage(){
    container.style.display = 'none';
    mainRow.style.display = 'grid'
}

function showImage (index){
    expandedImg.src = images[index].src;
    imgText.innerHTML = images[index].alt;
}

function goPrev(){
    currentimgIndex -- ;
    if(currentimgIndex < 0){
       currentimgIndex = images.length - 1;   
    }
   showImage(currentimgIndex);
}
function goNext (){
    currentimgIndex ++;
    if(currentimgIndex >= images.length){
        currentimgIndex = 0;
    }
    showImage(currentimgIndex)
}
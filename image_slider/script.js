const nextEl=document.querySelector('.next');
const prevEl=document.querySelector('.prev');

const imgsE1=document.querySelectorAll('img');

const imageContainerE1=document.querySelector('.image-container');

let currentImg=1;       

nextEl.addEventListener('click',()=>
    {
        currentImg++;
        updateImg();
});

prevEl.addEventListener('click',()=>
    {
        currentImg--;
        updateImg();
});


function updateImg(){
    if(currentImg > imgsE1.length){
        currentImg=1;
    }else if (currentImg < 1){
        currentImg=imgsE1.length;   
    }
    imageContainerE1.style.transform=
    `translateX(-${(currentImg-1)*500}px)`;
}

// If need, we can change slide automatically by setting time;
// Image Section
let sectionImage = document.getElementById('myImage');

let myImages = ['image/one.jpg', 'image/two.jpg', 'image/three.jpg', 'image/four.jpeg', 'image/five.png'];

function changeImage(element, image){
    setInterval(function(){
        let random = Math.floor(Math.random() * 5);
        element.src = image[random]
    }, 3000);
}

changeImage(sectionImage, myImages);

// Menu List Section


function showAndHide(){
    let element = document.querySelector('header ul');
    let displaySetting = element.style.display;
    if (displaySetting == 'none'){
        element.style.display = 'block'
    }
    else{
        element.style.display = 'none'
    }
    
}
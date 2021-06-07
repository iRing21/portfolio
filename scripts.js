function randomNum() {
    return Math.floor(Math.random() * 2); // # of photos - 1
}

let picSelectorInput = randomNum();

const pic = document.getElementById("pic");

function picSelector(picSelectorInput) {
    switch (picSelectorInput) {
        case 0:
            pic.innerHTML =   ;  // Lily cropped pic
        case 1:
               ; // coat cropped pic
        case 2: 
               ; // me cropped pic
    }
}

console.log(picSelectorInput);
console.log(pic.innerHTML);
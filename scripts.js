
// Beneath is for changing profile pic

function randomNum() {
    return Math.floor(Math.random() * 3); // # of photos +1
}

let picSelectorInput = randomNum();

const pic = Document.getElementById('pic');

function picSelector() {
    switch (picSelectorInput) {
        case 0:
            pic.setAttribute('src', 'media/lilycropped.png');  // Lily cropped pic
        case 1:
            pic.setAttribute('src', 'media/coatcropped.png'); // coat cropped pic
        case 2: 
            pic.setAttribute('src', 'media/mecropped.png'); // me cropped pic
    }
}

pic.onclick = picSelector();
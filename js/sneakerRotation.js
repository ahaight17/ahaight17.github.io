const ROT_LENGTH = 7
const CLASS = 'sneaker'
var index = 1

function swapImage(){
    if(index > ROT_LENGTH){
        index = 0
    }
    var sneakerImage = document.getElementsByClassName(CLASS);
    console.log('sneakrrotation/' + index + '.png')
    sneakerImage.src = 'sneakrrotation/' + index + '.png'
    index += 1
}

function setImageInterval() {
    setInterval(swapImage, 3000)
}


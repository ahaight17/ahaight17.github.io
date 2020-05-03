const ROT_LENGTH = 7
const CLASS = 'sneaker'
var index = 1

setInterval(swapImage, 3000)
var swapImage = function(){
    console.log('in the function!')
    if(index > ROT_LENGTH){
        index = 1
    }
    var sneakerImage = document.getElementsByClassName(CLASS);
    sneakerImage.src = 'sneakrrotation/' + index + '.png'
    index += 1
}


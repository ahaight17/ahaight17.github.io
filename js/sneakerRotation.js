const ROT_LENGTH = 7
const CLASS = 'sneaker'
var index = 1

function swapImage(){
    if(index > ROT_LENGTH){
        index = 0
    }
    var path = "/sneakerrotation/" + index + ".png"
    $(".sneaker").attr("src", path);
    index += 1
}

function setImageInterval() {
    setInterval(swapImage, 3000)
}


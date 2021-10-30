const modelParams = { 
flipHorizontal: true, //flip e.g or video
imageScaleFactor: 0.7, //reduce input image size for gains in speed.
maxNumbBoxes: 20, //max number of boxes to detect
iouThreshold: 0.5, //ioU threshold for non-max suppression.
scoreThreshold: 0.79, //confidence threshold for predictions.
}

navigator.getUserMedia =
 navigator.getUserMedia ||
navigator.webkitgetUserMedia ||
navigator.mozGetUserMedia ||
navigator.msGetUserMedia;

//Select everything in my html
const  video = document.querySelector('#video');
const  audio = document.querySelector('#audio');
const  canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');
let model;

handTrack.startVideo(video)
.then(status => {
    if(status){
        navigator.getUserMedia({video: {}}, stream => {
           video.srcObject = stream;
           setInterval(runDetection, 1000)
          // runDetection(); runs it iver and over, doesnt work
        },
        err => console.log(err)
        );
    }
})


function runDetection(){
    model.detect(video)
    .then(predictions => {
        console.log(predictions); // code ran from here
       // model.renderPredictions(predictions, canvas, context, video);//shows us what the predictions will deliver
       if(predictions.length > 0) {
           audio.play(); // plays the audio for me, it actually works.
       }
       //requestAnimationFrame(runDetection); // runs it over and over again
    });
}


handTrack.load(modelParams).then(lmodel=> {
    model= lmodel;
});
 

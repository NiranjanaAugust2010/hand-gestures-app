prediction1=""
prediction2=""

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
})

camera= document.getElementById("camera")
Webcam.attach(camera)

function photo(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'">'
    })
}

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/fSLuzs6y5/model.json",modelLoaded)
function modelLoaded(){
    console.log("modelLoaded")
}

function check(){
    img=document.getElementById("capture_image")
    classifier.classify(img,gotResult)
}

function gotResult(error,results){
    if (error){
        console.error(error)
    }
    else{
        console.log (results)
        document.getElementById("resultemotion1").innerHTML=results[0].label
        document.getElementById("resultemotion2").innerHTML=results[1].label
    }
    if(results[0].label=="best") {
        document.getElementById("updateemoji1").innerHTML="👍"
       
        
    }
    if(results[0].label=="fist"){
        document.getElementById("updateemoji1").innerHTML="👊"
    }

    if(results[0].label=="peace"){
        document.getElementById("updateemoji1").innerHTML="✌"
    }


    if(results[1].label=="best") {
        document.getElementById("updateemoji2").innerHTML="&#128077;"
       
        
    }
    if(results[1].label=="fist"){
        document.getElementById("updateemoji2").innerHTML="&#128074;"
    }

    if(results[1].label=="peace"){
        document.getElementById("updateemoji2").innerHTML="&#9996;"
    }
}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>html Events</title>
</head>
<body>
    <h1>Awesome Image</h1>
    <div>
        <ul id="image">
            <li><img width="200px"  id="girl1" src="pexels-photo-1308881.jpeg"  alt="Photoshop" ></li>
            <li><img width="200px"  id="girl2" src="pexels-photo-1386604.jpeg"  alt="Photoshop"></li>
            <li><img width="200px"  id="girl3" src="pexels-photo-1461974.jpeg"  alt="Photoshop"></li>
            <li><img width="200px"  id="girl4" src="pexels-photo-609549.jpeg"  alt="Photoshop"></li>
            <li><img width="200px"  id="girl5" src="wedding-dresses-fashion-character-bride-157757.jpeg"  alt="Photoshop"></li>
            <li> <a id="google" style="color: blue;" href="https://www.google.com/">google</a></li>
        </ul>
    </div>
</body>
<script>
    // document.getElementById('girl3').onclick = function(){
    //     alert('This is a beautyful Tower')
    // }
    // attachEvent()
    // jQuery - on

     
    /********some important events notes******/

    // type, timestamp, defaultPrevent
    // target, toElement, srcElement, currentTarget,
    // clientX, clientY, screenX, screenY
    // altkey, ctrlkey, shiftkey, keyCode

    /* EventPropgation
     there is two types eventspropagatin
                    /\
                   /  \
                  /    \
       EventBublling   EventCapturing 
       It is false  and   true  on the work 
                           this is work top to bottom */
    // document.getElementById('girl2').addEventListener('click' ,function(e){
    //     // alert('This is a Beutyful Girl')
    //   console.log(e);
    //  });

//     document.getElementById('image').addEventListener('click' ,function(e){
//        console.log("clicked inside the ul");
//      },false);

//     document.getElementById('girl3').addEventListener('click' ,function(e){
//       console.log('girl2 clicked');
//       e.stopPropagation() // stopPropagation() se bublling effact ko rok deta hai, bottom se top par nahi jata hai.
//      },false);

//   document.getElementById('google').addEventListener('click', function(e){
//       e.preventDefault() // form sumit karne se rokta hai, click karne se form ya link aage tak naj=hi jata hai ohi par rok deta hai.
//       e.stopPropagation();
//       console.log(`Google clicked`);
//   },false)

  document.querySelector('#image').addEventListener('click',function(e){
    console.log(e.target.tagName);
    if(e.target.tagName === "IMG"){
        console.log(e.target.id);
        let removeIt = e.target.parentNode
    removeIt.remove();
    }
    

    // removeIt.parentNode.removechild(removeIt)

  },false)
    
</script>
</html>

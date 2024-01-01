<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Learning</title>

    <style>
        *{
            background-color: black;
            color: white;
        }
    </style>
   
</head>
<body>
    <div class="bg-black">
        <h1 id="title"class="heading">Dom Learning on Chai aur code <span style="display:none">inner text visible</span></h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <input type="password" name="" id="">
        <ul>
            <li class="list-item">one</li>
            <li class="list-item">two</li>
            <li class="list-item">three</li>
            <li class="list-item">four</li>
        </ul>
    </div>
    <script>
        document.querySelector('title');
        const stl = document.querySelector('h2')
        stl.style.backgroundColor = 'green'
        stl.style.fontSize = '20px';
        stl.innerText = 'teen';
        stl.innerContant = 'title'
        stl.innerText = 'shreyans'


    const allH2 = document.querySelectorAll('h2')
    allH2.forEach(function(l){
        l.style.backgroundColor='red'
        l.style.color='yellow'
       })
    </script>
    
</body>
</html>

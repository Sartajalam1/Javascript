<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dom | Chai aur code</title>
</head>
<body style="background-color: black; color:white;">
    <div class="parent">
        <div class="day">Monday</div>
        <div class="day">Tuesday</div>
        <div class="day">Wednesday</div>
        <div class="day">Thursday</div>
    </div>

</body>
<script>
    const parent = document.querySelector('.parent')
    // console.log(parent)
    // console.log(parent.children)
    // console.log(parent.children[1])
    // console.log(parent.children[2].innerHTML)
    // for(let i =0; i<parent.children.length;i++){
    //     console.log(parent.children[i].innerHTML)
    // }
    parent.children[1].style.color = 'red'
    parent.children[2].style.color = 'orange'
    parent.children[3].style.color = 'green'

    console.log(parent.firstElementChild)
    console.log(parent.lastElementChild);

    const dayOne = document.querySelector('.day')
    console.log(dayOne)
    console.log(dayOne.parentElement);
    console.log(dayOne.nextElementSibling)

    console.log("NODES:",parent.childNodes)

</script>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chai aur code</title>
</head>
<body style="background-color: black; color:white;">
    
</body>
<script>
    const div = document.createElement('div')
    console.log(div)
    div.className = 'main'
    div.id = Math.round(Math.random() * + 1)

    div.setAttribute('title','generated title')
    div.style.backgroundColor = "red"
    div.style.padding = "12px"
    div.style.color = "white"
    div.innnerText = "Chai aur code"
    const addText = document.createTextNode("Chai aur Code")
    div.appendChild(addText)
    document.body.appendChild(div)

</script>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chai aur code</title>
</head>
<body>
    <ul class="language">
        <li>Javascript</li>
    </ul>
</body>
<script>
    // add
    function addlanguage(langName){
        const li = document.createElement('li');
        // this line is Optimize see Below  function line
        li.innerHTML = `${langName}`
        document.querySelector('.language').appendChild(li)
    }
    addlanguage('Python')
    addlanguage("Typescript") 

    // opptimize
    function addOptiLanguage(langName){
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(langName))
        document.querySelector('.language').appendChild(li)
    }
    addOptiLanguage('golang')
    addOptiLanguage('swift')

    // Edit
    const secondLang =document.querySelector("li:nth-child(3)")
    console.log(secondLang);
    // secondLang.innerHTML="Mojo"
    const newli = document.createElement('li')
    newli.textContent = "ShareChat"
    secondLang.replaceWith(newli)

    // Edit
    const firstLang = document.querySelector("li:first-child")
    firstLang.outerHTML = '<li>Typescript</li>'

    // remove

    const lastLang = document.querySelector('li:nth-child(2)')
    lastLang.remove()

</script>
</html>

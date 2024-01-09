const form = document.querySelector('form')
       form.addEventListener('submit',function(e){
        e.preventDefault()

        const Height = parseInt(document.querySelector('#Height').value);
        const Weight = parseInt(document.querySelector('#Weight').value);
        const results = (document.querySelector('#results'));
        
        if(Height === '' || Height < 0 || isNaN(Height)){
            results.innerHTML = `Please give a valid Height ${Height}`;
            results.style.color = "#0000FF"
        }
        else if(Weight === " " || Weight < 0 || isNaN(Weight)){
            results.innerHTML = `Please give a valid Height ${Weight}`;
            
        }
        else{
            const bmi = (Weight/((Height * Height)/10000)).toFixed(2);
            // show the result
            results.innerHTML = `<span>${bmi}</span>`
        }


     })

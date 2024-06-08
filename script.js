function gradeChecker() {



    var score = input.value 
    if (score>=70 && score<=100) {
        bodyTag.style.backgroundColor = 'black'
    result.innerHTML = 'A - EXCELLENT😎'

    console.log(result.style);
    result.style.color = 'green'
        // console.log('A');
        // console.log(score);
        



    }else if (score>=60 && score <70) {
    result.innerHTML = 'B - VERY GOOD 😊' 
    result.style.color = 'blue' 
    
    


    }else if (score >=50 && score <60) {
    result.innerHTML = 'C - GOOD 🙂'
    result.style.color = 'yellow'


        
    }else if (score>=45 && score <50) {
    result.innerHTML = 'D - FAIR 😐'
    result.style.color = 'orange'


        
    }else if (score >=40 && score <45) {
        result.innerHTML = 'E - POOR 😒'
        result.style.color = 'orangered'

        
    }else if (score>=0.01 && score <40) {
        result.innerHTML = 'F - FAIL 😏'
        result.style.color = 'red'


        
    }
    else{ 
    console.log(score);
    result.innerHTML= "invalid input"
}
input.value=''

    
    
}
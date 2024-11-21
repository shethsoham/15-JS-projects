// set initial Count
let count =0;

// select values and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");


// running forEach : we pass the callback function in  forEach 
// function is called aaginst in and every item in myList

btns.forEach(function (btn){
    btn.addEventListener("click",function (e){
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){
            count--;
        }
        else if(styles.contains("increase")){
            count++;
        }else if(styles.contains("reset")){
            count = 0
        }
        if (count > 0){
            value.style.color ="green";
        }
        if (count < 0){
            value.style.color ="red";
        }
        if(count === 0){
            value.style.color ="black"
        }
        value.textContent = count;
    });
});

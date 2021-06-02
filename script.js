let checkbox = document.querySelector('input[name=theme]');
let darkModeButton = document.querySelector('.dark-mode-button');
// This is for transition

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 300)
}

// Button click action

darkModeButton.addEventListener('click', () =>{
    if(checkbox.checked){
        checkbox.checked = false;
        localStorage.setItem("checkbox", 'false');

        document.documentElement.setAttribute('data-theme', 'light');
        trans();
    } else {
        checkbox.checked = true;
        localStorage.setItem("checkbox", true);
        
        document.documentElement.setAttribute('data-theme', 'dark');
        trans();
    }
})



// Checking if the user already has theme selected

function checkLocalStorage() {
    if(localStorage.getItem('checkbox') === null){
        //pass
    } else {
        let checked = JSON.parse(localStorage.getItem('checkbox'));
        if(checked == true){
            document.documentElement.setAttribute('data-theme', 'dark');
            checkbox.checked = true;
        }
    }
}

checkLocalStorage();


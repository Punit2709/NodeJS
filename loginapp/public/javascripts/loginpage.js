const crtBtn = document.getElementById('crt-acc-btn');
const submit = document.getElementById('submit');

crtBtn.addEventListener('click', () => {
    window.location.href = "signup";
})

submit.addEventListener('click', () =>{
    window.location.href = "login";
})
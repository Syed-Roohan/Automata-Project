let date = document.getElementById('date');
date.addEventListener('blur', ()=>{
    // Password Validation
    let Regdate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/g;
    let str = date.value;
    console.log(Regdate, str);
    if(Regdate.test(str)){
        console.log("Matched");
        date.classList.remove('is-invalid');
    }
    else{
        console.log("Not Matched");
        date.classList.add('is-invalid');
    }
})





// [0-2][0-9]|[3][0-1]\/(((0)[0-9])|((1)[1-2]))\/\d{4}
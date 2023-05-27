let time = document.getElementById('time');
time.addEventListener('blur', ()=>{
    // Password Validation
    let Regtime = /^([0][1-9]|(1)[0-2])\:([0][1-9]|(1)[0-2])\:([0][1-9]|[0-5][0-9])$/g;
    let str = time.value;
    console.log(Regtime, str);
    if(Regtime.test(str)){
        console.log("Matched");
        time.classList.remove('is-invalid');
    }
    else{
        console.log("Not Matched");
        time.classList.add('is-invalid');
    }
})





// [0-2][0-9]|[3][0-1]\/(((0)[0-9])|((1)[1-2]))\/\d{4}
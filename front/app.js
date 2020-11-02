const Firstname = document.getElementById("firstnam");
const Imag = document.getElementById("image");
const Email = document.getElementById("em");
let num = 1;
let numb = 0;
let start = {
    Firstname: Firstname.innerText,
    Imag: Imag.src,
    Email: Email.innerText
};
Firstname.onclick = function(){
    if(numb++%5 === 0){
        Firstname.innerText = start.Firstname;        
        Imag.src = start.Imag;
        Email.innerText = start.Email;
    }
    else{
        if(num >= 12)num = 1; else num++;
        $ajaxUtils.sendGetRequest("https://miro4ka.herokuapp.com/users/"+num,function(response){
            const json =  (JSON.parse(response.responseText))[0];
            Firstname.innerText = json.data.first_name +" "+ json.data.last_name;            
            Email.innerText = json.data.email;
            Imag.src = json.data.avatar;
        });
    }
};
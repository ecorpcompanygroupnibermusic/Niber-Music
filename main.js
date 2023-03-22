let HEADER=document.querySelector('header');
let DIV=document.querySelector('div');
let FOOTER=document.querySelector('footer');
let Log=document.querySelector('#logIn');



HEADER.innerHTML=HEADERDATA;
DIV.innerHTML=HOMEDATA;
FOOTER.innerHTML=FOOTERDATA;
Log.innerHTML=LogInData;

Auto=()=>{
    if (localStorage.setItem('UserName',user.displayName)===localStorage.getItem('UserName',user.displayName)) {
            Log.style.display="none";
        } else {
            Log.style.display="none";
        }
    }
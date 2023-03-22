Menu=()=>{
    DIV.innerHTML=MENUDATA;
}

Home=()=>{
    DIV.innerHTML=HOMEDATA;
}

Music=()=>{
    DIV.innerHTML=MUSICDATA;
}

Settings=()=>{
    DIV.innerHTML=SETTINGSDATA;
}

DarkMode=()=>{
    let body=document.querySelector('body');
    body.style.background="gray";
}

LightMode=()=>{
    let body=document.querySelector('body');
    body.style.background="transparent";
}

Notification=()=>{
    DIV.innerHTML=NOTIFICATIONDATA;
}

Contact=()=>{
    DIV.innerHTML=CONTACTDATA;
}

Instagram=()=>{
    open('www.e-corpcompanygroup.com')
}

YouTube=()=>{
    open('www.e-corpcompanygroup.com')
}

Gmail=()=>{
    open('www.e-corpcompanygroup.com')
}

WebSite=()=>{
    open('www.e-corpcompanygroup.com')
}

About=()=>{
    DIV.innerHTML=ABOUTUSDATA;
}

PrivacyPolicy=()=>{
    DIV.innerHTML=PRIVACYPOLICYDATA;
}

More=()=>{
    open('www.e-corpcompanygroup.com')
}

Help=()=>{
    DIV.innerHTML=HELPDATA;
}

SignOut=()=>{
    localStorage.removeItem('UserName',user.displayName);
    Log.style.display="block";
    
}


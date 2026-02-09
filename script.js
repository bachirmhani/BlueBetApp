const dictionary = {
    en: { title: "Account Settings", btn: "Enter Dashboard", user: "Username" },
    ar: { title: "إعدادات الحساب", btn: "دخول للداشبورد", user: "اسم المستخدم" }
};

function updateLang() {
    const l = document.getElementById('lang-select').value;
    if(dictionary[l]) {
        document.getElementById('st-title').innerText = dictionary[l].title;
        document.getElementById('entry-btn').innerText = dictionary[l].btn;
        document.getElementById('username').placeholder = dictionary[l].user;
        document.body.dir = (l === 'ar') ? 'rtl' : 'ltr';
    }
}

function makeID() {
    let res = "";
    for(let i=0; i<10; i++) res += Math.floor(Math.random()*10);
    return res;
}

window.onload = () => {
    document.getElementById('user-id').value = "ID: " + makeID();
    setTimeout(() => {
        document.getElementById('loading-screen').classList.add('hidden');
        document.getElementById('settings-screen').classList.remove('hidden');
    }, 3000);
};
ش

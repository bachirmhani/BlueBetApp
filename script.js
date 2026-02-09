const translations = {
    en: { title: "Account Settings", btn: "Enter Dashboard", load: "Loading...", user: "Username" },
    ar: { title: "إعدادات الحساب", btn: "دخول للداشبورد", load: "جاري التحميل...", user: "اسم المستخدم" }
};

function changeLanguage() {
    const lang = document.getElementById('lang-select').value;
    if(translations[lang]) {
        document.getElementById('settings-title').innerText = translations[lang].title;
        document.getElementById('entry-btn').innerText = translations[lang].btn;
        document.getElementById('username').placeholder = translations[lang].user;
        document.body.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    }
}

function generateID() {
    let id = "";
    for(let i = 0; i < 10; i++) {
        id += Math.floor(Math.random() * 10);
    }
    return id;
}

window.onload = () => {
    document.getElementById('user-id').value = "ID: " + generateID();
    setTimeout(() => {
        document.getElementById('loading-screen').classList.add('hidden');
        document.getElementById('settings-screen').classList.remove('hidden');
    }, 3000);
};

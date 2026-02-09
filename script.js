function generateUserID() {
    let result = '';
    for (let i = 0; i < 10; i++) {
        result += Math.floor(Math.random() * 10);
    }
    return result;
}

window.onload = () => {
    document.getElementById('user-id').value = "ID: " + generateUserID();

    setTimeout(() => {
        const loader = document.getElementById('loading-screen');
        loader.style.opacity = '0';
        loader.style.transition = '0.5s';
        setTimeout(() => {
            loader.classList.add('hidden');
            document.getElementById('settings-screen').classList.remove('hidden');
        }, 500);
    }, 3000);
};

document.getElementById('start-btn').onclick = () => {
    const name = document.getElementById('username').value;
    if (name.trim() === "") {
        alert("Please enter your username!");
    } else {
        console.log("User entry allowed: " + name);
        // Next step: Load Dashboard
    }
};

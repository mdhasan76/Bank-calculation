document.getElementById('btn').addEventListener('click', function () {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const emailValue = email.value;
    const passwordValue = password.value;
    if (emailValue === 'mdhasan8064@gmail.com' && passwordValue === 'hasan85') {
        window.location.href = '/bank.html'
    }
    else {
        if (emailValue != 'mdhasan8064@gmail.com') {
            alert('Enter Valid email');
        }
        else if (passwordValue != 'hasan85') {
            alert('Wrong Password');
        }
        else {
            alert('Shob bhol')
        }
    }
});
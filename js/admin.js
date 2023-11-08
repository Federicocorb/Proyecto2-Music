const validationUser = () => {
    const roleUser = localStorage.getItem('role');

    if(roleUser === 'admin'){
        alert('Bienvenido al panel de Adm');
    }else{
        window.location.href = '../index.html'
    }
}


validationUser();
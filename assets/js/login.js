const container = document.getElementById('container');
 const registerBtn = document.getElementById('register');
 const loginBtn = document.getElementById('login');
 
 registerBtn.addEventListener('click', () => {
     container.classList.add("active");
 });
 
 loginBtn.addEventListener('click', () => {
     container.classList.remove("active");
 });

 function togglePasswordVisibility(type) {
    var passwordField = document.getElementById(type === 'signup' ? 'signup-password' : 'signin-password');
    var eyeIcon = document.getElementById(type === 'signup' ? 'signup-eye-icon' : 'signin-eye-icon');
    var eyeSlashIcon = document.getElementById(type === 'signup' ? 'signup-eye-slash-icon' : 'signin-eye-slash-icon');
    
    if (passwordField.type === 'password') {
        passwordField.type = 'text'; // Thay đổi kiểu trường mật khẩu thành text
        eyeIcon.style.display = 'none'; // Ẩn icon mắt
        eyeSlashIcon.style.display = 'block'; // Hiển thị icon mắt bị khóa
    } else {
        passwordField.type = 'password'; // Quay lại kiểu password
        eyeIcon.style.display = 'block'; // Hiển thị icon mắt
        eyeSlashIcon.style.display = 'none'; // Ẩn icon mắt bị khóa
    }
}
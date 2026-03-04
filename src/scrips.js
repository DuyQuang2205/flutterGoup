// Lấy các phần tử từ HTML
const btnLogin = document.getElementById('btnLogin');
const txtUserName = document.getElementById('txtUserName');
const txtMatKhau = document.getElementById('txtMatKhau');
const messageDiv = document.getElementById('message');

// Thông tin đăng nhập hợp lệ
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'admin';

// Xử lý sự kiện click button Đăng nhập
btnLogin.addEventListener('click', function() {
    // Lấy giá trị từ input
    const username = txtUserName.value.trim();
    const password = txtMatKhau.value.trim();

    // Kiểm tra nếu chưa nhập
    if (username === '' || password === '') {
        showError('Vui lòng nhập tên đăng nhập và mật khẩu!');
        return;
    }

    // Kiểm tra username và password
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        showSuccess('✓ Đăng nhập thành công!');
        
        // Xoá dữ liệu sau 2 giây
        setTimeout(() => {
            txtUserName.value = '';
            txtMatKhau.value = '';
            messageDiv.textContent = '';
            messageDiv.className = 'message';
        }, 2000);
    } else {
        showError('✗ Tên đăng nhập hoặc mật khẩu sai!');
    }
});

// Hàm hiển thị thông báo thành công
function showSuccess(message) {
    messageDiv.textContent = message;
    messageDiv.className = 'message success';
}

// Hàm hiển thị thông báo lỗi
function showError(message) {
    messageDiv.textContent = message;
    messageDiv.className = 'message error';
}

// Xoá thông báo khi người dùng bắt đầu nhập
txtUserName.addEventListener('input', () => {
    messageDiv.textContent = '';
    messageDiv.className = 'message';
});

txtMatKhau.addEventListener('input', () => {
    messageDiv.textContent = '';
    messageDiv.className = 'message';
});

// Enter để đăng nhập
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        btnLogin.click();
    }
});
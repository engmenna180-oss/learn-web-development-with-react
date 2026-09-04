function getUsers() {
  return JSON.parse(localStorage.getItem('users')) || [];
}
const signupForm = document.getElementById('signupForm');
if (signupForm) {
  signupForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('errorMsg');
    errorElement.textContent = '';
    if (!username || !email || !password) {
      errorElement.textContent = 'Please fill in all required fields.';
      return;
    }
    if (password.length < 6) {
      errorElement.textContent = 'Password must be at least 6 characters.';
      return;
    }
    const users = getUsers();
    const userExists = users.some(user => user.email === email);
    if (userExists) {
      errorElement.textContent = 'This email is already registered.';
      return;
    }
    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    
    alert('Account created successfully! Redirecting to login page...');
    window.location.href = 'login.html';
  });
}
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('errorMsg');
    errorElement.textContent = '';
    const users = getUsers();
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
      errorElement.textContent = 'Invalid email or password.';
      return;
    }
    localStorage.setItem('currentUser', JSON.stringify({ username: user.username, email: user.email }));
    window.location.href = 'index.html';
  });
}
function logout() {
  localStorage.removeItem('currentUser');
  window.location.reload();
}
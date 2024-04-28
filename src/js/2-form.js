const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
    
// Під час завантаження сторінки перевіряю стан сховища
const storedState = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (storedState) {
      emailInput.value = storedState.email || '';
      messageInput.value = storedState.message || '';
}
    
 // Відстежуємо введення користувача та зберігаємо дані в сховищі
form.addEventListener('input', function(event) {
    const currentState = {
        email: emailInput.value.trim(),
        message: messageInput.value.trim()
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(currentState));
});

// Подія відправки форми
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Забороняємо браузеру відправляти форму
    
// Перевірка на порожні поля перед відправленням
  if (!emailInput.value.trim() || !messageInput.value.trim()) {
    alert('Fill please all fields');
    return; // Перериваємо відправку форми, якщо є порожні поля
  }
    
    const currentState = JSON.parse(localStorage.getItem('feedback-form-state'));
    console.log(currentState); // Виводимо дані в консоль
    localStorage.removeItem('feedback-form-state'); // Очищаємо сховище
    emailInput.value = ''; // Очищаємо поле email
    messageInput.value = ''; // Очищаємо поле повідомлення
});

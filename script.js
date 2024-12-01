// تغيير ألوان الموقع
const colorChangeBtn = document.getElementById('colorChangeBtn');
colorChangeBtn.addEventListener('click', () => {
    const colors = ['#f0f8ff', '#ffe4e1', '#f5f5dc', '#d3ffce', '#e6e6fa'];
    document.body.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
});

// إظهار/إخفاء محتوى الأقسام
const toggleButtons = document.querySelectorAll('.toggle-section');
toggleButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const section = button.parentElement;
        const content = section.querySelector('p, ul');
        if (content.style.display === 'none') {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
});

// رسالة تنبيه عند إرسال الفورم
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('شكراً لتواصلك معنا! سنتواصل معك قريباً.');
});

// إشعارات عشوائية
const notifications = [
    'هل تعلم أن الربح من الإنترنت أصبح سهلاً مع محمود؟',
    'جرب خدماتنا المجانية اليوم!',
    'أفضل استراتيجيات العمل الرقمي تجدها هنا!',
];
setInterval(() => {
    const randomNotification =
        notifications[Math.floor(Math.random() * notifications.length)];
    alert(randomNotification);
}, 10000); // إشعار كل 10 ثوانٍ
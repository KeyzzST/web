// Fungsi untuk toggle menu mobile
document.querySelector('.menu-toggle').addEventListener('click', function() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('show');
});

// Tutup menu saat mengklik link
document.querySelectorAll('#navMenu a').forEach(link => {
    link.addEventListener('click', function() {
        const navMenu = document.getElementById('navMenu');
        navMenu.classList.remove('show');
    });
});

// Enhanced FAQ Functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            // Toggle active class
            this.classList.toggle('active');
            
            // Get the answer element
            const answer = this.nextElementSibling;
            
            // Toggle answer visibility with smooth animation
            if (answer.classList.contains('show')) {
                answer.classList.remove('show');
                answer.style.maxHeight = null;
            } else {
                answer.classList.add('show');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
            
            // Close other open answers
            faqQuestions.forEach(q => {
                if (q !== question && q.classList.contains('active')) {
                    q.classList.remove('active');
                    const otherAnswer = q.nextElementSibling;
                    otherAnswer.classList.remove('show');
                    otherAnswer.style.maxHeight = null;
                }
            });
        });
        
        // Initialize first question as open
        if (question === faqQuestions[0]) {
            question.classList.add('active');
            const answer = question.nextElementSibling;
            answer.classList.add('show');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});
// تفعيل القائمة المحمولة
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// إغلاق القائمة عند النقر على رابط
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// تأثير التمرير السلس للروابط
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// تأثير تغيير شريط التنقل عند التمرير
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(26, 54, 93, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#1a365d';
        navbar.style.backdropFilter = 'none';
    }
});

// تأثير الظهور التدريجي للعناصر
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// مراقبة العناصر للتأثير
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.skill-item, .project-card, .blog-card, .info-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// تأثير الكتابة التدريجية للعنوان الرئيسي
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// تطبيق تأثير الكتابة على العنوان الرئيسي
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    const originalText = heroTitle.textContent;
    typeWriter(heroTitle, originalText, 80);
});

// تأثير تحريك الأرقام
function animateNumbers() {
    const numbers = document.querySelectorAll('.number-animate');
    
    numbers.forEach(number => {
        const target = parseInt(number.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            number.textContent = Math.floor(current);
            
            if (current >= target) {
                number.textContent = target;
                clearInterval(timer);
            }
        }, 20);
    });
}

// معالجة نموذج التواصل
document.querySelector('.contact-form form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // جمع بيانات النموذج
    const formData = new FormData(this);
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const subject = this.querySelector('input[type="text"]:nth-of-type(2)').value;
    const message = this.querySelector('textarea').value;
    
    // التحقق من صحة البيانات
    if (!name || !email || !subject || !message) {
        alert('يرجى ملء جميع الحقول المطلوبة');
        return;
    }
    
    // محاكاة إرسال الرسالة
    const submitBtn = this.querySelector('.btn-primary');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'جاري الإرسال...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert('تم إرسال رسالتك بنجاح! سأقوم بالرد عليك قريباً.');
        this.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

// تأثير تحريك المهارات عند التمرير
function animateSkills() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach((skill, index) => {
        setTimeout(() => {
            skill.style.transform = 'scale(1.05)';
            setTimeout(() => {
                skill.style.transform = 'scale(1)';
            }, 200);
        }, index * 100);
    });
}

// تفعيل تأثيرات إضافية عند التمرير
let skillsAnimated = false;

window.addEventListener('scroll', () => {
    const skillsSection = document.querySelector('.skills');
    const skillsPosition = skillsSection.offsetTop;
    const scrollPosition = window.pageYOffset + window.innerHeight;
    
    if (scrollPosition > skillsPosition && !skillsAnimated) {
        animateSkills();
        skillsAnimated = true;
    }
});

// تأثير تغيير لون الخلفية للمشاريع عند التمرير فوقها
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 15px 35px rgba(237, 137, 54, 0.3)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
    });
});

// تأثير تحريك الأيقونات الاجتماعية
document.querySelectorAll('.social-links a').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.1)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// إضافة تأثير الجسيمات للخلفية (اختياري)
function createParticles() {
    const hero = document.querySelector('.hero');
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    particlesContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        pointer-events: none;
    `;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            animation: float ${Math.random() * 3 + 2}s infinite ease-in-out;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 2}s;
        `;
        particlesContainer.appendChild(particle);
    }
    
    hero.style.position = 'relative';
    hero.appendChild(particlesContainer);
}

// إضافة CSS للحركة
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 1; }
        50% { transform: translateY(-20px) rotate(180deg); opacity: 0.5; }
    }
`;
document.head.appendChild(style);

// تفعيل الجسيمات
document.addEventListener('DOMContentLoaded', createParticles);

// تحسين الأداء - تأخير تحميل الصور
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});


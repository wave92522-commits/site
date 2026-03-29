document.addEventListener('DOMContentLoaded', function() {
    let currentStep = 0; // Начинаем с нуля
    const totalSteps = 5;
    let generatedKey = "";
    let isAuthorized = false;

    // --- ФУНКЦИИ КЛЮЧЕЙ ---

    const getKeyBtn = document.getElementById('get-key-btn');
    const submitBtn = document.getElementById('submit-key-btn');
    const keyInput = document.getElementById('key-input');
    const statusText = document.getElementById('key-status');
    const steps = document.querySelectorAll('.step');

    // Функция генерации рандомного ключа
    function createKey() {
        const chars = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
        let str = "WAVE-";
        for (let i = 0; i < 10; i++) {
            str += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return str;
    }

    // Кнопка "Get Key"
    getKeyBtn.addEventListener('click', () => {
        if (currentStep < totalSteps) {
            // Анимация шагов
            steps[currentStep].classList.add('active');
            currentStep++;
            
            if (currentStep < totalSteps) {
                statusText.innerText = `Уровень ${currentStep + 1}/5: Пройдите проверку`;
                alert("Рекламное звено пройдено. Переходим к следующему...");
            } else {
                generatedKey = createKey();
                statusText.innerText = "Ключ успешно сгенерирован!";
                statusText.style.color = "#00f2fe";
                alert("Ваш ключ: " + generatedKey + "\nСкопируйте его в поле ввода.");
                keyInput.value = generatedKey; // Сразу подставляем для удобства теста
            }
        }
    });

    // Кнопка "Submit"
    submitBtn.addEventListener('click', () => {
        const val = keyInput.value.trim();
        const OWNER_KEY = "WAVE-OWNER-777";

        if (val === OWNER_KEY) {
            unlockSite("Owner (10 Hours)");
        } else if (val === generatedKey && generatedKey !== "") {
            unlockSite("User (5 Hours)");
        } else {
            keyInput.classList.add('shake');
            setTimeout(() => keyInput.classList.remove('shake'), 400);
            alert("Неверный или просроченный ключ!");
        }
    });

    function unlockSite(role) {
        isAuthorized = true;
        const overlay = document.getElementById('key-auth-overlay');
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.style.display = 'none';
            document.body.classList.remove('locked-mode');
            
            // Снимаем замки со всех вкладок
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('locked');
                const lock = item.querySelector('.lock-icon');
                if (lock) lock.remove();
            });

            alert("Доступ открыт: " + role);
        }, 500);
    }

    // --- НАВИГАЦИЯ ---
    const navItems = document.querySelectorAll('.nav-item, .mob-nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            const tabName = this.getAttribute('data-tab');
            
            // Если сайт закрыт и это не Home
            if (!isAuthorized && tabName !== 'home') {
                this.classList.add('shake');
                setTimeout(() => this.classList.remove('shake'), 400);
                return;
            }

            // Переключение вкладок
            document.querySelectorAll('.tab-content').forEach(section => {
                section.classList.remove('active');
            });
            
            const targetTab = document.getElementById('tab-' + tabName);
            if (targetTab) targetTab.classList.add('active');

            // Активная кнопка в меню
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
23:57
// --- КОПИРОВАНИЕ (Исправлено для кнопок на главной) ---
    const mainCopyBtn = document.getElementById('copy-btn');
    if (mainCopyBtn) {
        mainCopyBtn.addEventListener('click', () => {
            const code = 'loadstring(game:HttpGet("https://raw.githubusercontent.com/wave92522-commits/site/main/loader.lua"))()';
            navigator.clipboard.writeText(code).then(() => {
                const oldText = mainCopyBtn.innerHTML;
                mainCopyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
                setTimeout(() => mainCopyBtn.innerHTML = oldText, 2000);
            });
        });
    }
});

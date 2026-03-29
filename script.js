document.addEventListener('DOMContentLoaded', function() {
    let currentStep = 1;
    let generatedKey = "";
    let isAuthorized = false;

    const getKeyBtn = document.getElementById('get-key-btn');
    const submitBtn = document.getElementById('submit-key-btn');
    const keyInput = document.getElementById('key-input');
    const statusText = document.getElementById('key-status');
    const overlay = document.getElementById('key-auth-overlay');

    // ГЕНЕРАЦИЯ РАНДОМНОГО КЛЮЧА
    function generateKey() {
        const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
        let key = "WAVE-";
        for (let i = 0; i < 8; i++) {
            key += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return key;
    }

    // ЛОГИКА ШАГОВ (GET KEY)
    getKeyBtn.addEventListener('click', () => {
        if (currentStep < 5) {
            currentStep++;
            document.getElementById(`step-${currentStep}`).classList.add('active');
            statusText.innerText = `Уровень ${currentStep}/5: Проверка пройдена`;
            alert("Рекламное звено пройдено. Загрузка следующего уровня...");
        } else {
            generatedKey = generateKey();
            statusText.innerText = "Ключ готов! Скопируйте его ниже.";
            alert("ВАШ КЛЮЧ: " + generatedKey);
            keyInput.value = generatedKey; // Авто-подстановка для теста
        }
    });

    // ПРОВЕРКА КЛЮЧА (SUBMIT)
    submitBtn.addEventListener('click', () => {
        const inputVal = keyInput.value.trim();
        const OWNER_KEY = "WAVE-OWNER-777"; // ТВОЙ ПРЕМИУМ КЛЮЧ

        if (inputVal === OWNER_KEY) {
            unlockSite("Owner (Premium)");
        } else if (inputVal === generatedKey && generatedKey !== "") {
            unlockSite("User");
        } else {
            keyInput.classList.add('shake');
            setTimeout(() => keyInput.classList.remove('shake'), 400);
            alert("Ошибка: Неверный ключ или вы не прошли все уровни!");
        }
    });

    function unlockSite(role) {
        isAuthorized = true;
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.style.display = 'none';
            document.body.classList.remove('locked-mode');
            
            // Разблокировка вкладок
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('locked');
                const lock = item.querySelector('.lock-icon');
                if (lock) lock.remove();
            });
            alert("Доступ разрешен. Роль: " + role);
        }, 500);
    }

    // НАВИГАЦИЯ ПО ВКЛАДКАМ
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const tabName = this.getAttribute('data-tab');

            if (!isAuthorized && tabName !== 'home') {
                this.classList.add('shake');
                setTimeout(() => this.classList.remove('shake'), 400);
                return;
            }

            document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
            document.getElementById('tab-' + tabName).classList.add('active');
            
            navItems.forEach(n => n.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // EXECUTOR (CHECK SCRIPT)
    const runBtn = document.getElementById('run-script');
    if (runBtn) {
        runBtn.addEventListener('click', () => {
            const code = document.getElementById('lua-editor').value;
            const output = document.getElementById('console-output');
            const status = document.getElementById('exec-status');

            if (code.length < 5) {
                output.style.color = "#ff4a4a";
                output.innerText = "> Error: Script too short.";
                status.innerText = "Status: Error";
            } else {
00:01
output.style.color = "#00f2fe";
                output.innerText = "> Analyzing... \n> Script loaded. No syntax errors detected.";
                status.innerText = "Status: Ready to Inject";
            }
        });
    }

    // КОПИРОВАНИЕ
    const copyBtn = document.getElementById('copy-btn');
    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            const text = 'loadstring(game:HttpGet("https://raw.githubusercontent.com/wave92522-commits/site/main/loader.lua"))()';
            navigator.clipboard.writeText(text);
            copyBtn.innerText = "Copied!";
            setTimeout(() => copyBtn.innerText = "Copy Loader", 2000);
        });
    }
});

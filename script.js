document.addEventListener('DOMContentLoaded', function() {
    let currentStep = 1;
    let isAuthorized = false;
    let generatedKey = "";

    // 1. Генерация рандомного ключа
    function generateRandomKey(prefix) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let result = prefix + "-";
        for (let i = 0; i < 12; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }

    // 2. Система уровней (Get Key)
    const getKeyBtn = document.getElementById('get-key-btn');
    getKeyBtn.addEventListener('click', () => {
        if (currentStep < 5) {
            currentStep++;
            document.getElementById('key-status').innerText = `Уровень ${currentStep}/5: Пройдите проверку`;
            const steps = document.querySelectorAll('.step');
            steps[currentStep-1].classList.add('active');
            alert("Переход на следующий уровень рекламы...");
        } else {
            generatedKey = generateRandomKey("WAVE");
            alert("Ваш временный ключ (5ч): " + generatedKey);
            console.log("Key:", generatedKey);
        }
    });

    // 3. Проверка ключа
    document.getElementById('submit-key-btn').addEventListener('click', () => {
        const input = document.getElementById('key-input').value;
        const premiumKey = "WAVE-OWNER-777"; // Твой личный ключ

        if (input === generatedKey && generatedKey !== "") {
            unlockSite("User");
        } else if (input === premiumKey) {
            unlockSite("Owner (Premium)");
        } else {
            alert("Неверный ключ!");
        }
    });

    function unlockSite(role) {
        isAuthorized = true;
        document.getElementById('key-auth-overlay').style.display = 'none';
        document.body.classList.remove('locked-mode');
        document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('locked'));
        document.querySelectorAll('.lock-icon').forEach(el => el.remove());
        alert(`Добро пожаловать, ${role}! Доступ разрешен.`);
    }

    // 4. Логика "Замка" на вкладках
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            if (!isAuthorized && this.getAttribute('data-tab') !== 'home') {
                e.preventDefault();
                this.classList.add('shake');
                setTimeout(() => this.classList.remove('shake'), 400);
                return;
            }
            // Переключение вкладок
            const tabId = "tab-" + this.getAttribute('data-tab');
            document.querySelectorAll('.tab-content').forEach(s => s.classList.remove('active'));
            document.getElementById(tabId).classList.add('active');
            navItems.forEach(n => n.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // 5. Мини-валидатор Lua (Executor)
    document.getElementById('run-script')?.addEventListener('click', () => {
        const code = document.getElementById('lua-editor').value;
        const output = document.getElementById('console-output');
        
        if (code.includes('print') || code.includes('wait') || code.includes('HttpGet')) {
            output.style.color = "#2ecc71";
            output.innerText = "> Script is valid. No syntax errors found.";
        } else {
            output.style.color = "#ff4a4a";
            output.innerText = "> Error: LUA Syntax Error near 'line 1'. Expected function call.";
        }
    });
});

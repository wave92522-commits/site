document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. Настройки ---
    // ЗАМЕНИ НА СВОЮ реальную ссылку на Discord
    const DISCORD_INVITE_LINK = 'https://discord.gg/YOUR_INVITE'; 
    
    // Скрипт, который будет копироваться
    const SCRIPT_TO_COPY = 'loadstring(game:HttpGet("https://raw.githubusercontent.com/wave92522-commits/site/main/loader.lua"))()';


    // --- 2. Логика Копирования (ПК и Телефон) ---
    // Кнопка на ПК
    const copyBtn = document.getElementById('copy-btn');
    // Кнопка в мобильном меню
    const copyBtnMob = document.getElementById('copy-btn-mob');

    function handleCopy(btnElement) {
        navigator.clipboard.writeText(SCRIPT_TO_COPY).then(() => {
            
            // Если кнопка обычная текстовая
            if (btnElement.id === 'copy-btn') {
                const originalContent = btnElement.innerHTML;
                btnElement.innerHTML = '<i class="fas fa-check"></i> Copied!';
                btnElement.style.background = 'linear-gradient(135deg, #2ecc71, #27ae60)'; // Зеленый неон
                
                setTimeout(() => {
                    btnElement.innerHTML = originalContent;
                    btnElement.style.background = ''; // Возвращаем стили из CSS
                }, 2000);
            }
            
            // Если кнопка мобильная (круглая)
            if (btnElement.id === 'copy-btn-mob') {
                btnElement.innerHTML = '<i class="fas fa-check"></i>';
                btnElement.style.background = 'linear-gradient(135deg, #2ecc71, #27ae60)';
                
                setTimeout(() => {
                    btnElement.innerHTML = '<i class="fas fa-copy"></i>';
                    btnElement.style.background = '';
                }, 2000);
            }

        }).catch(err => {
            console.error('Copy failed:', err);
            alert('Could not copy automatically. See console.');
        });
    }

    if (copyBtn) copyBtn.addEventListener('click', () => handleCopy(copyBtn));
    if (copyBtnMob) copyBtnMob.addEventListener('click', (e) => {
        e.preventDefault(); // Запретить переход по ссылке #
        handleCopy(copyBtnMob);
    });


    // --- 3. Логика Discord ---
    const discordBtns = [
        document.getElementById('discord-btn-side'), // Боковая панель ПК
        document.getElementById('discord-btn-mob')   // Нижнее меню Телефон
    ];

    discordBtns.forEach(btn => {
        if (btn) {
            btn.addEventListener('click', (e) => {
                // Если в мобильном меню, предотвращаем действие ссылки
                if (btn.tagName === 'A') e.preventDefault(); 
                
                window.open(DISCORD_INVITE_LINK, '_blank');
            });
        }
    });
});

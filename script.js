document.addEventListener('DOMContentLoaded', function() {
    const copyBtn = document.getElementById('copy-btn');
    const discordBtns = [document.getElementById('discord-btn'), document.getElementById('discord-btn-side')];

    // Твой скрипт для копирования
    const scriptToCopy = 'loadstring(game:HttpGet("https://raw.githubusercontent.com/wave92522-commits/site/main/loader.lua"))()';

    // Функция копирования
    if (copyBtn) {
        copyBtn.addEventListener('click', function() {
            navigator.clipboard.writeText(scriptToCopy).then(() => {
                const originalText = copyBtn.innerText;
                copyBtn.innerText = 'Copied to Clipboard!';
                copyBtn.style.background = '#2ecc71';
                
                setTimeout(() => {
                    copyBtn.innerText = originalText;
                    copyBtn.style.background = '#00aaff';
                }, 2000);
            });
        });
    }

    // Обработка кнопок Discord
    const discordLink = 'https://discord.gg/YOUR_INVITE'; // ЗАМЕНИ НА СВОЮ
    discordBtns.forEach(btn => {
        if (btn) {
            btn.addEventListener('click', () => {
                window.open(discordLink, '_blank');
            });
        }
    });
});

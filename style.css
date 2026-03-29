/* --- Глобальные переменные цветов (Requested Palette) --- */
:root {
    --bg-base: #020406;
    --bg-panel: rgba(10, 15, 22, 0.7);
    --border-color: rgba(255, 255, 255, 0.06);
    
    --text-main: #e8e9eb;
    --text-dim: #9ea4b0;

    /* Неоновые цвета */
    --neon-blue: #00f2fe;      /* Ярко-голубой */
    --neon-cyan: #4facfe;      /* Церулеум */
    --neon-teal: #08f7da;      /* Бирюзовый */
    --neon-indigo: #4a6cf7;    /* Васильковый */
    
    --transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* --- Базовые стили --- */
* {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
}

body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    background-color: var(--bg-base);
    color: var(--text-main);
    overflow-x: hidden;
    height: 100vh;
}

/* --- Анимированный Неоновый Фон (Fluid & Beautiful) --- */
.neon-bg-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
    filter: blur(80px); /* Сильное размытие для нежности */
    opacity: 0.6;
}

.neon-blob {
    position: absolute;
    border-radius: 50%;
    opacity: 0.8;
    animation: neon-float 20s infinite alternate;
}

/* Определение цветов и начальных позиций пятен */
.blob-1 { width: 400px; height: 400px; background: var(--neon-blue); top: -100px; left: -100px; animation-duration: 25s; }
.blob-2 { width: 500px; height: 500px; background: var(--neon-indigo); bottom: -150px; right: -100px; animation-delay: -5s; }
.blob-3 { width: 300px; height: 300px; background: var(--neon-teal); top: 40%; left: 50%; animation-duration: 18s; animation-delay: -2s; }
.blob-4 { width: 350px; height: 350px; background: var(--neon-cyan); top: 10%; right: 20%; animation-delay: -8s; }
.blob-5 { width: 250px; height: 250px; background: var(--neon-blue); bottom: 30%; left: 10%; animation-duration: 22s; }

@keyframes neon-float {
    0% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(30px, 50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
    100% { transform: translate(0, 0) scale(1); }
}

/* --- Компоненты Dashboard (ПК и Общее) --- */
.dashboard-wrapper {
    display: flex;
    height: 100vh;
}

/* Фирменная иконка Волны */
.wave-logo, .wave-logo-mini {
    font-size: 24px;
    background: linear-gradient(135deg, var(--neon-blue), var(--neon-indigo));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 0 10px var(--neon-blue));
    animation: wave-pulse 2s infinite;
}

@keyframes wave-pulse {
    0%, 100% { opacity: 1; filter: drop-shadow(0 0 10px var(--neon-blue)); }
    50% { opacity: 0.8; filter: drop-shadow(0 0 5px var(--neon-blue)); }
}

.neon-text {
    background: linear-gradient(90deg, var(--neon-blue), var(--neon-teal));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 800;
}

/* Sidebar (Desktop Only) */
.sidebar {
    width: 280px;
    background-color: var(--bg-panel);
    border-right: 1px solid var(--border-color);
    backdrop-filter: blur(10px); /* Стеклянный эффект */
    display: flex;
    flex-direction: column;
    padding: 25px;
    z-index: 10;
}

.sidebar-header {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 50px;
}

.brand-text {
    display: flex;
    flex-direction: column;
}

.main-title { font-weight: 800; font-size: 20px; }
.sub-title { color: var(--text-dim); font-size: 12px; }

.sidebar-nav { flex-grow: 1; }

.nav-item {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 14px 18px;
    color: var(--text-dim);
    text-decoration: none;
    border-radius: 12px;
    transition: var(--transition);
    margin-bottom: 8px;
    font-weight: 600;
}

.nav-item:hover, .nav-item.active {
    background: rgba(255, 255, 255, 0.03);
    color: var(--text-main);
    border: 1px solid rgba(0, 242, 254, 0.1);
}
23:40
.nav-item.active i {
    color: var(--neon-blue);
    filter: drop-shadow(0 0 5px var(--neon-blue));
}

.discord-btn {
    width: 100%;
    padding: 14px;
    background: rgba(88, 101, 242, 0.1);
    border: 1px solid rgba(88, 101, 242, 0.2);
    border-radius: 12px;
    color: #8a93f8;
    cursor: pointer;
    font-weight: 700;
    transition: var(--transition);
}

.discord-btn:hover {
    background: rgba(88, 101, 242, 0.2);
    transform: translateY(-2px);
}

/* Main Content */
.main-content {
    flex-grow: 1;
    overflow-y: auto;
    padding: 40px;
    position: relative;
}

.content-inner {
    max-width: 1000px;
    margin: 0 auto;
}

.welcome-section h1 { font-size: 36px; font-weight: 800; margin-bottom: 10px; }
.welcome-section p { color: var(--text-dim); max-width: 600px; margin-bottom: 40px; }

/* Карточки */
.card {
    background-color: var(--bg-panel);
    backdrop-filter: blur(10px);
    border: 1px solid var(--border-color);
    border-radius: 16px;
    padding: 30px;
    transition: var(--transition);
    position: relative;
    overflow: hidden;
}

.card:hover {
    border-color: rgba(0, 242, 254, 0.2);
    transform: translateY(-3px);
}

/* Блок скрипта */
.script-box {
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.card-header {
    display: flex;
    align-items: center;
    gap: 12px;
    font-weight: 700;
    color: var(--text-dim);
}

.card-header i { color: var(--neon-cyan); }

.script-code-wrapper {
    background: #010101;
    padding: 15px;
    border-radius: 8px;
    border: 1px solid #1a1a1a;
    font-family: monospace;
    font-size: 14px;
    color: #4facfe;
    overflow-x: auto;
    white-space: nowrap;
}

/* Неоновая кнопка */
.action-btn-neon {
    width: 100%;
    padding: 16px;
    background: linear-gradient(135deg, var(--neon-blue), var(--neon-indigo));
    border: none;
    border-radius: 12px;
    color: white;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
    transition: var(--transition);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    box-shadow: 0 4px 15px rgba(0, 242, 254, 0.3);
}

.action-btn-neon:hover {
    box-shadow: 0 6px 20px rgba(0, 242, 254, 0.5);
    transform: scale(1.02);
}

.grid-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
}

.card-sm .card-icon {
    font-size: 28px;
    margin-bottom: 20px;
    color: var(--neon-teal);
}

.card-sm h3 { margin: 0 0 10px 0; font-weight: 700; }
.card-sm p { color: var(--text-dim); margin: 0; font-size: 14px; }

/* === ОПРЕДЕЛЕНИЕ АДАПТИВНОСТИ === */

/* Скрываем элементы по умолчанию */
.mobile-only { display: none; }

/* --- Медиа-запрос для МОБИЛЬНЫХ (Ширина экрана менее 768px) --- */
@media (max-width: 767px) {
    .desktop-only { display: none !important; }
    .mobile-only { display: block; }
    
    .dashboard-wrapper {
        flex-direction: column;
        height: 100vh;
        overflow: hidden;
    }
    
    .main-content {
        padding: 20px;
        padding-bottom: 0;
        overflow-y: auto;
    }
    
    /* Мобильный хедер */
    .mobile-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 0;
        margin-bottom: 25px;
    }
    
    .brand-text-mini {
        font-weight: 800;
        font-size: 18px;
    }
    
    .user-avatar-mini {
        font-size: 24px;
        color: var(--text-dim);
    }
    
    /* Навигация для телефона (Нижний бар) */
    .mobile-nav {
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 70px;
        background-color: rgba(10, 15, 22, 0.95);
        backdrop-filter: blur(15px);
        border-top: 1px solid var(--border-color);
        padding-bottom: env(safe-area-inset-bottom); /* Учет челки */
23:40
z-index: 100;
    }
    
    .mob-nav-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: var(--text-dim);
        text-decoration: none;
        font-size: 11px;
        font-weight: 600;
        gap: 5px;
    }
    
    .mob-nav-item.active {
        color: var(--neon-blue);
    }
    
    .mob-nav-item i {
        font-size: 20px;
    }
    
    /* Центральная кнопка Копирования */
    .mob-nav-item.center-item {
        position: relative;
        top: -15px;
        width: 60px;
        height: 60px;
        background: linear-gradient(135deg, var(--neon-blue), var(--neon-indigo));
        border-radius: 50%;
        color: white;
        justify-content: center;
        font-size: 24px;
        box-shadow: 0 4px 15px rgba(0, 242, 254, 0.4);
    }
    
    .mob-nav-item.center-item i {
        font-size: 24px;
    }
    
    /* Отступ снизу, чтобы контент не перекрывался меню */
    .mobile-spacer {
        height: 100px; 
    }
    
    .welcome-section h1 { font-size: 28px; }
}

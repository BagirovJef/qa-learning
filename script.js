document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    
    const cards = [
        {
            icon: '🔍',
            title: 'Функциональное',
            desc: 'Проверка соответствия функциональным требованиям'
        },
        {
            icon: '🔄',
            title: 'Регрессионное',
            desc: 'Контроль изменений после обновлений'
        },
        {
            icon: '⚡',
            title: 'Нагрузочное',
            desc: 'Тестирование под высокой нагрузкой'
        },
        {
            icon: '🎨',
            title: 'UI/UX',
            desc: 'Проверка интерфейса и удобства'
        },
        {
            icon: '🔌',
            title: 'API',
            desc: 'Тестирование взаимодействия компонентов'
        },
        {
            icon: '🧩',
            title: 'Модульное',
            desc: 'Проверка отдельных модулей кода'
        }
    ];
    
    app.innerHTML = cards.map(card => `
        <div class="card">
            <div class="card-icon">${card.icon}</div>
            <div class="card-title">${card.title}</div>
            <div class="card-desc">${card.desc}</div>
        </div>
    `).join('');
    
    console.log('QA Learning приложение запущено');
});

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    const modalClose = document.getElementById('modal-close');
    
    const cards = [
        {
            icon: '🔍',
            title: 'Функциональное',
            desc: 'Проверка соответствия функциональным требованиям',
            theory: {
                definition: 'Функциональное тестирование — это вид тестирования, который проверяет, что система работает в соответствии с функциональными требованиями.',
                goals: [
                    'Проверка основных функций приложения',
                    'Проверка обработки входных данных',
                    'Проверка выходных результатов',
                    'Проверка интеграции между компонентами'
                ],
                examples: 'Проверка формы входа: ввод логина/пароля, кнопка "Войти", восстановление пароля.'
            }
        },
        {
            icon: '🔄',
            title: 'Регрессионное',
            desc: 'Контроль изменений после обновлений',
            theory: {
                definition: 'Регрессионное тестирование — это повторное тестирование существующего функционала для убеждения, что новые изменения не сломали старую функциональность.',
                goals: [
                    'Обнаружение регрессии (ухудшения) после изменений',
                    'Проверка стабильности системы',
                    'Подтверждение корректности исправлений багов'
                ],
                examples: 'После добавления новой кнопки проверяем, что старые кнопки всё ещё работают.'
            }
        },
        {
            icon: '⚡',
            title: 'Нагрузочное',
            desc: 'Тестирование под высокой нагрузкой',
            theory: {
                definition: 'Нагрузочное тестирование — это проверка производительности системы под ожидаемой или пиковой нагрузкой.',
                goals: [
                    'Определение максимальной нагрузки',
                    'Проверка стабильности под нагрузкой',
                    'Выявление узких мест производительности'
                ],
                examples: 'Проверка работы сайта при 1000 одновременных пользователей.'
            }
        },
        {
            icon: '🎨',
            title: 'UI/UX',
            desc: 'Проверка интерфейса и удобства',
            theory: {
                definition: 'UI/UX тестирование — это проверка пользовательского интерфейса и удобства использования приложения.',
                goals: [
                    'Проверка соответствия дизайн-макетам',
                    'Оценка удобства навигации',
                    'Проверка доступности для разных пользователей',
                    'Тестирование на разных устройствах'
                ],
                examples: 'Проверка читаемости текста, размера кнопок, цветовой контрастности.'
            }
        },
        {
            icon: '🔌',
            title: 'API',
            desc: 'Тестирование взаимодействия компонентов',
            theory: {
                definition: 'API тестирование — это проверка программногольного интерфейса (API) на корректность работы, безопасность и производительность.',
                goals: [
                    'Проверка корректности запросов и ответов',
                    'Тестирование кодов состояния HTTP',
                    'Проверка обработки ошибок',
                    'Валидация структуры данных (JSON/XML)'
                ],
                examples: 'Проверка GET/POST запросов к серверу, проверка ответов 200 OK, 404 Not Found.'
            }
        },
        {
            icon: '🧩',
            title: 'Модульное',
            desc: 'Проверка отдельных модулей кода',
            theory: {
                definition: 'Модульное тестирование — это тестирование отдельных компонентов (модулей) кода изолированно от остальной системы.',
                goals: [
                    'Проверка корректности отдельных функций',
                    'Раннее обнаружение багов',
                    'Упрощение рефакторинга кода',
                    'Документирование поведения кода'
                ],
                examples: 'Тестирование функции сложения двух чисел, проверка сортировки массива.'
            }
        }
    ];
    
    // Рендер карточек
    app.innerHTML = cards.map((card, index) => `
        <div class="card" data-index="${index}">
            <div class="card-icon">${card.icon}</div>
            <div class="card-title">${card.title}</div>
            <div class="card-desc">${card.desc}</div>
        </div>
    `).join('');
    
    // Открытие модального окна
    app.addEventListener('click', (e) => {
        const card = e.target.closest('.card');
        if (!card) return;
        
        const index = card.dataset.index;
        const data = cards[index];
        
        modalBody.innerHTML = `
            <h2 class="modal-title">${data.icon} ${data.title}</h2>
            <div class="modal-section">
                <h3>📖 Определение</h3>
                <p>${data.theory.definition}</p>
            </div>
            <div class="modal-section">
                <h3>🎯 Цели</h3>
                <ul>
                    ${data.theory.goals.map(goal => `<li>${goal}</li>`).join('')}
                </ul>
            </div>
            <div class="modal-section">
                <h3>💡 Пример</h3>
                <p>${data.theory.examples}</p>
            </div>
        `;
        
        modal.classList.add('active');
    });
    
    // Закрытие модального окна
    modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
    
    console.log('QA Learning приложение запущено');
});

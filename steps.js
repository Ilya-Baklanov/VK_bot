module.exports = steps = {
    '': {
        question: `Ты глава космической фермы! 
        
        На ферму нападают котики-енотики 🐱‍🏍`,
        btns: [
            {msg: 'Сделать с ними селфи', next: 'Final_1'},
            {msg: 'Дать им вискас', next: 'Cat_1'},
            {msg: 'Испугаться и убижать', next: 'Final_2'}
        ]
    },
    'Cat_1': {
        question: `Котики благодарны и дали тебе корабль!
        Что будешь с ним делать?`,
        btns: [
            {msg: 'Сделать с ними селфи', next: 'Final_1'},
            {msg: 'Отдать в разборку', next: 'Final-3'}
        ]
    },
    'Final_1': {
        question: `Ты стал знаменит!`,
        btns: [
            {msg: 'Пройти игру еще раз', next: ''}
        ]
    },
    'Final_2': {
        question: `Все твои друзья расстроились и уехали с фермы
        
        тф проиграл ((найди все концовки) `,
        btns: [
            {msg: 'Пройти игру еще раз', next: ''}
        ]
    },
    'Final_3': {
        question: `ферма стала богаче, ты попал в CosmoForbes `,
        btns: [
            {msg: 'Пройти игру еще раз', next: ''}
        ]
    }
}
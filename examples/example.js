//--------------------------------------------------------------------------------------------------

const table = require('../src/app.table');

/*--------------------------------------------------------------------------------------------------
|
| -> Пример #1
|
|-------------------------------------------------------------------------------------------------*/

let log1 = table.row(
    [
        'Ошибка:',
        'Путь:'
    ]
);
console.log(log1.join(''));

/*--------------------------------------------------------------------------------------------------
|
| -> Пример #2
|
|-------------------------------------------------------------------------------------------------*/

let log2 = table.row(
    [
        'Ошибка:',
        'Путь:'
    ], {
        align:'right'
    }
);
console.log(log2.join(''));

/*--------------------------------------------------------------------------------------------------
|
| -> Пример #3
|
|-------------------------------------------------------------------------------------------------*/

let log3 = table.row(
    [
        'Ошибка:',
        'Путь:'
    ], {
        color:'black', align:'right'
    }
);
console.log(log3.join(''));


/*--------------------------------------------------------------------------------------------------
|
| -> Пример #4
|
|-------------------------------------------------------------------------------------------------*/

let log4 = table.rows([
    table.row(
        [
            'Ошибка:',
            'Путь:'
        ], {
            color:'red', align:'right', nobr:true
        }
    ),
    table.row(
        [
            '"obj.noInitMethod is not a function"',
            '"/home/examples/example.js"'
        ], {
            color:'black', align:'left', nobr:false
        }
    )
]);
console.log(log4.join(''));

/*--------------------------------------------------------------------------------------------------
|
| -> Пример #5
|
|-------------------------------------------------------------------------------------------------*/

let log5 = table([
    ['Ошибка:', '"obj.noInitMethod is not a function"'],
    ['Путь:', '"/home/examples/example.js"'],
    ['Примечание:', '"Какой-то текст."']
], {
    color: ['red', 'black'],
    align: ['right', 'left']
});
console.log(log5);

//--------------------------------------------------------------------------------------------------
## Что это?

**App.table** — это [npm-пакет](https://www.npmjs.com/package/app.table)
для построения таблиц в консоли.

## Пример #1

```js
const table = require('app.table');

let log = table.row(
    [
        'Ошибка:',
        'Путь:'
    ]
);
console.log(log.join(''));
```

Результат в консоли:

![](https://github.com/classtype/app.table/raw/master/examples/example1.png)


## Пример #2

```js
const table = require('app.table');

let log = table.row(
    [
        'Ошибка:',
        'Путь:'
    ], {
        align:'right'
    }
);
console.log(log.join(''));
```

Результат в консоли:

![](https://github.com/classtype/app.table/raw/master/examples/example2.png)


## Пример #3

```js
const table = require('app.table');

let log = table.row(
    [
        'Ошибка:',
        'Путь:'
    ], {
        color:'black', align:'right'
    }
);
console.log(log.join(''));
```

Результат в консоли:

![](https://github.com/classtype/app.table/raw/master/examples/example3.png)


## Пример #4

```js
const table = require('app.table');

let log = table.rows([
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
console.log(log.join(''));
```

Результат в консоли:

![](https://github.com/classtype/app.table/raw/master/examples/example4.png)


## Пример #5

```js
const table = require('app.table');

let log = table([
    ['Ошибка:', '"obj.noInitMethod is not a function"'],
    ['Путь:', '"/home/examples/example.js"'],
    ['Примечание:', '"Какой-то текст."']
], {
    color: ['red', 'black'],
    align: ['right', 'left']
});
console.log(log);
```

Результат в консоли:

![](https://github.com/classtype/app.table/raw/master/examples/example5.png)


## Установка

```
$ npm i app.table
```

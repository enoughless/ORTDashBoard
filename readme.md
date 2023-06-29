# Pivot JS

按条件将数据拆分成N组数据
for both browser and nodejs support

## 打包方法

```js
npm run build
```

## 引用

-   es6

```js
import Pivot from './dist/es/Pivot.js'
```

-   commonjs

```js
const Pivot = require('./dist/commonjs/Pivot.js')
```

## Example

```js
const people = [
  {
    country: 'China',
    gender: 'f',
    class: 1,
    name: '李晓露',
  },
  {
    country: 'China',
    gender: 'f',
    class: 1,
    name: '李晓雪',
  },
  {
    country: 'China',
    gender: 'f',
    class: 2,
    name: '李晓洁',
  },
  {
    country: 'China',
    gender: 'f',
    class: 2,
    name: '李晓玉',
  },
  {
    country: 'China',
    gender: 'm',
    class: 1,
    name: '陈晓光',
  },
  {
    country: 'China',
    gender: 'm',
    class: 1,
    name: '陈晓强',
  },
  {
    country: 'China',
    gender: 'm',
    class: 2,
    name: '陈晓明',
  },
  {
    country: 'China',
    gender: 'm',
    class: 2,
    name: '陈晓东',
  },

  {
    country: 'Russia',
    gender: 'f',
    class: 1,
    name: '娜塔莎',
  },
  {
    country: 'Russia',
    gender: 'f',
    class: 1,
    name: '热丽萨',
  },
  {
    country: 'Russia',
    gender: 'm',
    class: 1,
    name: '柴可夫斯基',
  },
  {
    country: 'Russia',
    gender: 'm',
    class: 1,
    name: '陀思妥耶夫斯基',
  },

  {
    country: 'Russia',
    gender: 'f',
    class: 2,
    name: '娜塔莎2',
  },
  {
    country: 'Russia',
    gender: 'f',
    class: 2,
    name: '热丽萨2',
  },
  {
    country: 'Russia',
    gender: 'm',
    class: 2,
    name: '柴可夫斯基2',
  },
  {
    country: 'Russia',
    gender: 'm',
    class: 2,
    name: '陀思妥耶夫斯基2',
  },
]

const condition = ['country', 'gender', 'class']

const pivot = new Pivot(people, condition)
const pivoted = pivot.pivot()
console.log(pivoted)

```

## 结果

```js
[
  {
    condition: { country: 'China', gender: 'f', class: 1 },
    data: [
      { country: 'China', gender: 'f', class: 1, name: '李晓露' },
      { country: 'China', gender: 'f', class: 1, name: '李晓雪' }
    ]
  },
  {
    condition: { country: 'China', gender: 'f', class: 2 },
    data: [
      { country: 'China', gender: 'f', class: 2, name: '李晓洁' },
      { country: 'China', gender: 'f', class: 2, name: '李晓玉' }
    ]
  },
  {
    condition: { country: 'China', gender: 'm', class: 1 },
    data: [
      { country: 'China', gender: 'm', class: 1, name: '陈晓光' },
      { country: 'China', gender: 'm', class: 1, name: '陈晓强' }
    ]
  },
  {
    condition: { country: 'China', gender: 'm', class: 2 },
    data: [
      { country: 'China', gender: 'm', class: 2, name: '陈晓明' },
      { country: 'China', gender: 'm', class: 2, name: '陈晓东' }
    ]
  },
  {
    condition: { country: 'Russia', gender: 'f', class: 1 },
    data: [
      { country: 'Russia', gender: 'f', class: 1, name: '娜塔莎' },
      { country: 'Russia', gender: 'f', class: 1, name: '热丽萨' }
    ]
  },
  {
    condition: { country: 'Russia', gender: 'f', class: 2 },
    data: [
      { country: 'Russia', gender: 'f', class: 2, name: '娜塔莎2' },
      { country: 'Russia', gender: 'f', class: 2, name: '热丽萨2' }
    ]
  },
  {
    condition: { country: 'Russia', gender: 'm', class: 1 },
    data: [
      { country: 'Russia', gender: 'm', class: 1, name: '柴可夫斯基' },
      { country: 'Russia', gender: 'm', class: 1, name: '陀思妥耶夫斯基' }
    ]
  },
  {
    condition: { country: 'Russia', gender: 'm', class: 2 },
    data: [
      { country: 'Russia', gender: 'm', class: 2, name: '柴可夫斯基2' },
      { country: 'Russia', gender: 'm', class: 2, name: '陀思妥耶夫斯基2' }
    ]
  }
]

```

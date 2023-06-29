import util from 'util'
// import Pivot from './dist/es/Pivot.min.js'
import Pivot from './src/Pivot.js'

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

const option = { showHidden: false, depth: null, colors: true }
console.log(util.inspect(pivoted, option))

// console.log(
//   util.inspect(
//     [
//       {
//         country: "China",
//         gender: "f",
//         data: [{ name: "李晓露" }, { name: "李晓露" }],
//       },
//       {
//         country: "China",
//         gender: "m",
//         data: [{ name: "陈晓明" }, { name: "陈晓东" }],
//       },
//     ],
//     option
//   )
// )

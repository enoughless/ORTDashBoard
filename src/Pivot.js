import kindOf from 'kind-of'
import {
  uniq,
  map,
  prop,
  zipWith,
  zipObj,
  propEq,
  filter,
  allPass,
} from 'ramda'
import cartesian from './cartesian.js'

class Pivot {
  constructor(source, condition) {
    this.source = source
    this.condition = condition
  }
  pivot() {
    const source = this.source
    const condition = this.condition
    if (!source || !condition || !source.length || !condition.length) {
      console.error('Invalid arguments')
      return
    }
    if (kindOf(source) !== 'array') {
      console.error('"source" must be array type')
      return
    }
    if (kindOf(condition) !== 'array') {
      console.error('"condition" must be array type')
      return
    }
    const result = []

    const allKeys = []
    const allValues = []
    for (const cond of condition) {
      const values = uniq(map(prop(cond), source))
      allKeys.push(cond)

      allValues.push(values)
    }
    const cartesians = cartesian(...allValues)

    const conditionExpressions = []

    cartesians.forEach((cartesian) => {
      let right = cartesian
      if (kindOf(cartesian) !== 'array') {
        right = [cartesian]
      }
      const expression = zipWith(
        (x, y) => {
          return propEq(x, y)
        },
        allKeys,
        right
      )
      const condition = zipObj(allKeys, right)

      conditionExpressions.push({ condition, expression })
    })

    for (const ce of conditionExpressions) {
      const data = filter(allPass(ce.expression), source)
      result.push({ condition: ce.condition, data })
    }
    return result
  }
}

export { Pivot as default }

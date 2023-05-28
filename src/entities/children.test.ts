import { expect, describe,it } from 'vitest'
import { Children } from './children'

describe('Children Create', () => {
  const children = new Children({
    name: 'Menino Infante',
    birthDate: new Date(),
  })

  it('should possible to create a children', () => {
    expect(children).toBeInstanceOf(Children)
  })
})

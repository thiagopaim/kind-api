import { describe, expect, it } from 'vitest'
import { calculateAge } from './calculateAge'

describe('calculate age', () => {
  it('should return 40', () => {
    const birthDate = new Date('1982-07-17')
    const age = calculateAge(birthDate)
    const expectedAge = new Date().getFullYear() - 1983

    expect(age).toEqual(expectedAge)
  })

  it('should return 2', () => {
    const birthDate = new Date('2020-07-18')
    const age = calculateAge(birthDate)
    const expectedAge = new Date().getFullYear() - 2021

    console.log(expectedAge)

    expect(age).toEqual(expectedAge)
  })
})

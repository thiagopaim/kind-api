import { describe, expect, it } from 'vitest'
import { ageValidator } from './ageValidator'

describe('Age validator', () => {
  it('should be true if age is equal to minimum age', () => {
    const birthDate = new Date('2000-12-12')
    const isValid = ageValidator(birthDate)

    expect(isValid).toBe(true)
  })

  it('should be false if age is less than minimum age', () => {
    const birthDate = new Date('2020-12-12')
    const isValid = ageValidator(birthDate)

    expect(isValid).toBe(false)
  })
})

import { expect, describe,it } from 'vitest'
import { Professional } from './professional'

describe('Professional Create', () => {
  const professional = new Professional({
    name: 'Olá Enfermeira',
    address: 'Rua das Acácias',
    zipCode: '12630000',
    birthDate: new Date(),
  })

  it('should possible to create a professional', () => {
    expect(professional).toBeInstanceOf(Professional)
  })
})

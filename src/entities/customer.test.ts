import { expect, describe,it } from 'vitest'
import { Customer } from './customer'

describe('Customer Create', () => {
  const customer = new Customer({
    name: 'Simbora Vila Velha',
    address: 'Rua das Acácias',
    zipCode: '12630000',
    birthDate: new Date(),
  })

  it('should possible to create a customer', () => {
    expect(customer).toBeInstanceOf(Customer)
  })
})

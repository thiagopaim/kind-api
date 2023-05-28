import { expect, describe,it } from 'vitest'
import { Appointment } from './appointment'

describe('Appointment Create', () => {
  const startDate = new Date()
  const endDate = new Date()
  endDate.setDate(endDate.getDate() + 1)

  const appointment = new Appointment({
    professional: 'Ali Baba',
    customer: 'Papai Papudo',
    startDate,
    endDate,
  })

  it('should possible to create an appointment', () => {
    expect(appointment).toBeInstanceOf(Appointment)
  })

  it('should have a customer with name "Papai Papudo"', () => {
    expect(appointment.customer).toEqual('Papai Papudo')
  })
})

describe('Appointment Date Check', () => {
  const startDate = new Date()
  const endDate = new Date()

  it('should throw an erro because the end date is before of the start date', () => {
    expect(() => {
      return new Appointment({
        professional: 'Grande Mestre',
        customer: 'Papai Papudo',
        startDate,
        endDate,
      })
    }).toThrow()
  })
})

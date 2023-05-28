import { describe, expect, it } from 'vitest'
import { Appointment } from '../entities/appointment'
import { CreateAppointment } from './createAppointment'

describe('Create Appointment Service', () => {
  it('should be able to create an appointment', () => {
    const createAppointment = new CreateAppointment()

    const startDate = new Date()
    const endDate = new Date()
    endDate.setDate(endDate.getDate() + 1)

    const appointment = createAppointment.execute({
      professional: 'Loucademia de Polícia',
      customer: 'Papai Paim Pimpão',
      startDate,
      endDate,
    })

    expect(appointment).resolves.toBeInstanceOf(Appointment)
  })
})

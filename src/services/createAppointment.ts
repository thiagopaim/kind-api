import { Appointment, AppointmentProps } from '../entities/appointment'

type CreateAppointmentRequest = AppointmentProps
type CreateAppointmentResponse = Appointment

export class CreateAppointment {
  async execute(request: CreateAppointmentRequest): Promise<CreateAppointmentResponse> {
    const { professional, customer, startDate, endDate } = request
    const appointment = new Appointment({ professional, customer, startDate, endDate })

    return appointment
  }
}

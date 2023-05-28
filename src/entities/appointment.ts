export interface AppointmentProps {
  professional: string
  customer: string
  startDate: Date
  endDate: Date
}

export class Appointment {
  private props: AppointmentProps

  get professional() {
    return this.props.professional
  }

  get customer() {
    return this.props.customer
  }

  get startDate() {
    return this.props.startDate
  }

  get endDate() {
    return this.props.endDate
  }

  constructor (props: AppointmentProps) {
    const { startDate, endDate } = props

    if (endDate <= startDate) throw new Error('Invalid end date')

    this.props = props
  }
}

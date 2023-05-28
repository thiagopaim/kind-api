export interface ProfessionalProps {
  name: string
  address: string
  zipCode: string
  birthDate: Date
}

export class Professional {
  private props: ProfessionalProps

  get name() {
    return this.props.name
  }

  get address() {
    return this.props.address
  }

  constructor (props: ProfessionalProps) {
    this.props = props
  }
}

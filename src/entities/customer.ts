export interface CustomerProps {
  name: string
  address: string
  zipCode: string
  birthDate: Date
}

export class Customer {
  private props: CustomerProps

  get name() {
    return this.props.name
  }

  get address() {
    return this.props.address
  }

  constructor (props: CustomerProps) {
    this.props = props
  }
}

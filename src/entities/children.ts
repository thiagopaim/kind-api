export interface ChildrenProps {
  name: string
  birthDate: Date
}

export class Children {
  private props: ChildrenProps

  get name() {
    return this.props.name
  }

  constructor (props: ChildrenProps) {
    this.props = props
  }
}

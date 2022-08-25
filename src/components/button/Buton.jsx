import { Button } from './styled'

const ButtonDefault = (props) => {
  return (
    <Button onClick= {props.onClick}>
      {props.title}
    </Button>
  )
}

export default ButtonDefault
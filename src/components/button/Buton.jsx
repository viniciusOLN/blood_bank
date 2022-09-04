import { Button } from './styled'

const ButtonDefault = (props) => {
  return (
    <Button onClick= {props.onClick} theme={props.theme}>
      {props.title}
    </Button>
  )
}

export default ButtonDefault
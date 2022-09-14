import {DivSection, Title, DivForm, DivContent, Form} from './styled'
import contactImage from '../../assets/images/contactImage.svg'
import FormContact from '../formContact/FormContact'

function Contact(){
  return (
    <DivSection>
      <Title>Algum problema? Entre em contato</Title>
      <DivForm>
      <img src={contactImage} />
        <Form>
          <FormContact/>
        </Form>
      </DivForm>
    </DivSection>
  )
}

export default Contact
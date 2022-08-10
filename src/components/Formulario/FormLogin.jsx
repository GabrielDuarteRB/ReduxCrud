import { useState } from "react"
import { CardForm, FieldForm, PasswordFieldTexts, SmallText, SubTitle, Title, Window } from "./Form.module"
import { FaEye } from "react-icons/fa";
import Logo from "../Logo/Logo";
import { Button } from "../Button/Button";

const FormLogin = ({formik}) => {

  const [type, setType] = useState('password')

  const viewPassword = () => {
      if (type === 'password') {
      setType('text')
      return
      }
      setType('password')
  }
    
  return (
    <Window>
        <CardForm>
            <Logo
                font={'40px'}
                radius={'25%'}
            />
            <SubTitle>DashBoard Kit</SubTitle>
            <Title>Log In to Dashboard Kit</Title>
            <SmallText>Enter your email and password below</SmallText>

            <form onSubmit={formik.handleSubmit}>
                <FieldForm>
                    <div>
                        <label htmlFor="login">Login</label>
                    </div>
                    <input
                        id="login"
                        name="login"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.login}
                        placeholder='Email address'
                    />
                </FieldForm>

                <FieldForm>
                    <PasswordFieldTexts>
                        <label htmlFor="senha">Senha</label>
                        <SmallText small>Forgot Password</SmallText>
                    </PasswordFieldTexts>
                    <input
                        id="senha"
                        name="senha"
                        type={type}
                        onChange={formik.handleChange}
                        value={formik.values.senha}
                        placeholder='Password'
                    />
                    <SmallText small><FaEye onClick={viewPassword}/></SmallText>
                </FieldForm>
                <Button
                    height='48px'
                    width='100%'
                    backgroundColor='#3751FF'
                    borderRadius='8px'
                    type='submit'
                >
                    Log In
                </Button>
            </form>
        </CardForm>
    </Window>
  )
}
export default FormLogin
import { Formik } from "formik"
import { connect } from "react-redux"
import { useNavigate } from "react-router-dom"
import { handleCreatePerson, handleUpdatePerson } from "../../store/actions/PeopleActions"
import { Button } from "../Button/Button"
import { CardForm, FieldForm, Title, Window } from "./Form.module"
// import MaskedInput from "react-text-mask";

const FormularioPeople = ({person, loading, isUpdate, dispacth}) => {

  const navigate = useNavigate()

  if(loading) {
    return (
        <div>Loading</div>
    )
  }

  return (
    <Window>
        <CardForm>

            <Title>{isUpdate ? 'ATUALIZAR PESSOA' : 'CADASTRAR PESSOA'}</Title>

            <Formik
            initialValues={{
                nome: person ? person.nome : '',
                dataNascimento: person ? person.dataNascimento : '',
                cpf: person ? person.cpf : '',
                email: person ? person.email : '',
            }}
            onSubmit={(values) => {
                isUpdate ? handleUpdatePerson(values, person.idPessoa, navigate) 
                : handleCreatePerson(values, navigate)
            }}
            >
                {
                    props => (
                        <form onSubmit={props.handleSubmit}>
                            <FieldForm>
                                <div>
                                    <label htmlFor="nome">Nome</label>
                                </div>
                                <input
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    value={props.values.nome}
                                    name='nome'
                                />
                            </FieldForm>

                            <FieldForm>
                                <div>
                                    <label htmlFor="dataNascimento">Data</label>
                                </div>
                                <input
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    value={props.values.dataNascimento}
                                    name='dataNascimento'
                                />
                            </FieldForm>

                            <FieldForm>
                                <div>
                                    <label htmlFor="cpf">CPF</label>
                                </div>
                                <input
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    value={props.values.cpf}
                                    name='cpf'
                                />
                            </FieldForm>

                            <FieldForm>
                                <div>
                                    <label htmlFor="email">Email</label>
                                </div>
                                <input
                                    type='email'
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    value={props.values.email}
                                    name='email'
                                />
                            </FieldForm>

                            <Button backgroundColor='green' height='35px' width='100%' type="submit">{isUpdate ? 'Atualizar' : 'Criar'}</Button>
                        </form>
                    )
                }
            </Formik>
        </CardForm>
    </Window>
    
  )
}

const mapStateToProps = state => ({
    person: state.peopleReducer.person,
    loading: state.peopleReducer.loading,
    isUpdate: state.peopleReducer.isUpdate
})

export default connect(mapStateToProps)(FormularioPeople)
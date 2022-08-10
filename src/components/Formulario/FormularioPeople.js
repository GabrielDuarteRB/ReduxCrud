import { Formik } from "formik"
import { connect } from "react-redux"
import { useNavigate } from "react-router-dom"
import MaskedInput from "react-text-mask";
import moment from "moment"
import { handleCreatePerson, handleUpdatePerson } from "../../store/actions/PeopleActions"
import { Button } from "../Button/Button"
import { CardForm, FieldForm, Title, Window } from "./Form.module"
import {maskCPF, maskData} from '../../utils/masked'

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
                    dataNascimento: person ? moment(person.dataNascimento, 'YYYY-MM-DD').format('DD/MM/YYYY') : '',
                    cpf: person ? person.cpf : '',
                    email: person ? person.email : '',
                }}
                onSubmit={(values) => {
                    const newValues = {
                        nome: values.nome,
                        cpf: values.cpf.replaceAll('.', '').replace('-', ''),
                        dataNascimento: moment(values.dataNascimento, 'DD/MM/YYYY').format('YYYY-MM-DD'),
                        email: values.email
                    }

                    isUpdate ? handleUpdatePerson(newValues, person.idPessoa, navigate) 
                    : handleCreatePerson(newValues, navigate)
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
                                <MaskedInput
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    value={props.values.dataNascimento}
                                    name='dataNascimento'
                                    mask={maskData}
                                />
                            </FieldForm>

                            <FieldForm>
                                <div>
                                    <label htmlFor="cpf">CPF</label>
                                </div>
                                <MaskedInput
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    value={props.values.cpf}
                                    name='cpf'
                                    mask={maskCPF}
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
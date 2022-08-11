import { Formik } from "formik"
import { connect } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import MaskedInput from "react-text-mask"
import { createContact, updateContact } from "../../store/actions/ContactAction"
import { maskNumero } from "../../utils/masked"
import { Button } from "../Button/Button"
import { CardForm, FieldForm, Title, Window } from "./Form.module"

const FormContact = ({dispatch, contact, contactToUpdate, update}) => {

  const {idPessoa, idContato} = useParams()
  const navigate = useNavigate()
    
  return (
    <Window>
        <CardForm>
            <Title>{update ? 'Atualizar Contato' : 'Cadastrar Contato'}</Title>
            <Formik
                initialValues={{
                    idPessoa: idPessoa,
                    tipoContato: contactToUpdate ? contactToUpdate.tipoContato : '' ,
                    telefone: contactToUpdate ? contactToUpdate.telefone : '',
                    descricao: contactToUpdate ? contactToUpdate.descricao : '',
                }}
                onSubmit={ values => {
                    update ?
                        updateContact(dispatch, idPessoa, idContato, navigate, values)
                    :
                        createContact(dispatch, idPessoa, navigate, values)
                }}
            >
                {
                    props => (
                        <form onSubmit={props.handleSubmit}>
                            <FieldForm>
                                <div>
                                    <label htmlFor="tipoContato">Tipo*</label>
                                </div>
                                <select
                                    name="tipoContato"
                                    id="tipoContato"
                                    type="text"
                                    onChange={props.handleChange}
                                    value={props.values.tipoContato}
                                >
                                    <option value=""></option>
                                    <option value="RESIDENCIAL">RESIDENCIAL</option>
                                    <option value="COMERCIAL">COMERCIAL</option>
                                </select>
                            </FieldForm>

                            <FieldForm>
                                <div>
                                    <label htmlFor="telefone">Telefone*</label>
                                </div>
                                <MaskedInput
                                    name="telefone"
                                    id='telefone'
                                    mask={maskNumero}
                                    onChange={props.handleChange}
                                    value={props.values.telefone}
                                    type='text'
                                    placeholder="telefone"
                                />
                            </FieldForm>
                            
                            <FieldForm>
                                <div>
                                    <label htmlFor="descricao">Descrição</label>
                                </div>
                                <textarea
                                    name="descricao"
                                    id='descricao'
                                    mask={maskNumero}
                                    onChange={props.handleChange}
                                    value={props.values.descricao}
                                    type='text'
                                />
                            </FieldForm>

                            <Button
                                backgroundColor='green'
                                width='100%'
                            >
                                {update ? 'Atualizar Contato' : 'Cadastrar Contato'}
                            </Button>
                        </form>
                    )
                }
            </Formik>
        </CardForm>
    </Window>
  )
}

const mapStateToProps = state => ({
    contact: state.contactReducer.contact,
    contactToUpdate: state.contactReducer.contactToUpdate,
    update: state.contactReducer.update,
})

export default connect(mapStateToProps)(FormContact)

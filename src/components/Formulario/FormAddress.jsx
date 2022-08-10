import { Formik } from "formik"
import { CardForm, FieldForm, Title, Window } from "./Form.module"
import MaskedInput from "react-text-mask";
import { maskCEP } from "../../utils/masked";
import { validationCEP } from "../../utils/validationsForm";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../Button/Button";
import { connect } from "react-redux";
import { createAddress, updateAddress } from "../../store/actions/AddressAction";

const FormAddress = ({dispatch, addressToUpdate, isUpdate, idAddress}) => {

  const {idPessoa} = useParams()  
  const navigate = useNavigate()

  return (
    <Window>
        <CardForm>
            <Title>{isUpdate ? 'Atualizar Endereço' : 'Criar Endereço'}</Title>
            <Formik
                initialValues={{
                    cep: addressToUpdate.cep ? addressToUpdate.cep : '',
                    tipo: addressToUpdate.tipo ? addressToUpdate.tipo : '',
                    logradouro: addressToUpdate.logradouro ? addressToUpdate.logradouro : '',
                    numero: addressToUpdate.numero ? addressToUpdate.numero : '',
                    complemento: addressToUpdate.complemento ? addressToUpdate.complemento : '',
                    cidade: addressToUpdate.cidade ? addressToUpdate.cidade : '',
                    estado: addressToUpdate.estado ? addressToUpdate.estado : '',
                    pais: addressToUpdate.pais ? addressToUpdate.pais : ''
                }}
                onSubmit={ values => { 
                    const newValues = {
                        idPessoa: idPessoa,
                        tipo: values.tipo.toUpperCase(),
                        logradouro: values.logradouro,
                        numero: values.numero,
                        complemento: values.complemento,
                        cep: values.cep.replace('-', ''),
                        cidade: values.cidade,
                        estado: values.estado,
                        pais: values.pais
                    }
                    isUpdate ?
                    updateAddress(dispatch, idPessoa, idAddress, newValues, navigate)
                    : 
                    createAddress(dispatch, idPessoa, newValues, navigate)
                }}
            >
                {
                    props => (
                        <form onSubmit={props.handleSubmit}>
                            <FieldForm>
                                <div>
                                    <label htmlFor='cep'>CEP*</label>
                                </div>
                                <MaskedInput
                                    name="cep"
                                    id='cep'
                                    mask={maskCEP}
                                    onBlur={(event) => validationCEP(event, props)}
                                    onChange={props.handleChange}
                                    value={props.values.cep}
                                    type='text'
                                    placeholder="CEP"
                                />
                            </FieldForm>
                            <FieldForm>
                                <div>
                                    <label htmlFor='tipo'>tipo*</label>
                                </div>
                                <select
                                name="tipo"
                                id="tipo"
                                type="text"
                                onChange={props.handleChange}
                                value={props.values.tipo}
                                >
                                    <option value=""></option>
                                    <option value="RESIDENCIAL">RESIDENCIAL</option>
                                    <option value="COMERCIAL">COMERCIAL</option>
                                </select>
                            </FieldForm>

                            <FieldForm>
                                <div>
                                    <label htmlFor='logradouro'>logradouro*</label>
                                </div>
                                <input
                                name="logradouro"
                                id="logradouro"
                                type="text"
                                onChange={props.handleChange}
                                value={props.values.logradouro}
                                placeholder="Logradouro"
                                />
                            </FieldForm>

                            <FieldForm>
                                <div>
                                    <label htmlFor='numero'>Número*</label>
                                </div>
                                <input
                                id="numero"
                                name="numero"
                                type="number"
                                onChange={props.handleChange}
                                value={props.values.numero}
                                placeholder="Número"
                                />
                            </FieldForm>

                            <FieldForm>
                                <div>
                                    <label htmlFor='complemento'>complemento*</label>
                                </div>
                                <input
                                id="complemento"
                                name="complemento"
                                type="text"
                                onChange={props.handleChange}
                                value={props.values.complemento}
                                placeholder="Complemento"
                                />
                            </FieldForm>
                            
                            <FieldForm>
                                <div>
                                    <label htmlFor='cidade'>cidade*</label>
                                </div>
                                <input
                                id="cidade"
                                name="cidade"
                                type="text"
                                onChange={props.handleChange}
                                value={props.values.cidade}
                                placeholder="cidade"
                                />
                            </FieldForm>

                            <FieldForm>
                                <div>
                                    <label htmlFor='estado'>estado*</label>
                                </div>
                                <input
                                id="estado"
                                name="estado"
                                type="text"
                                onChange={props.handleChange}
                                value={props.values.estado}
                                placeholder="estado"
                                />
                            </FieldForm>

                            <FieldForm>
                                <div>
                                    <label htmlFor='pais'>país*</label>
                                </div>
                                <input
                                id="pais"
                                name="pais"
                                type="text"
                                onChange={props.handleChange}
                                value={props.values.pais}
                                placeholder="país"
                                />
                            </FieldForm>

                            <Button
                                type="submit"
                                backgroundColor='green'
                                width='100%'
                            >
                                {isUpdate ? 'Atualizar pessoa' : 'Cadastrar pessoa'}
                            </Button>

                        </form>
                    )}
            </Formik>
        </CardForm>
    </Window>
  )
}

const mapStateToProps = (state) => ({
    address: state.addressReducer.address,
    addressToUpdate: state.addressReducer.addressToUpdate,
    isUpdate: state.addressReducer.isUpdate,
    idAddress: state.addressReducer.idAddress,
})

export default connect(mapStateToProps)(FormAddress)

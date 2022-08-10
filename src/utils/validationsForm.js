import * as Yup from 'yup';
import {cpf} from 'cpf-cnpj-validator'
import moment from 'moment';
import { apiCep } from '../api';

export const ValidationPerson = Yup.object().shape({
    nome: Yup.string()
      .min(2, 'Nome muito curto!')
      .max(50, 'Nome muito longo!')
      .required('Nome obrigatorio!'),
    cpf: Yup.string()
    .test('CPFValidation', 'Cpf inválida',(value) => cpf.isValid(value))
    .required('Cpf obrigatório'),
    email: Yup.string()
      .email('Email inválido!')
      .required('Email obrigatório!'),
    dataNascimento: Yup.string()
    .test('DateValidation', 'Data inválida', (value) => moment(value).isValid())
    .required('Data obrigatória'),
})

export const ValidationSignup = Yup.object().shape({
    login: Yup.string()
      .min(2, 'Nome muito curto!')
      .max(50, 'Nome muito longo!')
      .required('Nome obrigatório!'),
    senha: Yup.string()
      .min(2, 'Senha muito curta!')
      .max(50, 'Senha muito longa!')
      .required('Senha obrigatoria!'),
})

export const ValidationAddress = Yup.object().shape({
    cep: Yup.string()
      .min(7, 'Too Short!')
      .max(8, 'Too Long!')
      .required('Required'),
    logradouro: Yup.string().min(2, 'Too Short!').required('Required'),
    complemento: Yup.string().min(2, 'Too Short!'),
    bairro: Yup.string().min(2, 'Too Short!').required('Required'),
    localidade: Yup.string().min(2, 'Too Short!').required('Required'),
    uf: Yup.string().min(2, 'Too Short!').required('Required'),
})

export const ValidationContact = Yup.object().shape({
  tipoContato: Yup.string().required('Tipo obrigatório'),
  telefone: Yup.string().min('14', 'Telefone inválido').required('telefone obrigatório'),
})

export const validationCEP = async (event,props) => {
  const cep = event.target.value?.replace(/[^0-9]/g, '')

  if(cep.length !== 8){
    console.log('cep muito pequeno')
    return
  }

  try {
    const {data} = await apiCep.get(`/${cep}/json/`)
    props.setFieldValue('logradouro',data.logradouro)
    props.setFieldValue('numero', data.numero)
    props.setFieldValue('complemento', data.complemento)
    props.setFieldValue('estado',data.localidade)
    props.setFieldValue('cidade', data.uf)   
  } catch (error) {
    console.log(error)
  }
}
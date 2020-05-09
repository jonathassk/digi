import React from 'react'
import Estados from '../../utils/estados'
import TextInput from '../../Components/textInput'
import { withTypes, Form, Field } from 'react-final-form'
import { useForm, useField } from 'react-final-form-hooks'
import Values from '../../Interfaces/values'


let errors : {
  nome: boolean,
  CEP: boolean,
  rua: boolean,
  numero: boolean,
  bairro: boolean,
  cidade: boolean,
  estado: boolean,
}

const onSubmit = async (values: Values) => {
  console.log(values)
}

const validate = async (values: Values) => {
  console.log('values')
  
}


const FormPage = () => {
  const { form, handleSubmit, values, pristine, submitting } = useForm({
    onSubmit
  })
  const nome: any = useField('nome', form)

  return (
    <form onSubmit={handleSubmit}>
      <label>Nome</label>
      <input {...nome.input}/>
      <button type='submit' disabled={pristine}>submit</button>
    </form>        
  )
}

export default FormPage
import React from 'react'
import Estados from '../../utils/estados'
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
  let valResult: boolean = validate(values)
  if(!valResult){

  }
  console.log(valResult)
}

function validate (values: Values) {
  if(!values.nome || !values.rua || !values.numero || !values.bairro || !values.cidade){
    return false
  }
  if(values.CEP){
    if(values.CEP.toString().length !== 8){
      return false
    }
  } else {
    return false
  }
  
  return true
}


const FormPage = () => {
  const { form, handleSubmit, pristine, submitting } = useForm({ onSubmit })
  const nome: any = useField('nome', form)
  const CEP: any = useField('CEP', form)
  const rua: any = useField('rua', form)
  const numero: any = useField('numero', form)
  const bairro: any = useField('bairro', form)
  const cidade: any = useField('cidade', form)

  return (
    <form onSubmit={handleSubmit}>
      <label>Nome</label>
      <input {...nome.input}/>
      <label>CEP</label>
      <input type='number' {...CEP.input}/>
      <label>rua</label>
      <input {...rua.input}/>
      <label>numero</label>
      <input {...numero.input}/>
      <label>bairro</label>
      <input {...bairro.input}/>
      <label>cidade</label>
      <input {...cidade.input}/>
      <label>Estado</label>
      <button type='submit' disabled={pristine || submitting}>enviar</button>
      <button type='reset' onClick={form.reset} disabled={pristine || submitting}>apagar</button>
    </form>        
  )
}

export default FormPage
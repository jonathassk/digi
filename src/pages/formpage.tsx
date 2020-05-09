import React, { Component } from 'react'
import FormComponent from './form/form'
import { Layout } from 'antd'
const { Header, Content } = Layout



export default class FormPage extends Component {


  render () {
    return (
      <Layout>
        <Header>
          <p>titulo</p>
        </Header>
        <Content>
          <FormComponent />
        </Content>
      </Layout>
    )
  }
}


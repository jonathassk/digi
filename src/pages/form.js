import React, { Component } from 'react'
import { Layout } from 'antd'

const { Header, Content } = Layout
export default class Form extends Component {
  render () {
    return (
      <Layout>
        <Header>
          <p>titulo</p>
        </Header>
        <Layout>
          <Content>
            <input type='text' />
          </Content>
        </Layout>
      </Layout>
    )
  }
}

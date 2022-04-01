import './App.css'
import { useState } from 'react'
import { PackageSelector } from './Components/PackageSelector'
import { InfoForm } from './Components/InfoForm'
import { Row, Typography, Col, Form, message } from 'antd'
import { request } from './utils'

const { Title } = Typography

const policies = [
  {
    id: 1,
    name: 'Proteco',
    description: `Our most affordable package.
    Your personal belongings will be
    covered up to 15k$. This is
    perfect if you own a few
    belongings.`,
    price: 1250,
  },
  {
    id: 2,
    name: 'Umbrella',
    description: `Our most popular package. Your
    personal belongings will be
    covered up to 30k$. This
    package also includes a free
    water sensor to detect a water
    leak in your home.`,
    price: 3573,
  },
  {
    id: 3,
    name: 'Thor',
    description: `Nothing but the best. Your
    personal belongings will be
    covered up to 100k$. It even
    includes a protection against an
    alien invasion.`,
    price: 7930,
  },
]

function App() {
  const [selectedPolicy, setSelectedPolicy] = useState(null)
  const [form] = Form.useForm()

  const submitForm = async () => {
    const values = form.getFieldsValue()
    const data = { ...values, packageNumber: selectedPolicy }
    const body = new FormData()
    Object.keys(data).forEach((key) => {
      body.append(key, data[key])
    })
    try {
      //obviously this will fail to the fake domain
      const res = await request('https://www.example.com', {
        method: 'POST',
        body,
      })
      if (res.success) {
        message.success('Your submission has been received')
      }
    } catch (e) {
      message.error(
        'There was a problem submitting the request, please try again'
      )
      console.error(e)
    }
  }

  return (
    <Col className='App' span={24}>
      <Title level={1}>Choose your package</Title>
      <Row justify='center'>
        <PackageSelector
          policyOptions={policies}
          selectedPolicy={selectedPolicy}
          setSelectedPolicy={setSelectedPolicy}
        />
      </Row>
      <Row justify='center'>
        <Col span={12}>
          {Boolean(selectedPolicy) && (
            <InfoForm form={form} onSubmit={submitForm} />
          )}
        </Col>
      </Row>
    </Col>
  )
}

export default App

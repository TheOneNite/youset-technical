import {
  Col,
  Typography,
  Form,
  InputNumber,
  Input,
  Select,
  Row,
  Button,
} from 'antd'
import { useState } from 'react'
import styled from 'styled-components'

const { Title } = Typography
const { Item } = Form
const { Option } = Select

const FormWrapperRow = styled(Row)`
  padding: 24px;
`
const SubmitButton = styled(Button)`
  background-color: #00522c;
  color: #eacd27;
  width: 100%;
  height: 5vh;
  border-radius: 15px;
  font-size: 24px;
  :hover {
    color: #00522c;
    background-color: #eacd27;
    border: 2px solid #00522c;
    font-weight: bolder;
  }
`

export const InfoForm = ({ form, onSubmit }) => {
  const [submitDisabled, setSubmitDisabled] = useState(true)
  const checkDisableState = (changed, allValues) => {
    if (Object.values(allValues).includes(undefined)) return
    setSubmitDisabled(false)
  }

  const validateEmail = (_, value) => {
    if (/^[\w-\.\+]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
      return Promise.resolve()
    }
    return Promise.reject('Not a valid email address')
  }

  const validateAge = (_, value) => {
    if (value < 1) {
      return Promise.reject('Invalid age')
    }
    return Promise.resolve()
  }

  return (
    <FormWrapperRow justify='center'>
      <Col>
        <Row justify='center'>
          <Title level={2}>Tell us about yourself</Title>
        </Row>
        <Row justify='start'>
          <Form
            colon={false}
            form={form}
            requiredMark={false}
            onValuesChange={checkDisableState}>
            <Item
              label={"What's your email?"}
              name='emailAddress'
              //   validateTrigger={'onBlur'}
              rules={[
                {
                  required: true,
                  validator: validateEmail,
                },
              ]}>
              <Input placeholder={'example@domain.com'} />
            </Item>
            <Item
              label={'How old are you?'}
              name='age'
              rules={[{ required: true, validator: validateAge }]}>
              <InputNumber />
            </Item>
            <Item
              label={'What is your gender?'}
              name='gender'
              rules={[{ required: true }]}>
              <Select>
                <Option value={'male'}>Male</Option>
                <Option value='female'>Female</Option>
                <Option value='nonBinary'>Non-binary</Option>
              </Select>
            </Item>
            <SubmitButton disabled={submitDisabled} onClick={onSubmit}>
              Submit
            </SubmitButton>
          </Form>
        </Row>
      </Col>
    </FormWrapperRow>
  )
}

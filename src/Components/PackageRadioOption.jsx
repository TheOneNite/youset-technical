import { Card, Typography, Row, Col, Divider } from 'antd'
import { formatCurrency } from '../utils'
import styled from 'styled-components'

const PolicyCard = styled(Card)`
  height: 40vh;
  &.ant-card-bordered {
    border: ${(props) =>
      props.selected ? '4px solid #00522c' : '4px solid #DCE0E5'};
    border-radius: 25px;
  }
  .ant-card-body {
    padding: 12px;
  }
`

const PriceText = styled.span`
  font-size: 48px;
`

const { Title, Text } = Typography

export const PackageRadioOption = ({ policy, onSelect, selected }) => {
  console.log(selected)
  return (
    <Col span={5} onClick={() => onSelect(policy.id)}>
      <PolicyCard selected={selected}>
        <Col span={24}>
          <Row justify='center'>
            <Title level={2}>{policy.name}</Title>
          </Row>
          <Row justify='center'>
            <PriceText>{formatCurrency(policy.price)}</PriceText>
            <Text style={{ fontSize: '18px' }}>per month</Text>
          </Row>
          <Divider />
          <Row>
            <Text>{policy.description}</Text>
          </Row>
        </Col>
      </PolicyCard>
    </Col>
  )
}

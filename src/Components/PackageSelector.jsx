import { useState } from 'react'
import { Row, Col } from 'antd'
import { PackageRadioOption } from './PackageRadioOption'

export const PackageSelector = ({
  policyOptions,
  selectedPolicy,
  setSelectedPolicy,
}) => {
  console.log(selectedPolicy)
  return (
    <Col span={18}>
      <Row justify='center' gutter={48}>
        {policyOptions.map((policy) => (
          <PackageRadioOption
            policy={policy}
            onSelect={(id) => {
              setSelectedPolicy(id)
            }}
            selected={policy.id === selectedPolicy}
          />
        ))}
      </Row>
    </Col>
  )
}

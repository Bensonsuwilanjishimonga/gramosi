import Head from 'next/head'
import { Table, Radio, Divider } from 'antd';
import { useState } from 'react';
import { cashBookColumns, cashBookData} from './constants';
import { Row, Col } from 'antd';






  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      // Column configuration not to be checked
      name: record.name,
    }),
  };






const  Template=()=> {
  const [selectionType, setSelectionType] = useState('checkbox');

  return (
    <div>
    <Radio.Group
      onChange={({ target: { value } }) => {
        setSelectionType(value);
      }}
      value={selectionType}
    >
      <Radio value="checkbox">Checkbox</Radio>
      <Radio value="radio">radio</Radio>
    </Radio.Group>

    <Divider />


    <Row>
      <Col span={24} >
          <h4 className="chasefu" style={{textAlign:'center', fontSize:30, fontWeight:'bold'}}>
          CHASEFU TOWN COUNCIL CASH BOOK FOR 4547457455321-DEVELOPMENT FUNDS  AS AT 30/APRIL/2
          </h4>
          </Col>

     < Table
      rowSelection={{
        type: selectionType,
        ...rowSelection,
      }}
      columns={cashBookColumns}
      dataSource={cashBookData}
    />

    </Row>
  </div>

  )
}








export default Template

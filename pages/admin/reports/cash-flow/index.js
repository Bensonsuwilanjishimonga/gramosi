import Head from 'next/head'
import { Table } from 'antd';
import { useState } from 'react';
import { cashFlowColumns, cashFlowData} from './constants';
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


const  CashFlow=()=> {
  const [selectionType, setSelectionType] = useState('checkbox');

  return (
    <div>

    <Row>
      <Col span={24} >
          <h4 className="chasefu" style={{textAlign:'center', fontSize:30, fontWeight:'bold'}}>
          CHASEFU TOWN COUNCIL 
          </h4>
          <h3 className="chasefu-cash-flow" style={{fontWeight:'bold'}}>Cash flow statement for the Period ended 31st December</h3>

          </Col>

     < Table
      rowSelection={{
        type: selectionType,
        ...rowSelection,
      }}
      columns={cashFlowColumns}
      dataSource={cashFlowData}
    />

    </Row>
  </div>

  )
}


export default CashFlow;

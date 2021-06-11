import Head from 'next/head'
import { Table } from 'antd';
import { useState } from 'react';
import {financialPositionData, financiaPositionColumns} from './constants';
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


const  financialPosition=()=> {
  const [selectionType, setSelectionType] = useState('checkbox');

  return (
    <div>
 <Row>
      <Col span={24} >
          <h4 className="chasefu" 
          style={{textAlign:'center', fontSize:30, fontWeight:'bold',color:'blue'}}> CHASEFU TOWN COUNCIL
 </h4>
 <h3 className="fpositions" style={{fontWeight:'bold', color:'blue'}}  >statement of Financial Position as at 31/Dec/2021</h3>

          </Col>

     < Table
      rowSelection={{
        type: selectionType,
        ...rowSelection,
      }}
      columns={financiaPositionColumns}
      dataSource={financialPositionData}
    />

    </Row>
   
      
  </div>

  )
}


export default financialPosition;

import { Descriptions } from 'antd';
import {Row, Col } from 'antd';

const statementAccounts=() => {
  return(

      <Descriptions title="CHASEFU TOWN COUNCIL" layout="vertical">
        <Descriptions.Item label="STATEMENT OF ACCOUNT FOR">KATONGO BRIGHTON-DEBTOR</Descriptions.Item>
        <Descriptions.Item label="Opening Balance">-</Descriptions.Item>
        <Descriptions.Item label="Debt">800.00</Descriptions.Item>
        <Descriptions.Item label="Date" span={2}>
          4/12/2021
        </Descriptions.Item>
        <Descriptions.Item label="Closing Balance">800.00</Descriptions.Item>
      </Descriptions>
    
  );
};

export default statementAccounts;
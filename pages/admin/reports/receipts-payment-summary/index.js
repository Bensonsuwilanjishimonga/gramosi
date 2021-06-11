import { React } from 'react';
import { Table } from 'antd';
import { receiptPaymentColumns, receiptPaymentDataColumns } from './constants';


const receiptsPaymentSummary =() => {
  return(

  <div>
    <h2 className="receips-payments" style={{fontWeight:'bold', textAlign:'center', color:'blue'}}  >CHASEFU TOWN COUNCIL
SUMMARFY OF RECEIPTS AND PAYMENTS FOR PERIOD ENDED DECEMBER 2021</h2>
    <Table columns={receiptPaymentColumns} dataSource={receiptPaymentDataColumns} size="middle" />

  </div>
  );
};

export default receiptsPaymentSummary;

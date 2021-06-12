import { Table } from 'antd';
import {trialBalanceColumns, trialBalanceData} from './constants'


const trialBalance = () => {
    return (
<Table
      columns={trialBalanceColumns}
      dataSource={trialBalanceData}
      bordered
      title={() => ''}
      footer={() => ''}
    />
    
    );
};

export default trialBalance;
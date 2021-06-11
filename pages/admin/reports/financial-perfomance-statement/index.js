import { Table } from 'antd';
import { financialPerfomanceStatementcolumns, financialPerfomanceStatementdata } from './constants';


const financialPerfomanceStatement = () => { 
    return (
        <div>
            <h2 className="stat-perfomance" style={{color:'blue', textAlign:'center', fontWeight:'bold'}}  >CHASEFU TOWN COUNCIL</h2>
     <h3 className="stat-perfomance2" style={{color:'blue', textAlign:'center', fontWeight:'bold'}} >Statement of Financial Performance </h3>
     <h3 className="stat-perfomance3" style={{color:'blue', textAlign:'center', fontWeight:'bold'}}>31/December/2021</h3>
  <Table
    columns={financialPerfomanceStatementcolumns}
    dataSource={financialPerfomanceStatementdata}
    bordered
    title={() => ''}
    footer={() => ''}
  />
  </div>
  
  );
};

export default financialPerfomanceStatement;
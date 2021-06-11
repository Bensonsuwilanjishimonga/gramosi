import { Card } from 'antd';

const statementAccounts=() => {
  return(

      <Card title="">
        <Card type="inner" title="CHASEFU TOWN COUNCIL" extra={<a href="#"></a>} style={{color:'blue', textAlign:'center', fontWeight:'bold', fontSize:'40'}} >
        STATEMENT OF ACCOUNTS FOR
        </Card>
        <Card type="inner" title=" KATONGO BWALYA - DEBTOR" extra={<a href="#"></a>} style={{color:'blue', textAlign:'center', fontWeight:'bold', fontSize:'40'}} >
       
        </Card>
        <Card
          style={{ marginTop: 16 }}
          type="inner"
          title=""
          extra={<div>OPENNING BALANCE =..................</div>}
        >
        <img className="logo" src="./images/coat-of-arms.svg" alt="My_Logo"/>
        </Card>
        <Card
          style={{ marginTop: 16 }}
          type="inner"
          title="DATE:"
          extra={<div></div>}
        >
          4/12/2021
          
        </Card>
        <Card
          style={{ marginTop: 16 }}
          type="inner"
          title="DEBIT:"
          extra={<div></div>}
        >
          800.00ZMW
        </Card>
        <Card
          style={{ marginTop: 16 }}
          type=""
          title="Receipt/Invoice No. (GHGHGVFGVDFVG)"
          extra={<div>  CLOSING BALANCE = 800.00ZMW</div>}
      
        >
      
        </Card>
      </Card>
  
    
  );
};

export default statementAccounts;
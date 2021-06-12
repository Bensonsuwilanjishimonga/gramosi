import { Col, Row } from 'antd'
import Layout, { Content, Footer, Header } from 'antd/lib/layout/layout'
import Sider from 'antd/lib/layout/Sider'
import React from 'react'


const paymentVoucher = () => {

    return(

        <Layout>
    <Header className="voucher1" style={{height:200, backgroundColor:'white', textAlign:'center'}}  >
<h1 style={{fontWeight:'bold', color:'green', align:'center'}}  >REPUBLIC OF ZAMBIA
MINISTRY OF LOCAL GOVERNMENT
<br/>
CHASEFU TOWN COUNCIL
<br/>
PAYMENT VOUCHER</h1>

    </Header>
    <Layout>
      <Content>
<div style={{fontWeight:'bold'}}  >
PURCHASE ORDER No:........................VOUCHER No:............................................pv1 <br/>
INVOICE No:...............................<br/>
<div style={{textDecoration:'underline'}} >BANK ACCOUNT No: 123.46789 - fund acount
</div><br/>
PAYEE:............................................Shongo
<br/>
DRAWEE:............................................Shongo
</div>,


<Row gutter={[16,16]}>
<Col span={24}>
<div style={{backgroundColor:'white',height:50,margin:10,fontWeight:'bold'}}>DESCRIPTION OF PAYMENT</div>

</Col>
imprest
<Col span={24}>
<div style={{backgroundColor:'white',height:50,margin:10,fontWeight:'bold'}}>
    AMOUNT IN WORDS: <br/>
    Six Thousand Kwacha Only.
    
    </div>
</Col>

<Col span={24}>
<div style={{backgroundColor:'white',height:50,margin:10,fontWeight:'bold'}}>TOTAL </div>

</Col>

  </Row>,

  <Row gutter={[16,16]}>
<Col span={3}>
<div style={{backgroundColor:'white',height:50,margin:10,fontWeight:'bold'}}>DESCRIPTION OF PAYMENT</div>
</Col>
<Col span={3}>
<div style={{backgroundColor:'white',height:50,margin:10,fontWeight:'bold'}}>CLASS AND FUNCTION</div>
</Col>
<Col span={3}>
<div style={{backgroundColor:'white',height:50,margin:10,fontWeight:'bold'}}>ORGANIZATION</div>
</Col>
<Col span={3}>
<div style={{backgroundColor:'white',height:50,margin:10,fontWeight:'bold'}}>PROGRAME</div>
</Col>
<Col span={3}>
<div style={{backgroundColor:'white',height:50,margin:10,fontWeight:'bold'}}>ACTIVITIE</div>
</Col>
<Col span={3}>
<div style={{backgroundColor:'white',height:50,margin:10,fontWeight:'bold'}}>CHART OF ACCOUNTS</div>
</Col>
<Col span={3}>
<div style={{backgroundColor:'white',height:50,margin:10,fontWeight:'bold'}}>AMOUNT</div>
</Col>
  </Row>,
  <Row  gutter={[16,16]}>
  <Col span={3}>
<div style={{backgroundColor:'white',height:50,margin:10,fontWeight:'bold'}}>All functions</div>
</Col>
<Col span={3}>
<div style={{backgroundColor:'white',height:50,margin:10,fontWeight:'bold'}}>institutional management</div>
</Col>
<Col span={3}>
<div style={{backgroundColor:'white',height:50,margin:10,fontWeight:'bold'}}>Office of council secretary in unity</div>
</Col>
<Col span={3}>
<div style={{backgroundColor:'white',height:50,margin:10,fontWeight:'bold'}}>General administration</div>
</Col>
<Col span={3}>
<div style={{backgroundColor:'white',height:50,margin:10,fontWeight:'bold'}}>Amount</div>
</Col>
<Col span={3}>
<div style={{backgroundColor:'white',height:50,margin:10,fontWeight:'bold'}}>322020</div>
</Col>
<Col span={3}>
<div style={{backgroundColor:'white',height:50,margin:10,fontWeight:'bold',}}>6,000.00</div>
</Col>

  </Row>


      </Content>
      <Sider className="sider" style={{marginTop:160, marginBottom:180, backgroundColor:'white', position:'static'  }}  >
      <Col span={24}>
<div style={{backgroundColor:'white',height:50,margin:10,fontWeight:'bold', textDecoration:'underline'}}>
    ZMW <br/>
    6,000.00
    </div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

</Col>
<Col span={24}>
<div style={{backgroundColor:'white',height:50,fontWeight:'bold', textDecoration:'underline'}}>
    ZMW <br/>
    6,000.00
    </div>

</Col>
      </Sider>
    </Layout>
    <Footer>



    </Footer>
  </Layout>


    )
}


export default paymentVoucher

    
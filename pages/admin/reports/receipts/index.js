import { Descriptions, Badge, Row, Col, Space, Divider } from 'antd';
import { Input } from 'antd';


const Receipt = () => {



const renderDetails  = ()=>{



  return   <Col  span={12} >
    <Row gutter={[24,24]}>

    <Col span={12}>
  <div style={{backgroundColor:'blue',height:50,margin:10,fontWeight:'bold'}}>Date</div>
    
    </Col>
    <Col span={12}>
  <div style={{backgroundColor:'blue',height:50,margin:10,fontWeight:'bold'}}>08/April/2021</div>
    
    </Col>

      </Row>

      <Row gutter={[16,16]}>


<Col span={12}>
<div style={{backgroundColor:'blue',height:50,margin:10,fontWeight:'bold'}}>Receipt No.</div>

</Col>
<Col span={12}>
<div style={{backgroundColor:'blue',height:50,margin:10,fontWeight:'bold'}}>1325</div>

</Col>

  </Row>

  <Row gutter={[16,16]}>


<Col span={12}>
<div style={{backgroundColor:'blue',height:50,margin:10,fontWeight:'bold'}}>Cheque No.</div>

</Col>
<Col span={12}>
<div style={{backgroundColor:'blue',height:50,margin:10,fontWeight:'bold'}}></div>

</Col>

  </Row>






</Col>



}





    return (


      <>

<Row gutter={[16, 16]}>
  <Col  span={24} >
      <div style={{backgroundColor:'white',height:150, marginTop:20, fontWeight:'bold',color:'green' }}>MWANSABOMBWE TOWN COUNCIL - ECZ
      <br/>
P.O Box:
750002
<br/>

Phone No.:
.........................................................
<br/>

Physical Address: MWANSABOMBWE
<br/>
District: MWANSABOMBWE
<br/>

</div>
    </Col>
    </Row>


<Row gutter={[16, 16]}>
  <Col  span={12} >
      <div style={{backgroundColor:'blue',height:190, textAlign:'center', marginTop:15,fontSize:20, fontWeight:'bold'}}>
        Received From:
        <br/>
        MASONGO PATRICK
      </div>
    </Col>

 
      {renderDetails()}

</Row>

<Row gutter={[16,16]}>
<Col span={6}>
<div style={{backgroundColor:'blue',height:50,margin:10,fontWeight:'bold'}}>Description</div>

</Col>
<Col span={6}>
<div style={{backgroundColor:'blue',height:50,margin:10,fontWeight:'bold'}}>Programmes</div>

</Col>

<Col span={6}>
<div style={{backgroundColor:'blue',height:50,margin:10,fontWeight:'bold'}}>Activity</div>

</Col>

<Col span={6}>
<div style={{backgroundColor:'blue',height:50,margin:10,fontWeight:'bold'}}>Amount</div>

</Col>

  </Row>,

  <Row gutter={[16,16]}>
<Col span={6}>
<div style={{backgroundColor:'blue',height:50,margin:10,fontWeight:'bold'}}>RENTALS FROM HOUSES</div>

</Col>
<Col span={6}>
<div style={{backgroundColor:'blue',height:50,margin:10,fontWeight:'bold'}}>ECZ expenditure</div>

</Col>

<Col span={6}>
<div style={{backgroundColor:'blue',height:50,margin:10,fontWeight:'bold'}}>Training</div>

</Col>

<Col span={6}>
<div style={{backgroundColor:'blue',height:50,margin:10,fontWeight:'bold'}}>800.00</div>

</Col>

  </Row>,
<Col span={24}>
<div style={{backgroundColor:'blue',height:50,marginTop:-25,fontWeight:'bold' }}>TOTAL</div>
</Col>,
<Col span={24}>
<div style={{backgroundColor:'blue',height:50,marginTop:-15, }}>Amount in words</div>
</Col>,

<Col span={12}>
<div style={{backgroundColor:'blue',height:50,margin:10,fontWeight:'bold'}}>Prepared By</div>

</Col>

<Col span={12}>
<div style={{backgroundColor:'blue',height:50,margin:10,fontWeight:'bold'}}>Received By</div>

</Col>


      </>



    )













    }

    export default Receipt;
import { Descriptions, Badge } from 'antd';

const salesInvoice = () => {
    return (
  <Descriptions title="Sales invoice" layout="vertical" bordered>
       <Descriptions.Item label="DATE:...........">
       MWANSABOMBWE TOWN COUNCIL - ECZ
       <br/>
P.O Box: <br/>

750002 <br/>
Phone No.:
.........................................
<br/>
Physical Address: MWANSABOMBWE
<br/>
District:
MWANSABOMBWE
<br/>
    </Descriptions.Item>
    <Descriptions.Item label="Item Name"></Descriptions.Item>
    <Descriptions.Item label="Amount ZMW"></Descriptions.Item>
    <Descriptions.Item label="Amount in words:................."></Descriptions.Item>
    <Descriptions.Item label="TOTAL" span={2}>
    </Descriptions.Item>
    <Descriptions.Item label="Prepared by:.............." span={3}>
    <Descriptions.Item label="">Received by:..............</Descriptions.Item>

    </Descriptions.Item>
  </Descriptions>


    );
};

export default salesInvoice;
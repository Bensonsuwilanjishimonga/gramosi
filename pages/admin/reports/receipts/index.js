import { Descriptions, Badge } from 'antd';

const Receipt = () => {
    return (

<Descriptions title="RECEIPT" bordered>
    <Descriptions.Item label="DATE: 08/April/2021"></Descriptions.Item>
    <Descriptions.Item label=""></Descriptions.Item>
    <Descriptions.Item label="">MWANSABOMBWE TOWN COUNCIL - ECZ
    <br/>
P.O Box:
750002
<br/>

Phone No.:
.........................................................
<br/>

Physical Address: MWANSABOMBWE
District:
MWANSABOMBWE
<br/>

</Descriptions.Item>
    <Descriptions.Item label=" Receipt No: 1325"></Descriptions.Item>
    <Descriptions.Item label="" span={2}>
Received from      <br/>
MASONGO PATSON<br/>
    </Descriptions.Item>
    <Descriptions.Item label="Description:" span={3}>
    </Descriptions.Item>
    <Descriptions.Item label="RENTALS FROM HOUSES">$80.00</Descriptions.Item>
    <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
    <Descriptions.Item label="Official Receipts">$60.00</Descriptions.Item>
    <Descriptions.Item label="Config Info">
      Data disk type: MongoDB
      <br />
      Database version: 3.4
      <br />
      Package: dds.mongo.mid
      <br />
      Storage space: 10 GB
      <br />
      Replication factor: 3
      <br />
      Region: East China 1<br />
    </Descriptions.Item>
  </Descriptions>
  
  );
    };

    export default Receipt;
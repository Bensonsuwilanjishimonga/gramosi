export const cashBookColumns = [
    {
      title: 'Account code',
      dataIndex: 'accCode',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Date',
      dataIndex: 'date',
    },
    {
      title: 'Cheque/Recipt No.',
      dataIndex: 'receiptNo',
    },
    {
        title: 'PV.',
        dataIndex: 'pv',
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'PAYE',
        dataIndex: 'paye',
      },
      {
        title: 'Description',
        dataIndex: 'description',
      },
      {
        title: 'Receipts',
        dataIndex: 'receipt',
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'Payment',
        dataIndex: 'payment',
      },
      {
        title: 'Monthly Balance',
        dataIndex: 'monthlybalance',
      },
  ];
  export const cashBookData = [
    {
      
      description:'Opening Cash Book Balance as at 1/April/21',
      payment:'50,000.00',
      monthlybalance:'50,000.00'
    },
    {
        accCode: '152099',
        date: '7 April 2021',
        receiptNo: '14545',
        paye: 'JULIE NGALIE',
        description:'MARKET FEES',
        receipt:'1,200.00',
        monthlybalance:'51,200.00'
      },
      {
        accCode: '151201',
        date: '8 April 2021',
        receiptNo: '1325',
        paye: 'MASONGO PATSON',
        description:'RENTALS FROM HOUSES',
        receipt:'-800.00',
        monthlybalance:'52,000.00'
      },
      {
        accCode: '221010',
        date: '9 April 2021',
        receiptNo: '365',
        paye: 'WEBBY BSK',
        description:'PAYMENT FOR TRAINING AND EDUCATION',
        receipt:'-',
        payment:'6,987.00',
        monthlybalance:'45,013.00',
        pv:'464365'
      },
      {
        accCode: '153099',
        date: '12 April 2021',
        receiptNo: '13235',
        paye: 'KATONGO BRIGHTON',
        description:'RECEIPT FOR FISH LEVY',
        receipt:'5,000.00',
        monthlybalance:'50,013.00'
      },
      {
        accCode: '155007',
        date: '12 April 2021',
        receiptNo: '23211',
        paye: 'KATONGO BRIGHTON',
        description:'BUS FEES',
        receipt:'1,205.00',
        payment:'-',
        monthlybalance:'51,218.00'
      },
      {
        accCode: '226008',
        date: '12 April 2021',
        receiptNo: '678',
        paye: 'KHATOS BSK',
        description:'876976HJGHKKJSDJKHK',
        receipt:'-',
        payment:'8,987.00',
        monthlybalance:'42,231.00',
        pv:'89809'
      },
      {
        
        description:'Totals',
        receipt:'8,205.00',
        payment:'15,974.00',
      },
      {
        
        description:'Closing Balance as at 30/April/21',
        monthlybalance:'42,231.00'
      },
     
      
  ]; // rowSelection object indicates the need for row selection
  
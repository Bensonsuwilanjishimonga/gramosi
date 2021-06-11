export const financiaPositionColumns = [
    {
      title:'Description',
      dataIndex: 'description',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Notes',
      dataIndex: 'notes',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
    },
  ];
  export const financialPositionData = [
    {
      
      description: 'Cash and Cash Equivalents',
      amount:'66,498.00'
    },
    {
      description: 'Total Current Assets',
      amount:'66,498.00'
    },
      { description: 'Total Assets',
      amount:'66,498.00',
      },
      {
        description: 'Net Assets',
        amount:'66,498.00'

      },
      {
        description: 'Excess/(Deficit) of Income Over Expenditure',
        amount:'66,498.00'
      },
      {
        description: 'Net Asset/ Equity',
        amount:'66,498.00'
      },
      {
        description: 'Total Net Assets/Equity',
        amount:'66,498.00'
      },
     
     
    
  ]; // rowSelection object indicates the need for row selection
  
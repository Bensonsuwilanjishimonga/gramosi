
export const financialPerfomanceStatementcolumns = [
    {
      title: 'Description',
      dataIndex: 'description',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      align: 'right',
    },
    
  ];
  
  export const financialPerfomanceStatementdata = [
    {
      description: 'Revenue',
      amount: '',
    },{
        description: 'Local Taxes/Rates',
        amount: '78,087.00',
      },
      {
        description: 'Fees and Charges',
        amount: '1,200.00',
      },
      {
        description: 'Licenses',
        amount: '5,000.00',
      },
      {
        description: 'Permits',
        amount: '1,415.00',
      },
      {
        description: 'Total Revenue Expenses',
        amount: '85,702.00',
      },
      {
        description: 'Office Costs',
        amount: '10,217.00',
      },
      {
        description: 'Services',
        amount: '8,987.00',
      },
      {
        description: 'Total Expenses',
        amount: '19,204.00',
      },
      {
        description: 'Current Year Surplus of Revenue Over Expenditure',
        amount: '66,498.00',
      },
   
  ];
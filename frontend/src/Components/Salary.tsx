import React, { useState } from 'react';
import { Table } from 'antd';
import 'antd/dist/reset.css';
import { transformedData } from '../data/test-Salary';

interface DataType {
  year: number;
  totalJobs: number;
  avgSalaryUSD: number;
}







const Salary: React.FC = () => {

  

  const [value,setValue]=useState<string|null>(null);

  function clickFunction(text:string){
    setValue(text)
   
  }
  // console.log(value)
  

  const columns = [
    {
      title: 'Year',
      dataIndex: 'year',
      key: 'year',
      render: (text:any) => <a onClick={()=>{clickFunction(text)}}>{text}</a>,
      sorter: (a: DataType, b: DataType) => a.year - b.year,
      
    },
    {
      title: 'Number of Total Jobs',
      dataIndex: 'totalJobs',
      key: 'totalJobs',
      sorter: (a: DataType, b: DataType) => a.totalJobs - b.totalJobs,
    },
    {
      title: 'Average Salary (USD)',
      dataIndex: 'avgSalaryUSD',
      key: 'avgSalaryUSD',
      sorter: (a: DataType, b: DataType) => a.avgSalaryUSD - b.avgSalaryUSD,
    },
  ];











  return (
    <div className='rounded shadow-lg'>
      <Table
        columns={columns}
        dataSource={transformedData}
        rowKey="year"
        pagination={true}
      />
    </div>
  );
};

export default Salary;

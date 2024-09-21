import React, { useState } from 'react';
import { Table } from 'antd';
import { jobCounts } from '../data/test-Salary'; // Assuming jobCounts is an array of objects

interface DataType {
  job_title: string;
  total_jobs: number;
  work_year: number;
  key: string; // Unique key for each row
}
interface SalaryProps {
 
  value:string|null;
  isActive:boolean;
  
}


const SalaryTable: React.FC<SalaryProps> = ({value,isActive}) =>
 {

  const [data,setData]=useState<DataType>();


 

  // console.log(jobCounts);

   



  const columns = [
    {
      title: 'Job Title',
      dataIndex: 'job_title',
      key: 'job_title',
      sorter: (a: DataType, b: DataType) => a.job_title.localeCompare(b.job_title), // String sorting
    },
    {
      title: 'Total Jobs',
      dataIndex: 'total_jobs',
      key: 'total_jobs',
      sorter: (a: DataType, b: DataType) => a.total_jobs - b.total_jobs,
    },
    {
      title: 'Work Year',
      dataIndex: 'work_year',
      key: 'work_year',
      sorter: (a: DataType, b: DataType) => a.work_year - b.work_year,
    },
  ];

  let dataSource: DataType[] = jobCounts.map((job, index) => ({
    key: index.toString(), // Assigning a unique key to each entry
    job_title: job.job_title,
    total_jobs: job.total_jobs,
    work_year: job.work_year,
  }));

  dataSource= dataSource.filter((item)=>{
    if(Number(value)<=item.work_year){
     return item;
    }

  })

  return (

    
    <div className= {isActive? '':'hidden '+ 'rounded shadow-lg w-2/5 '} >
      
    <Table
      columns={columns}
      dataSource={dataSource}
    />
    </div>
  );
};

export default SalaryTable;

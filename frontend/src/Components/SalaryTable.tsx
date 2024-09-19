import React from 'react';
import { Table } from 'antd';
import { jobCounts } from '../data/test-Salary'; // Assuming jobCounts is an array of objects

interface DataType {
  job_title: string;
  total_jobs: number;
  work_year: number;
  key: string; // Unique key for each row
}

const SalaryTable: React.FC = () => {
  console.log(jobCounts);

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

  const dataSource: DataType[] = jobCounts.map((job, index) => ({
    key: index.toString(), // Assigning a unique key to each entry
    job_title: job.job_title,
    total_jobs: job.total_jobs,
    work_year: job.work_year,
  }));

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
    />
  );
};

export default SalaryTable;

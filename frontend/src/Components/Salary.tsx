
import { Table } from 'antd';
import 'antd/dist/reset.css';
import { transformedData } from '../data/test-Salary';

interface DataType {
  year: number;
  totalJobs: number;
  avgSalaryUSD: number;
}




interface SalaryProps {
  clickFunction: (text: string) => void;
  value:string|null;
}


const Salary: React.FC<SalaryProps> = ({clickFunction}) => {

  

  
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
    <div className='rounded shadow-lg w-2/5'>
      <div className='flex justify-center w-full h-10 text-xl'>
      <h1>Table that shows the Data according Year, Jobs and Salary</h1>
      </div>
      <Table
        columns={columns}
        dataSource={transformedData}
        rowKey="year"
       pagination={false}
      />
    </div>
  );
};

export default Salary;

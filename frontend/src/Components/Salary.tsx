
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
    <>
    <div className=' w-2/5'>


    <div className='flex  items-center justify-center w-full py-10 '>
    <h1 className='text-4xl w-full text-center font-semibold'
    >Table of Year, Jobs & Avg Salary</h1>
    </div>

    <div className=' rounded shadow-lg'>
     
      <Table
        columns={columns}
        dataSource={transformedData}
        rowKey="year"
       pagination={false}
      />
    </div>
    </div>
    </>
  );
};

export default Salary;

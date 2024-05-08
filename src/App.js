import './App.css';
import Table from './components/Table';
import Header from './components/Header';
import Form from './components/form';
import Search from './components/search';
import { useState } from 'react';



function App() {
  const transaction = [
      {
      date: "24/4/2022",
    description: "Arbab",
      category: "Expenditure",
     amount: "Ksh 9750"
     },
    {
      date: "10/10/2010",
        description: "Miscellaneous",
        category: "Expenditure",
        amount: "Ksh 30,500"
    },
    {
        date: "4/2/2018",
        description: "Salary",
        category: "Deposit",
        amount: "Ksh 230,000"
    },
    {
        date: "14/3/2020",
        description: "BMW",
        category: "Expenditure",
        amount: "Ksh 2,500,000"
    },
    {
        date: "12/12/2021",
        description: "kenya airways",
        category: "Expenditure",
        amount: "Ksh 55,000"
    }
      ]


      const [data, setData] = useState(transaction)
      const [searchData, setSearchData] = useState("")

      function handleSearch (e){
        setSearchData(e.target.value)}

        const newData = data.filter((transaction) => {
          if(searchData.length > 0)
          {
          return transaction.description.toLowerCase().includes(searchData.toLowerCase())
        } else{
          return true
        }
        })
        
      function ControlNewData (formData) {
        setData([...data, formData])
      }


  return (
    <div className='container'>
  
    <Header/>
    <Search searchBar={handleSearch}/>
    <Form ControlNewData={ControlNewData}/>
    <Table transaction={newData}/>

    
    </div>
  );
}

export default App;
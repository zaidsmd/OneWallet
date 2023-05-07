import React, {useEffect, useState} from 'react';
import TotalCard from "../components/TotalCard";
import AreaStatisticsCard from "../components/AreaStatisticsCard";
import '../styles/dashboard.css'
import TransactionsCard from "../components/TransactionsCard";
import SavingsCard from "../components/SavingsCard";
import PieStatisticsCard from "../components/PieStatisticsCard";
import MyButton from "../components/MyButton";
import {ImportCurve} from "iconsax-react";
import Button from 'react-bootstrap/Button';
const data = [
    {
        'month':"jan",
        "income":Math.floor(Math.random()*10000),
        "spending":Math.floor(Math.random()*5000)
    },
    {
        'month':"feb",
        "income":Math.floor(Math.random()*10000),
        "spending":Math.floor(Math.random()*5000)
    },
    {
        'month':"mar",
        "income":Math.floor(Math.random()*10000),
        "spending":Math.floor(Math.random()*5000)
    },
    {
        'month':"apr",
        "income":Math.floor(Math.random()*10000),
        "spending":Math.floor(Math.random()*5000)
    },
    {
        'month':"may",
        "income":Math.floor(Math.random()*10000),
        "spending":Math.floor(Math.random()*5000)
    },
    {
        'month':"jun",
        "income":Math.floor(Math.random()*10000),
        "spending":Math.floor(Math.random()*5000)
    },
    {
        'month':"jul",
        "income":Math.floor(Math.random()*10000),
        "spending":Math.floor(Math.random()*5000)
    },
    {
        'month':"aug",
        "income":Math.floor(Math.random()*10000),
        "spending":Math.floor(Math.random()*5000)
    },
    {
        'month':"sep",
        "income":Math.floor(Math.random()*10000),
        "spending":Math.floor(Math.random()*5000)
    },
    {
        'month':"oct",
        "income":Math.floor(Math.random()*10000),
        "spending":Math.floor(Math.random()*5000)
    },
    {
        'month':"nov",
        "income":Math.floor(Math.random()*10000),
        "spending":Math.floor(Math.random()*5000)
    },
    {
        'month':"dec",
        "income":Math.floor(Math.random()*10000),
        "spending":Math.floor(Math.random()*5000)
    }
];
const transactionsData = [
    {
        "category": "Freelance",
        "description": "logo design",
        "type": "income",
        "amount": "50",
        "status": "completed"
    },
    {
        "category": "Requirements",
        "description": "RTX 1060",
        "type": "spending",
        "amount": "999",
        "status": "canceled"
    },
    {
        "category": "Freelance",
        "description": "Web app saga",
        "type": "income",
        "amount": "900",
        "status": "completed"
    },
    {
        "category": "Food",
        "description": "Dominos",
        "type": "spending",
        "amount": "20",
        "status": "completed"
    }
];
const savings = [
   {
        "title":"Graphic card",
        "progress":"300",
        "goal":"1000"
    },
    {
        "title":"Graphic card",
        "progress":"300",
        "goal":"1000"
    },
    {
        "title":"Graphic card",
        "progress":"300",
        "goal":"1000"
    },
    {
        "title":"Graphic card",
        "progress":"300",
        "goal":"1000"
    }
];
const pie = [
    {
        "name":"Category"+Math.floor(Math.random()*10000),
        "value":Math.floor(Math.random()*10000)
    },
    {
        "name":"Category"+Math.floor(Math.random()*10000),
        "value":Math.floor(Math.random()*10000)
    },
    {
        "name":"Category"+Math.floor(Math.random()*10000),
        "value":Math.floor(Math.random()*10000)
    }
]
const colorsArray= ["#00C9C8","#00A0A0","#00797A","#005456","#003134"]

function Dashboard() {
    const handleVersion = () => {
        if (window.innerWidth <= 576) setMobileVersion(true)
        else setMobileVersion(false)
    }
    const [mobileVersion, setMobileVersion] = useState(false);
    useEffect(()=>{
        handleVersion()
    })
    return (
        <div className='main__container'>
           <div className="main__header">
               <h1 className="page__title">
                   Dashboard Overview
               </h1>
               <div className="main__buttons">
                   <MyButton children={mobileVersion? "Add": "Add Transaction"}  classnames={["btn-primary"]}/>
                   {!mobileVersion ?
                       <MyButton children={<ImportCurve size={20}/>} classnames={[]}/>: null}
               </div>
           </div>
            <div className="content__container ">
                <TotalCard  template="balance" title="Total Balance" lastTotal={10} total={5011}/>
                <TotalCard  template="income" title="total income" lastTotal={500} total={5111}/>
                <TotalCard template="spending" title="Total spending" lastTotal={10} total={100}/>
                <AreaStatisticsCard  data={data} title={"Statistics"} lineKeys={['income','spending']} colorsArray={["#00C9C8","#FFF"]} yAxisKey={"income"} xAxisKey={"month"}/>
                <TransactionsCard  data={transactionsData} title={"last transactions"}/>
                <SavingsCard  data={savings} title={"Savings"}/>
                <PieStatisticsCard  title={"Spending Statistics"} nameKey={"name"} data={pie} colorsArray={colorsArray} dataKey={"value"}/>
            </div>
        </div>
    );
}

export default Dashboard;
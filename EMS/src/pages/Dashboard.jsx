import { dummyAdminDashboardData, dummyEmployeeDashboardData } from "../assets/assets.jsx";
import { useState, useEffect } from "react";
import Loading from "../components/Loading.jsx";
import EmployeeDashboard from "../components/EmployeeDashboard.jsx";
import AdminDashboard from "../components/AdminDashboard.jsx";
const Dashboard = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setData(dummyAdminDashboardData)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  },[])

  if(loading) return <Loading />
  if(!data) return <p className="text-center text-slate-500 py-12">Failed to load dashboard</p>

  if(data.role === "ADMIN"){
    return <AdminDashboard data={data} />
  }else{
    return <EmployeeDashboard data={data}/>
  }
}

export default Dashboard

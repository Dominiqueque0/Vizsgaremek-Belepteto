import {TeljesTablaAdmin} from '../components/table/Table';
import {BelepoTablaAdmin} from '../components/table/Table';
import {AppBarAdmin} from '../components/navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import {useEffect} from 'react'
import axios from 'axios'

export default function Portas(){
  const history = useNavigate(); 
useEffect(() => {
  if(localStorage.getItem('token') === null){
    history('/')
  }
},[])
return (<>
<AppBarAdmin></AppBarAdmin>
<div className="container">
  <div className='jobbtabla'>
    <TeljesTablaAdmin></TeljesTablaAdmin>
  </div>
</div>
<div className='container2'>
<div className='kozeptabla'>
    <BelepoTablaAdmin className="tabla"></BelepoTablaAdmin>
  </div>
</div>
</>)
}
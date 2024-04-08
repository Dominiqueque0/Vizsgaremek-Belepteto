import {TeljesTablaPortas} from '../components/table/Table';
import {BelepoTablaPortas} from '../components/table/Table';
import {AppBarPortas} from '../components/navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import {useEffect} from 'react'
export default function Portas(){
  const history = useNavigate(); 
useEffect(() => {
  if(localStorage.getItem('token') === null){
    history('/')
  }
},[])
return (<>
<AppBarPortas></AppBarPortas>
<div className="container">
  <div className='jobbtabla'>
    <TeljesTablaPortas></TeljesTablaPortas>
  </div>
</div>
<div className='container2'>
<div className='kozeptabla'>
    <BelepoTablaPortas className="tabla"></BelepoTablaPortas>
  </div>
</div>
</>)
}
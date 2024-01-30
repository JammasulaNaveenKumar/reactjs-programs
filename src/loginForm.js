import React from 'react';
function LoginForm(props) {
    return ( <>
    <div style={{width:"500px"}}>
     <span style={{float:"left"}}>EmployeeCode</span>

   <div><input className="form-control" placeholder='enter employee code' value={props.employeecode} onChange={(event)=>{props.setemployeecode(event.target.value)}} /></div>
   <span style={{float:"left"}}>employeeName</span>
   <div><input className="form-control" placeholder='enter employee name' value={props.employeename} onChange={(event)=>{props.setEmployeename(event.target.value)}}/></div>
   <span style={{float:"left"}}>email</span>
   <div><input className="form-control" placeholder='enter employee email' value={props.email} onChange={(event)=>{props.setEmail(event.target.value)}}/></div>
   <span style={{float:"left"}}>salary</span>
   <div><input className="form-control" placeholder='enter employee salary' value={props.salary} onChange={(event)=>{props.setSalary(event.target.value)}}/></div>
 { props.updateId==false &&<button className="btn btn-primary" onClick={props.SaveButton}>save</button>}
 {props.updateId==true && <button className='btn btn-primary' onClick={props.UpdateButton}>Update</button>}
  </div>
   </> );
}

export default LoginForm;
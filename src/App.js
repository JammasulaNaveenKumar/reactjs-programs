import logo from './logo.svg';
import './App.css';
import LoginForm from './loginForm';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

const[employeecode,setemployeecode]=useState(null);
const[employeename,setEmployeename]=useState(null);
const[email,setEmail]=useState(null);
const[salary,setSalary]=useState(null)
const[employeeData,setEmployeeData]=useState([]);
const[updateId,setUpdateId]=useState(false)
const notify = () => {
  console.log("alayya");
  toast("Wow so easy !")};

const SaveButton=async()=>{
  toast("content is added!");
  const dup=Object.assign(employeeData,[]);
 await dup.push({
    EmployeeCode:employeecode,
    EmployeeName:employeename,
    Email:email,
    Salary:salary
  })

 await setEmployeeData(dup)
 setemployeecode("");
 setEmployeename("");
 setEmail("");
 setSalary("")
  console.log(employeeData);
}
const DeleteButton=(ele)=>{
  console.log(ele);
let duplicateArry=Object.assign(employeeData,[]);
console.log(duplicateArry);
let a=duplicateArry.filter((element)=>{
   if(element.EmployeeCode != ele.EmployeeCode){
    return element
   }
})
setEmployeeData(a)
}
const EditButton=(ele)=>{
  setemployeecode(ele.EmployeeCode);
  setEmployeename(ele.EmployeeName);
  setEmail(ele.Email);
  setSalary(ele.Salary)
  setUpdateId(true)

}
const UpdateButton=()=>{
let dup=Object.assign(employeeData,[])
let b=dup.filter((element)=>{
 if(element.EmployeeCode==employeecode){
  element.EmployeeName=employeename;
  element.Email=email;
  element.Salary=salary;
 }
 return element
})
setemployeecode("");
setEmployeename("");
setEmail("");
setSalary("")
setEmployeeData(b)
setUpdateId(false)
}
  return (
    <div className="App">
      <div><h2>REGISTR-FORM</h2></div>
    <div><LoginForm setemployeecode={setemployeecode} employeecode={employeecode} setEmployeename={setEmployeename} employeename={employeename} setEmail={setEmail} email={email} setSalary={setSalary} salary={salary} SaveButton={SaveButton} updateId={updateId} UpdateButton={UpdateButton}/></div>
    <div>
      <table className='table'>
      <tr>
      <th style={{border:"solid",borderWidth:"2px" ,width:"110px"}}>employeeCode</th>
      <th style={{border:"solid",borderWidth:"2px",width:"110px"}}>employeeName</th>
      <th style={{border:"solid",borderWidth:"2px",width:"110px"}}>employeeEmail</th>
      <th style={{border:"solid",borderWidth:"2px",width:"110px"}}>employeeSalary</th>
      <th style={{border:"solid",borderWidth:"2px",width:"110px"}}>Actions</th>
      <th style={{border:"solid",borderWidth:"2px",width:"110px"}}>Actions</th>
      </tr>
      </table>
      </div>
    <div>{employeeData.map((ele,index)=>{
     
       return< tr key={index}>
       <td style={{border:"solid",borderWidth:"2px",width:"220px"}}>{ele.EmployeeCode}</td>
         <td style={{border:"solid",borderWidth:"2px" ,width:"220px"}}>{ele.EmployeeName}</td>
         <td style={{border:"solid",borderWidth:"2px",width:"220px"}}>{ele.Email}</td>
         <td style={{border:"solid",borderWidth:"2px",width:"220px"}}>{ele.Salary}</td>
         <td style={{border:"solid",borderWidth:"2px",width:"220px"}}><button onClick={()=>{DeleteButton(ele)}} className="btn btn-primary">delete</button></td>
         <td style={{border:"solid",borderWidth:"2px",width:"220px"}}><button onClick={()=>{EditButton(ele)}} className="btn btn-primary">edit</button></td>
         <td><button>i</button></td>

       </tr>
     
    })}</div>
    <div>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />
    </div>
    </div>
  );
}

export default App;

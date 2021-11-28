
import './App.css';
import {useState , useEffect,useRef}from 'react';
import Change from './component/change';
import toast, { Toaster } from 'react-hot-toast';
// import Text from './component/text';

function App() {
  // const [data ,setData]=useState(0);
// const [name ,setName]=useState("");

  const NameInput =useRef();
  const [data ,setData]=useState([{
    name:"fatima"
  },
  {
     name:"amir"
  }
]);


  // useEffect(()=>{
  //   console.log("hiii");
  // } ,[data , name]);

  function remove(index) {
    let newData=[... data];
    newData.splice(index,1);
    setData(newData);
  }


 function add() {
   let newUser={
     name:NameInput.current.value,
   }

   let newData=[...data];
    newData.push(newUser);
    setData(newData);

    toast.success('Successfully created!');

 }

  return (
    <div> 
      {/* <Text name={name} setName={setName}/> */}
      {/* <Change data={data} setData={setData}/>  */}

      <Toaster />
  
      <input  ref={NameInput} onBlur={add} type="text" />

    <Change data={data} setData={setData} remove={remove}/>
      

    </div>
  );
}

export default App;

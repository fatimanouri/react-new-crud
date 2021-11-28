
const Change=({data ,setData ,remove})=>{

    function edit(index) {
        let newName=prompt("enter ur new name; ", data[index].name);

        let newData=[...data];

        let newUser={
            name:newName,
        };

        newData.splice(index,1,newUser);
        setData(newData);
        
    }

    return(

         <div>
      
      {
        data.map((item,index) => (
            <div>
                <h3 onClick={()=>remove(index)}>{item.name} <span>{index}</span></h3>
                <h6 onClick={()=>edit(index)}>edit</h6>
          </div>
            ))
        }
      </div>
    )
}
export default Change;


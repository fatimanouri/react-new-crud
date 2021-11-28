const Text=({name ,setName})=>{
    return(
<div>
     <input type="text" onChange={(e)=>setName(e.target.value)} />
      <h2>{name}</h2>
</div>
    )
}
export default Text;
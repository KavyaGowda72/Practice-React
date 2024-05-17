import { useState } from "react"

const MyWebsite=()=>{

    const[name,setName]=useState('')
    const[age,setAge]=useState(0)
    const[user, setUser]=useState([])

    const onNameChange=(event)=>{
        setName(event.target.value)
    }

    const onAgeChange=(event)=>{
            setAge(event.target.value)
    }

    const onValueChange=()=>{
        const users={Name :name, Age:age}
        setUser((u)=> [...u,users])
    }
    return(
       <>
        <div>
            <input type="text" placeholder="enter your name" value={name} onChange={onNameChange}/>
            <input type="number" placeholder="enter your age" value={age} onChange={onAgeChange}/>
            <button onClick={onValueChange}>Add</button>
            
        </div>

       

            <ol>
             {user.map((us, i)=> <li key={i}> {us.Name} , 
             
              {us.Age}</li>)
             
             
             }
             </ol>
        </> 
        
    )

}

export default MyWebsite
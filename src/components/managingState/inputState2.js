import {useState} from 'react'

export default function EditProfile() {
  const [mode, setMode] = useState(false)
  const [firstName, setFirstName]= useState('Jane')
  const [lastName, setLastName]= useState('Jacobs')
  function handleFirstName(e){
    setFirstName(e.target.value)
  }
  function handleLastName(e){
    setLastName(e.target.value)
  }
  function setmode(){
    setMode(false)
  }
  return (
    <form onSubmit={e=>{
      e.preventDefault()
      setMode(!mode)
    }}>
      <label>
        First name:{' '}
        {
          mode ?
          <input onChange={handleFirstName} value={firstName}/>
          :
        <b>{firstName}</b>
        }
      
      </label>
      <label>
        Last name:{' '}
        {
          mode ? 
           <input onChange={handleLastName} value={lastName}/>
          :
         <b>{lastName}</b>
        }
       
       
      </label>
      {
        mode ? 
      <button type="submit">
        Save Profile
      </button>
        :
        <button onClick={setmode}>
        Edit Profile
        </button>
      }
    
      <p><i>Hello, {firstName} {lastName}!</i></p>
    </form>
  );
}

//solution 2
export  function EditProfile2() {
    const [isEditing, setIsEditing] = useState(false);
    const [firstName, setFirstName] = useState('Jane');
    const [lastName, setLastName] = useState('Jacobs');
  
    return (
      <form onSubmit={e => {
        e.preventDefault();
        setIsEditing(!isEditing);
      }}>
        <label>
          First name:{' '}
          {isEditing ? (
            <input
              value={firstName}
              onChange={e => {
                setFirstName(e.target.value)
              }}
            />
          ) : (
            <b>{firstName}</b>
          )}
        </label>
        <label>
          Last name:{' '}
          {isEditing ? (
            <input
              value={lastName}
              onChange={e => {
                setLastName(e.target.value)
              }}
            />
          ) : (
            <b>{lastName}</b>
          )}
        </label>
        <button type="submit">
          {isEditing ? 'Save' : 'Edit'} Profile
        </button>
        <p><i>Hello, {firstName} {lastName}!</i></p>
      </form>
    );
  }
  
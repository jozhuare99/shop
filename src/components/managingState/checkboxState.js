import { useState } from 'react'



const letters = [{
    id: 0,
    subject: 'Ready for adventure?',
    isStarred: true,
  }, {
    id: 1,
    subject: 'Time to check in!',
    isStarred: false,
  }, {
    id: 2,
    subject: 'Festival Begins in Just SEVEN Days!',
    isStarred: false,
  }]

export default function MailClient() {
  const [aLetters, setaLetters] = useState(letters)
  let selectedId = aLetters.filter(a => a.isStarred === true)
   let selectedCount = selectedId.length

  function check(letterId){
    selectedId.map(a=>{
      if(a.id === letterId)
        return true
    })
   
    
  }
  function handleToggle(toggledId) {
    setaLetters(aLetters.map(letter=>{
      if(letter.id === toggledId){
        return {
          ...letter,
          isStarred: !letter.isStarred
        }
      } else {
        return letter
      }
    }));
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={
            check(letter.id)
            }
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>
            You selected {selectedCount} letters
          </b>
        </p>
      </ul>
    </>
  );
}



  function Letter({letter,onToggle,isSelected}) {
    return (
      <li className={
        isSelected ? 'selected' : ''
      }>
        <label>
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => {
              onToggle(letter.id);
            }}
          />
          {letter.subject}
        </label>
      </li>
    )
  }
  
  export function MailClient2() {
    const [selectedIds, setSelectedIds] = useState( new Set() );
    const selectedCount = selectedIds.size;
    function handleToggle(toggledId) {
      // Create a copy (to avoid mutation).
      const nextIds = new Set(selectedIds);
      if (nextIds.has(toggledId)) {
        nextIds.delete(toggledId);
      } else {
        nextIds.add(toggledId);
      }
      setSelectedIds(nextIds);
    }
  
    return (
      <>
        <h2>Inbox</h2>
        <ul>
          {letters.map(letter => (
            <Letter
              key={letter.id}
              letter={letter}
              isSelected={
                selectedIds.has(letter.id)
              }
              onToggle={handleToggle}
            />
          ))}
          <hr />
          <p>
            <b>
              You selected {selectedCount} letters
            </b>
          </p>
        </ul>
      </>
    );
  }

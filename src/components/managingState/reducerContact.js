import {useReducer} from 'react';

const initialState = {
    selectedId: 0,
    messages: {
        0:'Hello1',
        1:'Hello2',
        2:'Hello3'
    }
  };


  function messengerReducer(state, action) {
    switch (action.type) {
      case 'changed_selection': {
        return {
          ...state,
          selectedId: action.contactId
        };
      }
      case 'edited_message': {
        return {
          ...state,
          messages: {
            ...state.messages,
            [state.selectedId]: action.message
          },
        };
      }

      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }



export default function Messenger() {
    const [state, dispatch] = useReducer(messengerReducer, initialState);
    const message = state.messages[state.selectedId];
    const contact = contacts.find((c) => c.id === state.selectedId);
    return (
      <div>
        <ContactList
          contacts={contacts}
          selectedId={state.selectedId}
          dispatch={dispatch}
        />
        <Chat
          key={contact.id}
          message={message}
          contact={contact}
          dispatch={dispatch}
        />
      </div>
    );
  }
  
  const contacts = [
    {id: 0, name: 'Taylor', email: 'taylor@mail.com'},
    {id: 1, name: 'Alice', email: 'alice@mail.com'},
    {id: 2, name: 'Bob', email: 'bob@mail.com'},
  ];
  

  function ContactList({contacts, selectedId, dispatch}) {
    return (
      <section className="contact-list">
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <button
                onClick={() => {
                  dispatch({
                    type: 'changed_selection',
                    contactId: contact.id,
                  });
                }}>
                {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
              </button>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  
  function Chat({contact, message, dispatch}) {
    return (
      <section className="chat">
        <textarea
          value={message}
          placeholder={'Chat to ' + contact.name}
          onChange={(e) => {
            dispatch({
              type: 'edited_message',
              message: e.target.value,
            });
          }}
        />
        <br />
        <button onClick={()=>{
            alert(`you sent ${message} to ${contact.email}`)
            dispatch({
                type: 'edited_message',
                message: message
            })
        }}>Send to {contact.email}</button>
      </section>
    );
  }
  

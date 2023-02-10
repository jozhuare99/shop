import React from 'react'
import  { Form, useLoaderData, useFetcher } from 'react-router-dom'
import {getContact, updateContact} from '../contact'

export async function loader({ params }){
    return getContact(params.contactId)
}

export async function action({request, params}){
    let formData = await request.formData()
    return updateContact(params.contactId, {
        favorite: formData.get('favorite') === 'true'
    })
}

export default function Contact() {
    const contact = useLoaderData()
    if(!contact){
        throw new Response('', {
            status: 404,
            statusText: 'Not Found'
        })
    }
  return (
    <div id='contact'>
      <div>
        <img key={contact.avatar} alt='' src={contact.avatar || null} />
      </div>
      <div>
        <h1>
        {
            contact.first || contact.last ? (
                <>
                {contact.first} {contact.last}
                </>
            ) : (
                <i>No Name</i>
            )
        }{' '}
        <Favorite contact={contact} />
        </h1>
        {contact.twitter && (
            <p>
                <a target='_blank' rel="noreferrer"  href={`https://twitter.com/${contact.twitter}`}>
                    {contact.twitter}
                </a>
            </p>
        )}
        {contact.notes && <p>{contact.notes}</p>}
        <div>
            <Form action='edit'>
                <button type='submit'>Edit</button>
            </Form>
            <Form
            method='post'
            action='destroy'
            onSubmit={(event)=> {
                if(
                    // eslint-disable-next-line no-restricted-globals
                    !confirm('please confirm you want to delete this record.')
                ){
                    event.preventDefault();
                }
            }}
            >
                <button type='submit'>Delete</button>
            </Form>
        </div>
      </div>
    </div>
  )
}

function Favorite({ contact }){
    const fetcher = useFetcher()
    let favorite = contact.favorite
    if(fetcher.formData){
        favorite = fetcher.formData.get('favorite') === 'true'
    }
    return(
        <fetcher.Form method='post'>
            <button
            name='favorite'
            value={favorite ? 'false' : 'true'}
            aria-label={
                favorite ? 'remove from favorites' : 'add to favorites'
            }
                >{favorite ?  "★" : "☆"}
            </button>
        </fetcher.Form>
    )
}
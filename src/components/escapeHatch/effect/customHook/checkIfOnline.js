import{useState,useEffect}from 'react'
export default function Status(){
    const[isOnline,setIsOnline]=useState(false)
    useEffect(()=>{
        function handleOnline(){
            setIsOnline(true)
        }
        function handleOffline(){
            setIsOnline(false)
        }
        window.addEventListener('online', handleOnline)
        window.addEventListener('offline', handleOffline)
        return ()=>{
            window.removeEventListener('online', handleOnline)
        window.removeEventListener('offline', handleOffline)
        }
    },[])


    return <h1>{isOnline ? '✅ Online': '❌ Offline'}</h1>
}
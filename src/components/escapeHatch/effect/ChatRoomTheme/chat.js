export function createConnection(serverUrl, roomId){
    let connectedCallback;
    let timeOut
    return {
        connect(){
            timeOut = setTimeout(()=>{
                if(connectedCallback){
                    connectedCallback()
                }
            }, 100)
        },

        on(event, callback){
            if(connectedCallback){
                throw Error('Cannot add the handler twice')
            }
            if(event !=='connected'){
                throw Error('Expected "Connected" event but received '+ event +' event.')
            }
            connectedCallback = callback
        },

        disconnect(){
            clearTimeout(timeOut)
        }

    }
}
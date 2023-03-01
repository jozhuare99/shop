import Box from './box'

export default function IntersectionObserver(){
    return(
        <>
            <LongSection />
            <Box />
            <LongSection />
          
        </>
    )
}

function LongSection(){
    const items = []
    for(let i = 0; i < 50; i++){
        items.push(<li key={i}>Item #{i} (keepScrolling)</li>)
    }
    return <ul>{items}</ul>
}
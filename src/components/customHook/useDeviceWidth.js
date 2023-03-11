import {useState, useEffect} from 'react'

function debounce(fn,delay){
	let timer;
	return function(...args){
		clearTimeout(timer);
		timer = setTimeout(()=>{
			fn(...args)
		},delay)
	}
}

export default function useDeviceWidth(){
	//const [width, setWidth] = useState(window.innerWidth)
	let [screeInfo, setSecreenInfo] = useState({mobile:true,tablet:true,monitor:true})
	const handleResize = debounce(()=>{
			let mobileScreens = window.innerWidth < 659;
      let tabScreens = window.innerWidth < 796 && window.innerWidth >= 659
      let moreFSs = window.innerWidth > 992
      setSecreenInfo({mobile:mobileScreens, tablet:tabScreens, monitor:moreFSs})
		//setWidth(window.innerWidth)
	}, 500)
	useEffect(()=>{
		window.addEventListener('resize', handleResize)
		return ()=>{
			window.removeEventListener('resize', handleResize)
		}
	},[])

	return screeInfo;
}

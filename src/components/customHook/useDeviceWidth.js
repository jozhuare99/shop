// import {useState, useEffect} from 'react'
// import { isEqual } from 'lodash';

// function debounce(fn,delay){
// 	let timer;
// 	return function(...args){
// 		clearTimeout(timer);
// 		timer = setTimeout(()=>{
// 			fn(...args)
// 		},delay)
// 	}
// }

// export default function useDeviceWidth(){

// 	let [screenInfo, setSecreenInfo] = useState({mobile:false,tablet:false,monitor:false})
// 	const handleResize = debounce(()=>{
// 		let mobileScreens = window.innerWidth < 659;
//       let tabScreens = window.innerWidth < 796 && window.innerWidth >= 659
//       let moreFSs = window.innerWidth > 992
//       let newScreentInfo = {
//       		mobile:mobileScreens, 
//       		tablet:tabScreens,
//       		monitor:moreFSs
//       }
      
//       if(!isEqual(screenInfo, newScreentInfo)){
//       setSecreenInfo(newScreentInfo)
//       }


// 	}, 500)
// 	useEffect(()=>{
// 		window.addEventListener('resize', handleResize)
// 		return ()=>{
// 			window.removeEventListener('resize', handleResize)
// 		}
// 	},[screenInfo])

// 	return screenInfo;
// }

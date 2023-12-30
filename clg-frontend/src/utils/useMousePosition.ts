import { useState,useEffect } from "react";


export default function useMousePosition(){
// export default function useMousePosition(ref:any,folref:any,{}){
    const [mousePointer,setMousePointer] = useState({x:0,y:0});
    const updateMousePosition = (e:MouseEvent)=>{
        setMousePointer({x:e.clientX,y:e.clientY})
        
        // return console.log(e);
    }
    // console.log(mousePointer);
    
    useEffect(()=>{
        // const {current} = ref;
        // const {folcurrent} = folref;
        window.addEventListener("mousemove",updateMousePosition)
        return ()=>{
            window.removeEventListener("mousemove",updateMousePosition)
        }
    },[])
    return mousePointer;
}


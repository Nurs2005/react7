import './Button.css'
export default function Button({width,height,borderRadius,valeu}){
    return(
        <button
        style={{width:`${width}`,height:`${height}`,borderRadius:`${borderRadius}`}}
         className='Button'>{valeu}</button>
    )
}
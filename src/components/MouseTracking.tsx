import { useState, useEffect } from "react"

export default function MouseTracking() {
    const [pointer, setPointer] = useState({
        x: 0,
        y: 0
    })
    const [activateTracking, setActivateTracking] = useState(false)

    const handleMouseTracking = (event: MouseEvent) => {
        setPointer({
            x: event.clientX,
            y: event.clientY
        })
    }

    useEffect(() => {
        if (activateTracking) {
            console.log('useEffect Activated ')
            window.addEventListener('mousemove', handleMouseTracking)
        }

        return (() => {
            console.log('useEffect Desactivated')
            window.removeEventListener('mousemove', handleMouseTracking)
            setPointer({
                x: 0,
                y: 0
            })
        })
    }, [activateTracking])

    return(
        <>
        <div style={{
            position: 'absolute',
            width: '40px',
            height: '40px',
            backgroundColor: 'red',
            borderRadius: '50%',
            top: '-20px',
            left: '-20px',
            pointerEvents: 'none',
            transform: `translate(${pointer.x}px, ${pointer.y}px)`
        }}/>
        <h1>MouseTracking</h1>
        <button onClick={() => {setActivateTracking(!activateTracking)}}>
            {activateTracking ? 'Desactivar':'Activar'} seguimiento del mouse
        </button>
        </>
    )
}
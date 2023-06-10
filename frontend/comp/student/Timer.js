import React from 'react'
import Countdown from 'react-countdown'

export default function Timer() {
    const time = sessionStorage.getItem('time')
    const timer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            return (<h1>Time Up</h1>)
        } else {
            return (<span>{hours}:{minutes}:{seconds}</span>)
        }
    }

    return (
        <>
            <h4>Timer</h4>
            <Countdown date={Date.now() + time * 1000} renderer={timer} />
        </>
    )
}

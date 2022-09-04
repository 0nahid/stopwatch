import { useEffect, useState } from "react"
import Controls from "../Controls/Controls"
import calculateTimer from "../helper/CalculateTimer"
import './Timer.css'
export default function Timer() {
    const [timeInMiliSeconds, setTimeInMiliSeconds] = useState<number>(0)
    const [timerArray, setTimerArray] = useState<Array<number | string>>([])
    useEffect(() => {
        let timeArray: Array<number | string> = calculateTimer(timeInMiliSeconds)
        console.log(timeArray);
        setTimerArray(timeArray)
    }, [timeInMiliSeconds])
    return (

        <main className="stopwatch-container">
            <section className="timer-display">
                <p id="hour">{timerArray[0]}</p>
                <span>:</span>
                <p id="minute">{timerArray[1]}</p>
                <span>:</span>
                <p id="second">{timerArray[2]}</p>
                <span>:</span>
                <p id="second">{timerArray[3]}</p>
            </section>
            <Controls setTimeInMiliSeconds={setTimeInMiliSeconds} />
        </main>


    )
}

import { useEffect, useState } from "react"
import Controls from "../Controls/Controls"
import calculateTimer from "../helper/CalculateTimer"
import './Timer.css'
export default function Timer() {
    const [timeInSecond, setTimeInSecond] = useState<number>(0)
    const [timerArray, setTimerArray] = useState<Array<number | string>>([])
    useEffect(() => {
        let timeArray: Array<number | string> = calculateTimer(timeInSecond)
        setTimerArray(timeArray)
    }, [timeInSecond])
    return (

        <main className="stopwatch-container">
            <section className="timer-display">
                <p id="hour">{timerArray[0]}</p>
                <span>:</span>
                <p id="minute">{timerArray[1]}</p>
                <span>:</span>
                <p id="second">{timerArray[2]}</p>
            </section>
            <Controls setTimeInSecond={setTimeInSecond} />
        </main>


    )
}

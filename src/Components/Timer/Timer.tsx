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

        <div>
            <div className="text-right   ">
                <button className="rotate-45 ">
                    <img className="h-10 w-10" src="https://img.icons8.com/ios-glyphs/452/github.png" alt="github" />
                </button>
            </div>
            <main className="stopwatch-container">
                <section className="timer-display mb-5">
                    <p className="text-4xl md:text-6xl" id="hour">{timerArray[0]}</p>
                    <span className="text-4xl md:text-6xl relative tracking-wide -mt-1">:</span>
                    <p className="text-4xl md:text-6xl" id="minute">{timerArray[1]}</p>
                    <span className="text-4xl md:text-6xl relative tracking-wide -mt-1">:</span>
                    <p className="text-4xl md:text-6xl" id="second">{timerArray[2]}</p>
                    <span className="text-4xl md:text-6xl relative tracking-wide -mt-1">:</span>
                    <p className="text-4xl md:text-6xl" id="second">{timerArray[3]}</p>
                </section>
                <Controls setTimeInMiliSeconds={setTimeInMiliSeconds} />
            </main>
        </div>


    )
}

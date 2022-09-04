import { useState } from "react";
type Props = {
    setTimeInMiliSeconds: Function
}
export default function Controls(props: Props) {
    const { setTimeInMiliSeconds } = props;
    const [intervalId, setIntervalId] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [isPaused, setIsPaused] = useState<boolean>(false);


    const handlePlayButton = (e: object) => {
        if (isRunning && !isPaused) {
            return;
        }
        setIsRunning(true);
        setIsPaused(false);
        let id = window.setInterval(() => {
            setTimeInMiliSeconds((prev: number) => prev + 10);
        }, 10);
        setIntervalId(id);


    }
    const handleStopButton = () => {
        setIsRunning(false);
        setIsPaused(false);
        clearInterval(intervalId);
    }

    const handleReset = () => {
        setTimeInMiliSeconds(0);
        setIsRunning(false);
        setIsPaused(false);
        clearInterval(intervalId);
    }

    return (
        <div>
            <button className="bg-green-300 px-3 md:px-5 py-1 border-4 border-green-300 mr-2 rounded-full" onClick={handlePlayButton} type="button">Play</button>
            <button className="bg-yellow-300 px-3  md:px-5 py-1 border-4 border-yellow-300 mr-2 rounded-full" onClick={handleStopButton} type="button">Stop</button>
            <button className="bg-red-400 px-3  md:px-5 py-1 border-4 border-red-400 rounded-full" onClick={handleReset} type="button">Reset</button>
        </div>
    )
}

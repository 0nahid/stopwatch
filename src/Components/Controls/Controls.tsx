import { useState } from "react";
type Props = {
    setTimeInSecond: Function
}
export default function Controls(props: Props) {
    const { setTimeInSecond } = props;
    const [intervalId, setIntervalId] = useState<number>(0);

    const handlePlayButton = (e: object) => {
        const id = window.setInterval(() => {
            setTimeInSecond((prev: number) => prev + 1);
        }
            , 1000);
        setIntervalId(id);

    };

    const handleStopButton = () => {
        clearInterval(intervalId);
    }

    const handleReset = () => {
        clearInterval(intervalId);
        setTimeInSecond(0);
    }

    return (
        <div>
            <button className="bg-green-300 px-5 py-1 border-4 border-green-300 mr-2 rounded-full" onClick={handlePlayButton} type="button">Play</button>
            <button className="bg-yellow-300 px-5 py-1 border-4 border-yellow-300 mr-2 rounded-full" onClick={handleStopButton} type="button">Stop</button>
            <button className="bg-red-400 px-5 py-1 border-4 border-red-400 rounded-full" onClick={handleReset} type="button">Reset</button>
        </div>
    )
}

import { Toaster } from 'react-hot-toast';

import Timer from "./Components/Timer/Timer";
import './index.css';

export default function App() {
    return (
        <div className="bg-slate-900/10 ">
            <Timer />
            <Toaster />
        </div>
    )
}

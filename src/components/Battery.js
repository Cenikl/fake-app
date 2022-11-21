import {useBattery} from "react-use";

export function PercentBattery() {
    const batteryState = useBattery();
    return Math.round(batteryState.level * 100);
}



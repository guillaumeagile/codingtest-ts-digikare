/// <reference path="CpuMonitor.ts";

import CpuMonitor from "./CpuMonitor";
import CpuMonitorMissing from "./CpuMonitorMissing";

export default class Client {

    private _cpuMon: CpuMonitor | CpuMonitorMissing;

    constructor(cpuMon: CpuMonitor | CpuMonitorMissing) {
        this._cpuMon = cpuMon;
    }

    AlertService(): boolean {
        //  TODO https://martinfowler.com/eaaCatalog/specialCase.html

        if (this._cpuMon as CpuMonitorMissing)
            return false
        else
            return ((this._cpuMon as CpuMonitor).Value > 90)
    }
}




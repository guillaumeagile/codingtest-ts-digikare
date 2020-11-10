/// <reference path="CpuMonitor.ts";

import CpuMonitor from "./CpuMonitor";

export default class Client {

    private _cpuMon: CpuMonitor | null;

    constructor(cpuMon: CpuMonitor | null) {
        this._cpuMon = cpuMon;
    }

    AlertService(): boolean {
        if (this._cpuMon != null) {
            this._cpuMon.Value > 90;
        }
        return 
    }
}




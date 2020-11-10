/// <reference path="CpuMonitor.ts";

import CpuMonitor from "./CpuMonitor";

export default class Client {

    private _cpuMon?: CpuMonitor;

    constructor(cpuMon?: CpuMonitor) {
        this._cpuMon = cpuMon;
    }

    AlertService(): boolean {
        //  TODO https://martinfowler.com/eaaCatalog/specialCase.html       
        if (!this._cpuMon)
            return false;
        return this._cpuMon!.Value > 90
    }
}




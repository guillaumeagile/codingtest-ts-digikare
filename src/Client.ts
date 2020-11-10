/// <reference path="CpuMonitor.ts";

import CpuMonitor, { NoCpuMonitor } from "./CpuMonitor";

export default class Client {

    private _cpuMon: any;

    constructor(cpuMon: CpuMonitor | NoCpuMonitor) {
        this._cpuMon = cpuMon;
    }

    AlertService(): boolean {
        //  TODO https://martinfowler.com/eaaCatalog/specialCase.html
        if (this._cpuMon in NoCpuMonitor)  //type guard 
            return false

        return this._cpuMon.Value > 90
    }
}




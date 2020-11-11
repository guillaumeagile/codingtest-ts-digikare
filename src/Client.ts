/// <reference path="CpuMonitor.ts";

import CpuMonitor, { MaybeCpuMonitor, NoCpuMonitor } from "./CpuMonitor";
import type AnyCpuMonitor from "./CpuMonitor";

export default class Client {

    private _cpuMon: any;

    constructor(cpuMon: MaybeCpuMonitor) {
        this._cpuMon = cpuMon;
    }

    AlertService(): boolean {
        //  TODO https://martinfowler.com/eaaCatalog/specialCase.html       
        if (this._cpuMon.NoValue !== undefined)
            return false;
        return this._cpuMon!.Value > 90
    }
}




/// <reference path="CpuMonitor.ts";

import CpuMonitor, { MaybeCpuMonitor, NoCpuMonitor } from "./CpuMonitor";
import type AnyCpuMonitor from "./CpuMonitor";

export default class Client {
    
    AddMonitor(cpuMon: MaybeCpuMonitor) {
        this._cpuMonList.push( cpuMon);
    }

    private _cpuMonList: any[] = [];

    constructor(cpuMon: MaybeCpuMonitor) {
        this._cpuMonList.push( cpuMon);
    }

    AlertService(): boolean {
        
        return this._cpuMonList.some( (cpuMon)=>{

        if (cpuMon.NoValue !== undefined)
            return false;
        return cpuMon!.Value > 90
        });
    }
}




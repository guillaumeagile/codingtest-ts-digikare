/// <reference path="CpuMonitor.ts";

import CpuMonitor from "./CpuMonitor";

export default class Client {

    private _cpuMon: CpuMonitor;

    constructor( cpuMon: CpuMonitor )
    {        
        this._cpuMon = cpuMon;
    }

    AlertService() : boolean {
        return false;
    }

}


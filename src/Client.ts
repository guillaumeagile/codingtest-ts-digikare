/// <reference path="CpuMonitor.ts";

import CpuMonitor from "./CpuMonitor";
import CpuMonitorMissing from "./CpuMonitorMissing";

export default class Client {

    private _cpuMonList: [ CpuMonitor | CpuMonitorMissing ];

    constructor(cpuMonList : [CpuMonitor | CpuMonitorMissing]) {
        this._cpuMonList = cpuMonList;
    }

    AlertService(): boolean {
        //  TODO https://martinfowler.com/eaaCatalog/specialCase.html
        for (let item of this._cpuMonList)  {
            if (item instanceof CpuMonitorMissing) {
                return false
            } else {
                return (item.Value > 90)
            }    
        };
        


    }
}




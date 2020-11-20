/// <reference path="CpuMonitor.ts";

import CpuMonitor from "./CpuMonitor";
import CpuMonitorMissing from "./CpuMonitorMissing";

export type  anyCpu = CpuMonitor | CpuMonitorMissing;

export default class Client {

    private _cpuMonList: [ anyCpu ];

    constructor(cpuMonList : [anyCpu]) {
        this._cpuMonList = cpuMonList;
    }

    AlertService(): boolean {
        let result = [] ;
        for (let item of this._cpuMonList)  {
            if (item instanceof CpuMonitorMissing) 
                result.push(false);
            else
                result.push (item.hasAlert());
        };
        return result.reduce( (previous, current) => {return previous || current} );
    }
}




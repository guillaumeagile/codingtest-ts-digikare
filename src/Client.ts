/// <reference path="CpuMonitor.ts";

import CpuMonitor from "./CpuMonitor";
import CpuMonitorMissing from "./CpuMonitorMissing";
import IExposeAlerts from "./IExposeAlerts";

export type  anyCpu = IExposeAlerts | CpuMonitorMissing;

export default class Client {

    private _cpuMonList: [ anyCpu ];

    constructor(cpuMonList : [anyCpu]) {
        this._cpuMonList = cpuMonList;
    }

    AlertService(): boolean {
        let result = [] ;
        for (let item of this._cpuMonList)  {
            if (item instanceof CpuMonitorMissing) //type guard
                result.push(false);
            else //type guard works also within conditional branches
                result.push (item.TemperatureAlert());
        };
        return result.reduce( (previous, current) => {return previous || current} );
    }
}




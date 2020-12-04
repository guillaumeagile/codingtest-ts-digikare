import IExposeAlerts from "./IExposeAlerts";

export default class CpuMonitor implements IExposeAlerts {
    private _value: number;  
    readonly _threshold ;
    static readonly DEFAULT_THRESHOLD = 90;

    public set Value(value: number) {
        this._value = value;
    }
    constructor(threshold : number = CpuMonitor.DEFAULT_THRESHOLD) {
        this._threshold = threshold;
        this._value = 0;
    }

    TemperatureAlert(): Promise<boolean> {
        // var p = new Promise<boolean>((resolve, reject)=> { resolve(  (this._value > this._threshold)) });
        // return p;
        return Promise.resolve(this._value > this._threshold);
    }

}

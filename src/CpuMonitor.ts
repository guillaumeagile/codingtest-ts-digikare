
export default class CpuMonitor {
    private _value: number;  
    readonly _threshold ;

    public set Value(value: number) {
        this._value = value;
    }

    public hasAlert(): boolean {
        return (this._value > this._threshold);
    }

    constructor(threshold : number = 90) {
        this._threshold = threshold;
        this._value = 0;
    }

}

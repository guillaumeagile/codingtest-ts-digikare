
export default class CpuMonitor {
    private _value: number;  
    readonly _threshold ;
    static readonly DEFAULT_THRESHOLD = 90;

    public set Value(value: number) {
        this._value = value;
    }

    public hasAlert(): boolean {
        return (this._value > this._threshold);
    }

    constructor(threshold : number = CpuMonitor.DEFAULT_THRESHOLD) {
        this._threshold = threshold;
        this._value = 0;
    }

}

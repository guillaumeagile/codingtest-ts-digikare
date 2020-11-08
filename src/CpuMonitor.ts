

export default class CpuMonitor
{
    private _value: number;
    public get Value(): number {
        return this._value;
    }
    public set Value(value: number) {
        this._value = value;
    }

    constructor() {
        this._value = 0;
    } 
    
}

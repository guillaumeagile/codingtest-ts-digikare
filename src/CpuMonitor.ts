export default class CpuMonitor {
    private _value: number;

    public get Value(): number {
        return this._value;
    }

    public set Value(value: number) {
        this._value = value;
    }

    public hasAlert(): boolean {
        return (this._value > 90);
    }

    constructor() {
        this._value = 0;
    }

}


export interface IActAsCpuMonitor
{
     Value: number ;
}


export default class CpuMonitor implements IActAsCpuMonitor
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

/*
export class NoCpuMonitor implements IActAsCpuMonitor
{   

    public get Value(): number {
        throw new Error('should never come here');
    }    

    constructor() {
    
    } 
    
}*/

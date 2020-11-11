
  namespace Guillaume  {

    export class CpuMonitor {
        private _value: number;

        public get Value(): number {
            return this._value;
        }
        public set Value(value: number) {
            this._value = value;
        }

        constructor(val: number) {
            this._value = val;
        }
    }

    export class NoCpuMonitor {
        public get Value(): number {
            throw new Error();
        }
        public NoValue: boolean = true;
    }

    export type MaybeCpuMonitor = NoCpuMonitor | CpuMonitor;

    export function createMonitor(val?: number): MaybeCpuMonitor {
        if (!val)
            return new NoCpuMonitor();
        return new CpuMonitor(val!);
    }
}
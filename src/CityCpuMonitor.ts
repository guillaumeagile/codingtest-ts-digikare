import IExposeAlerts from "./IExposeAlerts";

export default class CityCpuMonitor implements IExposeAlerts {

    static readonly DEFAULT_THRESHOLD = 90;

    TemperatureAlert(): boolean {
        throw new Error("Method not implemented.");
    }

}
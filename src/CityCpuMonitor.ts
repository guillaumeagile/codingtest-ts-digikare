import IExposeAlerts from "./IExposeAlerts";


async function http(
    request: RequestInfo
): Promise<any> {
    const response = await fetch(request);
    const body = await response.json();
    return body;
}

export default class CityCpuMonitor implements IExposeAlerts {

    static readonly DEFAULT_THRESHOLD = 90;


    TemperatureAlert(): boolean {
        throw new Error("Method not implemented.");
        const data = await http(
            "https://jsonplaceholder.typicode.com/todos/71"
        );

        return data.id > CityCpuMonitor.DEFAULT_THRESHOLD;

    }

}
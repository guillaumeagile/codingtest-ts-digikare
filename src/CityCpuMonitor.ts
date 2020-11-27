import IExposeAlerts from "./IExposeAlerts";
//import * as fetch from "../node_modules/node-fetch/";

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
        let temperature = 99999;
        const data = http(
            "https://jsonplaceholder.typicode.com/todos/99"
        ).then( res=> {
            console.log(res.id);             
            temperature= res.id;
            } );

        console.log(temperature);
        return temperature > CityCpuMonitor.DEFAULT_THRESHOLD;

    }

}
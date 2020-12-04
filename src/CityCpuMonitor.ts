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

    TemperatureAlert(): Promise<boolean> {
  
        return http(
            "https://jsonplaceholder.typicode.com/todos/99"
        ).then( res=> {
            console.log(res.id);             
            let temperature= res.id;
            return   temperature > CityCpuMonitor.DEFAULT_THRESHOLD;
            } );
    }
}
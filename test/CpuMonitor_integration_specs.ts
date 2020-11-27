import Client, { anyCpu } from "../src/Client";
import {expect} from 'chai';
import CityCpuMonitor from "../src/CityCpuMonitor";

describe('Cpu Monitor', () => {

    let sut: Client;    

    describe('1st feature', () => {
        it('integration should  alert if the temperature of the city  is over 90', (): void => {
            //ARANGE
            sut = new Client([new CityCpuMonitor()]);            
            //ACT
            let result: boolean = sut.AlertService();
            //ASSERT
            expect(result).to.equal(false);
            
        });
    });
});
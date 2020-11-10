import Client from "../src/Client";
import CpuMonitor from "../src/CpuMonitor";
import {expect} from 'chai';

describe('Cpu Monitor', () => {

    let sut: Client;


    describe('1st feature', () => {
        it('should not alert if no CPU is installed', (): void => {
            //ARANGE
            sut = new Client();
            
            //ACT
            let result: boolean = sut.AlertService();
            //ASSERT
            expect(result).to.equal(false);
            
        });

    });
});

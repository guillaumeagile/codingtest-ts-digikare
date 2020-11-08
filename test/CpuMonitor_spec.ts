import Client from "../src/Client";
import CpuMonitor from "../src/CpuMonitor";
import {expect} from 'chai';

describe('Cpu Monitor', () => {

    let sut: Client;


    describe('1st feature', () => {
        it('Should failed', (): void => {
            //ARANGE
            sut = new Client();
            let cpuMon = new CpuMonitor();
            //ACT
            let result: boolean = sut.AlertService();
            //ASSERT
            expect(result).to.equal(false);
            expect(CpuMonitor).to.not.be.null;
        });

    });
});

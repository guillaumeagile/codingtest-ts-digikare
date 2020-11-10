import Client from "../src/Client";
import CpuMonitor from "../src/CpuMonitor";
import {expect} from 'chai';

describe('Cpu Monitor', () => {

    let sut: Client;


    describe('1st feature', () => {
        it('should not alert if no CPU is installed', (): void => {
            //ARANGE
            sut = new Client(null);
            
            //ACT
            let result: boolean = sut.AlertService();
            //ASSERT
            expect(result).to.equal(false);
            
        });


        it('should alert if one CPU is installed and over 90', (): void => {
            //ARANGE
            var cpuMonitor = new CpuMonitor();
            cpuMonitor.Value=91;
            sut = new Client(cpuMonitor);
            
            //ACT
            let result: boolean = sut.AlertService();
            //ASSERT
            expect(result).to.equal(true);
            
        });

    });
});

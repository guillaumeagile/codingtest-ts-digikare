import Client, { anyCpu } from "../src/Client";
// import DEFAULT_THRESHOLD from "../src/CpuMonitor";
import CpuMonitor from "../src/CpuMonitor";
import CpuMonitorMissing from "../src/CpuMonitorMissing";
import {expect} from 'chai';

describe('Cpu Monitor', () => {

    let sut: Client;
    // const DEFAULT_THRESHOLD = 90;

    describe('1st feature', () => {
        it('should not alert if no CPU is installed', (): void => {
            //ARANGE
            sut = new Client([new CpuMonitorMissing()]);
            
            //ACT
            let result: boolean = sut.AlertService();
            //ASSERT
            expect(result).to.equal(false);
            
        });


        it('should alert if one CPU is installed and over 90', (): void => {
            //ARANGE
            var cpuMonitor = new CpuMonitor();
            cpuMonitor.Value=CpuMonitor.DEFAULT_THRESHOLD + 1;
            sut = new Client([cpuMonitor]);
            
            //ACT
            let result: boolean = sut.AlertService();
            //ASSERT
            expect(result).to.equal(true);
            
        });



        it('should alert if one CPU is installed and over 90 and another is missing', (): void => {
            //ARANGE
            var cpuMonitor = new CpuMonitor();
            cpuMonitor.Value = CpuMonitor.DEFAULT_THRESHOLD + 1;
            var cpuMonitor2 = new CpuMonitorMissing();
            let all_cpu: [anyCpu] = [cpuMonitor];
            all_cpu.push(cpuMonitor2);
            sut = new Client(all_cpu);
            
            //ACT
            let result: boolean = sut.AlertService();
            //ASSERT
            expect(result).to.equal(true);
            
        });

        it('should not alert if any CPU installed with specific threshold', (): void => {
            //ARANGE
            var cpuMonitor = new CpuMonitor(CpuMonitor.DEFAULT_THRESHOLD + 2);
            cpuMonitor.Value = CpuMonitor.DEFAULT_THRESHOLD + 1;

            var cpuMonitor2 = new CpuMonitor();
            cpuMonitor2.Value = CpuMonitor.DEFAULT_THRESHOLD;
            
            let allCpu: [anyCpu] = [cpuMonitor];
            allCpu.push(cpuMonitor2);
            
            sut = new Client(allCpu);
            
            //ACT
            let result: boolean = sut.AlertService();
            //ASSERT
            expect(result).to.equal(false);
            
        });

    });
});

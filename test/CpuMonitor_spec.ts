import CpuMonitor from "../src/CpuMonitor";
// import Client from "../src/Client";
import {expect} from 'chai';

describe('Cpu Monitor', () => {

    let sut: CpuMonitor;


    describe('1st feature', () => {
        it('Should failed', () => {
            //ARANGE
            sut.Value = 0;

            //ACT
            let result: number = sut.Value;
            //ASSERT
            expect(result).to.equal("99");
        });

    });
});

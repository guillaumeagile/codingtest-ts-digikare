import cpuMonitor from "../src/cpuMonitor";
import {expect} from 'chai';

describe('Cpu Monitor', () => {

    var sut: cpuMonitor;


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

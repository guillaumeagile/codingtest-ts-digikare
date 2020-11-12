import Client from "../src/Client";

import {expect} from 'chai';
import { createMonitor } from "../src/CpuMonitor";

describe('Cpu Monitor', () => {

    let sut: Client;


    describe('1st feature', () => {
        it('should not alert if no CPU is installed', (): void => {
            //ARANGE
            sut = new Client(createMonitor() );
            
            //ACT
            let result: boolean = sut.AlertService();
            //ASSERT
            expect(result).to.equal(false);
            
        });


        it('should alert if one CPU is installed and over 90', (): void => {
            //ARANGE            
            sut = new Client(createMonitor(99));
            
            //ACT
            let result: boolean = sut.AlertService();
            //ASSERT
            expect(result).to.equal(true);
            
        });

        it('should alert if one CPU is installed and over 90 and another is not responding', (): void => {
            //ARANGE            
            sut = new Client(createMonitor());
            sut.AddMonitor(createMonitor(99));
            //ACT
            let result: boolean = sut.AlertService();
            //ASSERT
            expect(result).to.equal(true);
            
        });

    });
});

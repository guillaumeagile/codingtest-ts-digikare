/// <reference path="../src/CpuMonitor.ts"/>
/// <reference path="../src/Client.ts"/>

import {expect} from 'chai';


describe('Cpu Monitor', () => {

    let sut: Guillaume.Client;


    describe('1st feature', () => {
        it('should not alert if no CPU is installed', (): void => {
            //ARANGE
            sut = new Guillaume.Client(Guillaume.createMonitor() );
            
            //ACT
            let result: boolean = sut.AlertService();
            //ASSERT
            expect(result).to.equal(false);
            
        });


        it('should alert if one CPU is installed and over 90', (): void => {
            //ARANGE
            
            sut = new Guillaume.Client(Guillaume.createMonitor(99));
            
            //ACT
            let result: boolean = sut.AlertService();
            //ASSERT
            expect(result).to.equal(true);
            
        });

    });
});

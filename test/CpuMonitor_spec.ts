import Client from "../src/Client";
import {expect} from 'chai';

describe('Cpu Monitor', () => {

    let sut: Client;


    describe('1st feature', () => {
        it('Should failed', (): void => {
            //ARANGE
            sut = new Client();
            //ACT
            let result: boolean = sut.AlertService();
            //ASSERT
            expect(result).to.equal(false);
        });

    });
});

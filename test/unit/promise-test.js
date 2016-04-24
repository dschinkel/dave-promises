import DavePromiseImpl from '../../src/davePromiseImpl'
import {expect} from 'chai';

const DavePromise = DavePromiseImpl;

describe('Promise', () => {

    it('should callback when resolve is invoked', () => {
        DavePromise(resolve => {
            resolve('hi!');
        }).then(value => {
            expect(value).to.equal('hi!');
        });
    });

});

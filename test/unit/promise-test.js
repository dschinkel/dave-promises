import {DavePromiseImpl} from '../../DavePromiseImpl'
import {expect} from 'chai';

const DavePromise = DavePromiseImpl;

describe('Promise', () => {

    it('should callback when resolve is invoked', () => {
        DavePromise = new DavePromiseImpl(resolve => {
            resolve('hi!');
            }).then(value => {
                expect(value).to.equal('hi!');
            });
    });

});

import Impl from '../../src/davePromiseImpl'
import {expect} from 'chai';

const DavePromise = Impl;

describe('Promise', () => {

    it('should callback when resolve is invoked', () => {
        var testPromise = new DavePromise(resolve => {
            resolve('hi!');
        }).then(value => {
            expect(value).to.equal('hi!');
        });
    });

});

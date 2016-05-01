import Impl from '../../src/davePromiseImpl'
import {expect} from 'chai';

const DavePromise = Impl;

describe('Promise', () => {
    it('should callback when resolve is invoked', done => {
        var promise = new DavePromise(resolve => {
            resolve('hi!');
        });

        promise.then(value => {
            expect(value).to.equal('hi!');
            done();
        })
    });
});
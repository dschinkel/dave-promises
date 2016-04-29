import Impl from '../../src/davePromiseImpl'
import {expect} from 'chai';

const DavePromise = Impl;

describe('Promise', () => {
    it.skip('should callback when resolve is invoked', () => {
        new DavePromise(resolve => {
            resolve('hi!');
        }).then(value => {
            expect(value).to.equal('hi!');
        });
    });

    it('should callback when resolved at a later time', done => {
        new DavePromise(resolve => {
            setTimeout(() => resolve('hi!'), 2800);
        }).then(value => {
            expect(value).to.equal('hi!');
            done();
        });
    });

});
import Impl from '../../src/davePromiseImpl'
import {expect} from 'chai';

const DavePromise = Impl;

describe('Promise', () => {
    it('should callback when resolve is invoked', done => {
        new DavePromise(resolve => {
            resolve('hi!');
        }).then(value => {
            expect(value).to.equal('hi!');
            done();
        })
    });

    it('should callback when resolved at a later time', done => {
        new DavePromise(resolve => {
            setTimeout(() => resolve('hi!'), 1000);
        }).then(value => {
            expect(value).to.equal('hi!');
            done();
        });
    });

    it('should handle reject correctly', done => {
        var error = new Error('something went horribly wrong because Dave M. Wrote this code!');

        new DavePromise((resolve, reject) => {
            reject(error);
        }).then(() => {
            throw new Error('This should not be called');
        }, err => {
            expect(err).to.equal(error);
            done();
        });
    });

});
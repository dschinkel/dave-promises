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
            setTimeout(() => resolve('hi!'), 1500);
        }).then(value => {
            expect(value).to.equal('hi!');
            done();
        });
    });

});
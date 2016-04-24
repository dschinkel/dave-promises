import Impl from '../../src/davePromiseImpl'
import {expect} from 'chai';

// using a const so we can swap out diff promise implementations
const DavePromise = Impl;

describe('Promise', () => {

    it('should callback when resolve is invoked', () => {
        new DavePromise(resolve => {
            resolve('hi!');
        }).then(value => {
            expect(value).to.equal('hi!');
        });
    });

    it('should callback when resolved at a later time', done => {
        new DavePromise(resolve => {
            setTimeout(() => resolve('hi!'), 4000);
        }).then(value => {
            expect(value).to.equal('hi!');
            done();
        });
    });

});

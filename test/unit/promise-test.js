import Promise from '../../src/promise'
import {expect} from 'chai';

const DavePromise = Promise;

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
        var error = new Error('something went horribly wrong!');

        new DavePromise((resolve, reject) => {
            reject(error);
        }).then(() => {
            throw new Error('This should not be called');
        }, err => {
            expect(err).to.equal(error);
            done();
        });
    });

    it('should have an all that handles multiple promises', done => {
        var sum = 0;
        var promises = [new DavePromise(resolve => sum += 2), new DavePromise(resolve => sum += 3)];

        DavePromise.all(promises).then(() => {
            expect(sum).to.equal(5);
            done();
        });
    });

    it('should properly handle callbacks that throw errors', done => {
        var error = new Error('something went horribly wrong!');

        new DavePromise((resolve, reject) => {
            throw error;
        }).then(() => {
            throw new Error('This should not be called');
        }, err => {
            expect(err).to.equal(error);
            done();
        });
    });

    it('should be able to chain promises', done => {
        new DavePromise((resolve) =>{
            resolve('T');
        }).then(value =>{
            return value + "D";
        }).then(value => {
            return value + "D";
        }).then(value =>{
            expect(value).to.equal("TDD");
            done();
        })
    });

});

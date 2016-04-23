'use strict';

let chai = require('chai'),
    expect = chai.expect();

describe('Promise', () => {

    it('should callback when resolve is invoked', () => {
        const DavePromise = new Promise(resolve => {
            resolve('hi!');
            }).then(value => {
                expect(value).to.equal('hi!');
            });
    });

});

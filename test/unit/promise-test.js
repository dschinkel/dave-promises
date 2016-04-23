'use strict';

import {DavePromise} from '../../DavePromiseImpl'
let chai = require('chai'),
    expect = chai.expect();

describe('Promise', () => {

    it('should callback when resolve is invoked', () => {
        const DavePromise = new DavePromiseImpl(resolve => {
            resolve('hi!');
            }).then(value => {
                expect(value).to.equal('hi!');
            });
    });

});

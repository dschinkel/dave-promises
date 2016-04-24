import DavePromiseImpl from '../../src/davePromiseImpl'
import {expect} from 'chai';

const DavePromise = DavePromiseImpl;

describe('Promise', () => {
    /* resolve => {
            resolve('hi!')
        }

        is equiv to:

        function(resolve) { resolve('hi') }
    */

    // value
    it('should callback when resolve is invoked', () => {
        DavePromise(resolve => {
            resolve('hi!');
        });
    });

    //it('should be able to handle the returned value'){
    //    DavePromise(resolve => {
    //        resolve('hi!');
    //    }).then(value => {
    //        expect(value).to.equal('hi!');
    //    });
    //}

});

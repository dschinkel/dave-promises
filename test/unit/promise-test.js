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

    /*
        Testing asynchronous code with Mocha could not be simpler! Simply invoke the callback when your test is complete.
        By adding a callback (usually named done) to it() Mocha will know that it should wait for completion.
     */


    /*
        Below mocha function is equiv to:

        it('...', function(done){

            done();
            //call done somewhere in here to let mocha know it can stop waiting
        };

        resolve => {
            setTimeout(() => resolve('hi!'), 9000);
        }

        equiv:

        function(resolve, done){
            setTimeout(() => resolve('hi', 9000);
            done()
        }

     */



    it('should callback when resolved at a later time', done => {
        new DavePromise(resolve => {
            setTimeout(() => resolve('hi!'), 4000);
        }).then(value => {
            expect(value).to.equal('hi!');
            done();
        });
    });

});

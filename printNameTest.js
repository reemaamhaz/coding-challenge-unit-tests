const assert = require('chai').assert;
const app = require('../app');

printOutFirstNamesResult = app.printOutFirstNames();

describe('app', function(){
   describe('printOutFirstNames()', function(){
        it('should print out the first names', function(){
            assert.equal(printOutFirstNamesResult, 'Clark');
        });
    });
});

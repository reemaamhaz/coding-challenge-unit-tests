const expect = require('chai').expect;
const app = require('../app');

splitFullNameResult = app.splitFullName();

describe('app', function(){
   describe('splitFullName()', function(){
        it('should split the names', function(){
            expect(splitFullNameResult).to.include('Creed');
        });

        it('return first names only', function(){
            expect(splitFullNameResult).to.not.include('Bratton');
        });
    });
});

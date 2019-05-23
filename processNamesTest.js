const expect = require('chai').expect;
const app = require('../app');

processAllEmployeesResult = app.processAllEmployees();

describe('app', function(){
    describe('processAllEmployees()', function(){
        it('should process the employees and populate namesLeft', function(){ 
            expect(processAllEmployeesResult).to.include('Kelly Kapoor');
        });
    });
});

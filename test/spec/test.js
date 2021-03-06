/* global describe, it */

(function () {
    'use strict';
 
    describe('A Collection constructor', function () {
        describe('when run', function () {
            it('should return a new object', function () {
              var students = new Collection;
 
              expect(students.constructor.name).to.equal("Collection");
            });
 
            it('stores its first param in a property called models', function(){
              var toBeAdded = [{name: 'Bower', id: '1'},{name: 'Jack', id:'2'}]
              var students = new Collection(toBeAdded)
              
              expect(students.models).to.be.a('Array');
              expect(students.models[1].name).to.equal('Jack');
            });
 
        });
    });
 
    describe("A Collection instance", function(){
      describe("has a .find() method",function(){
        it("should return an object when given an id that is present in the models", function(){
          var students = new Collection([{name: 'Jim', id: '99'}]);

          expect(students.find('99')).to.deep.equal({name: 'Jim', id: '99'})
        });
 
        it("should not return an object when that id is not present in the models", function(){
          var students = new Collection([{name: 'Jim', id: '99'}]);

          expect(students.find('1')).to.not.equal({name: 'Jim', id: '99'});
        });
 
        it("should return undefined when that id is not present in the models", function(){
          var students = new Collection([{name: 'Jim', id: '99'}]);

          expect(students.find('1')).to.equal(undefined);
        });
 
        it("should throw an error when given an argument other than a string", function(){
          var students = new Collection([{name: 'Jim', id: '99'}]);

          expect(function(){students.find(1)}).to.throw(Error);
          expect(function(){students.find({})}).to.throw(Error);
          expect(function(){students.find([])}).to.throw(Error);
        });
      });



// •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••


 
      describe("has a .add() method", function(){
        it("should add the object it's given to the models property", function () {
          var students = new Collection([{name: 'Jim', id: '99'}]);
          students.add({name: 'Jeremy', id: '29'});

          expect(students.models[1]).to.deep.equal({name: 'Jeremy', id: '29'});
        });

        it("should return a value of a + b", function(){
    
          expect(add(4, 6)).to.equal(10);
        });

        it("should increase the models property's length by 1", function () {
          var students = new Collection([{name: 'Jim', id: '99'}]);
          var lengthBeforeWeAddSteve = this.models.length;        // Why is this not mutating this.models.length
          students.add({name: 'steve', id: '2'});

          expect(this.models.length).is.equal(lengthBeforeWeAddSteve +1);
        });
        
        it("should only accept a single object as an argument", function () {
          var students = new Collection([{name: 'Jim', id: '99'}]);

          expect(function(){students.add([])}).to.throw(Error);
          expect(function(){students.add(5)}).to.throw(Error);
          expect(function(){students.add('string')}).to.throw(Error);
        });

        it("should not accept an empty object as an argument", function () {
          var students = new Collection([{name: 'Jim', id: '99'}]);

          expect(function(){students.add({})}).to.throw(Error);                   // This function is just referencing and not invoking.
        });

        it("should throw an error when given an object without an id property", function () {
          var students = new Collection([{name: 'Jim', id: '99'}]);

          expect(function(){students.add({name: 'Jim', hobby: 'woodworking'})}).to.throw(Error);
        });
      });



// •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••


 
      describe("has a .remove() method", function(){
        it("should, when given an id, remove the corresponding object from the models property")
        it("should decrease the models property's length by 1");
        it("should only accept a single string as an id argument");
        it("should return true on successful removal");
      });

      describe("has a .push() method",function(){
        it("should, when given an id, remove the corresponding object from the models property")
        it("should decrease the models property's length by 1");
        it("should only accept a single string as an id argument");
        it("should return true on successful removal");
      });


      describe("has a .length(value)",function(){
        it("should, when given an id, remove the corresponding object from the models property")
        it("should decrease the models property's length by 1");
        it("should only accept a single string as an id argument");
        it("should return true on successful removal");
      });

      describe("I are is going crazy I don't understand",function(){
        it("should have a default score of 0", function(){
          var quiz = new Quiz;
          expect(quiz.score).to.equal(0);
        });

        it("should have a title", function() {
          var quiz = new Quiz('My Testing Learning Abilities are elementary');
          expect(quiz.title).to.be.equal('Testing');
        });

        it("should only accept a single string as an id argument");
        it("should return true on successful removal");
        it("should decrease the models property's length by 1");
        it("should only accept a single string as an id argument");
        it("should return true on successful removal");
      });
    });
})();
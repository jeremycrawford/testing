/* global describe, it */

(function () {
    'use strict';

    describe('A Collection constructor', function () {
        describe(', when run', function () {
            it('should return a new object', function () {
              var students = new Collection;

              expect(students.constructor.name).to.equal("Collection");
            });

            it('stores its first parameter in a property called models', function () {
              var toBeAdded = [{name: 'Bower', id: '1'}, {name: 'Jack', id: '2'}]
              var students = new Collection(toBeAdded);

              expect(students.models).to.be.a('Array');
              expect(students.models[1].name).to.equal('Jack');
            });

        });
    });

    describe('A Collection instance', function () {
        describe('has a .find() method', function () {
          it('should return an object when given an id that is present in the models');
          it('should not return an object when that id is not present in the models');
          it('should return undefined when that id is not present');

        });

        describe('has a .add() method', function () {
          it('should add the object its given to the models property');
        });

        describe('has a .remove() method', function () {
          it('should remove the object its given to the models property')
        })
      })     
})();



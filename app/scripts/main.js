console.log('\'Allo \'Allo!');
 
function Collection (models) {
  this.models = models || [];
 
  this.find = function(id) {
    var result;
 
    if (typeof(id) != 'string') {
      throw new Error("Whoops!");
    }
 
    this.models.forEach(function(value, index){
      if (value.id == id) {
        result = value;
      }
    });
 
    if (result) {
      return result;
    }
  }
  
// .add function start •••••••••••••••••••••••••••

  this.add = function (objectLiteral) {

    if (typeof(objectLiteral) != 'object') {
      throw new Error('All is lost!');
    }

    // if (_.has(model, 'id') === false) 
    //   throw new Error("Shit");

    // if (arguments.length > 1)
    //   throw new Error("Something something something dark side.")

  this.models.push(objectLiteral);
  }

};

















// function Quiz (Testing) {
//   this.score = 0;
//   this.title = 'Testing';
// };


// function add (a, b) {
//   return a + b;
// };

    
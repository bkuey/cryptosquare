$(document).ready(function() {
  $("#mainform").submit(function(event){
    event.preventDefault();
    var input = $("#input").val();
    var result = cryptosq(input);
    $(".result").text(result).show();
  });
});

function cryptosq(secret) {
  secret = secret.replace(/\s+|!|\?|\.|\'|,/g,"");
  var cols = Math.floor(Math.sqrt(secret.length));
  var rows = Math.ceil(Math.sqrt(secret.length));
  var array = [];
  var index = 0;
  for (var row = 0; row < rows; row++) {
    array[row] = [];
     for (var col = 0; col < cols; col++) {
       array[row][col] = secret[index];
       index ++;
     }
   }
   console.log(array);
   var result = "";
   var index2 = 0;
   for (var col = 0; col < cols; col++) {
     for (var row = 0; row < rows; row++) {
       if  (array[row][col]) {
         result += array[row][col];
         index2++;
         if ((index2) % 5 === 0) {
           result += " ";
         }
       }
     }
   }
   return result;
}

module.exports = function check(str, bracketsConfig) {
  // your solution
  
  var bracketsToEscapeInRegexp = new Set();
  bracketsToEscapeInRegexp.add("{").add("}");
  bracketsToEscapeInRegexp.add("(").add(")");
  bracketsToEscapeInRegexp.add("[").add("]");
  bracketsToEscapeInRegexp.add("|").add("|");
  var previousStrLength = 0;

  while (previousStrLength !== str.length && str.length > 0) {

      previousStrLength = str.length; 

      for (var i = 0; i < bracketsConfig.length; i++) {
          var pair = bracketsConfig[i];
          var regExpression = '';
          if (bracketsToEscapeInRegexp.has(pair[0])) {
              regExpression += '\\';
          }
          regExpression += pair[0];
          if (bracketsToEscapeInRegexp.has(pair[1])) {
              regExpression += '\\';
          }
          regExpression += pair[1];
          str = str.replace(new RegExp(regExpression, 'gi'), ''); 
      }
  }

  return str.length === 0;
}

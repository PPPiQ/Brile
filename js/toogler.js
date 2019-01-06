let docStyle = document.documentElement.style;


function switchVisibility(fromElementId,toElementId){
  toogleVisibilityOf(fromElementId);
  toogleVisibilityOf(toElementId);
}

function toogleVisibilityOf (elementId) {
  var elements = document.getElementsByClassName(elementId);
  for (element of elements) {
    element.hidden = !element.hidden ;
  }
  return "done";
}

function toogleColor () {
  //we check if there is parameter overide created
  const lightPurple = '--light-purple';
  const darkPurple = '--dark-purple';
  const incementValue = '0a0a0a';

   var darkPurpleState = docStyle.getPropertyValue(darkPurple);
   var lightPurpleState = docStyle.getPropertyValue(lightPurple);


     if (isNotSet(darkPurpleState)) {
       setProp(darkPurple,'#111111' );
     }

     if (isNotSet(lightPurpleState)) {
       setProp(lightPurple,'#ffaacc' );
     }

      colorChanger(darkPurple, incementValue);
      colorChanger(lightPurple, incementValue);
}

function isNotSet(propName) {
     return (propName === NaN || propName === '' || propName === undefined) ? true : false;
}

function setProp (propName, strHexColorRepresentation) {
     docStyle.setProperty(propName, strHexColorRepresentation); //if empty or not existant we create one with black as starting
}


function colorChanger(property, incementValue) {
  var currentColor = docStyle.getPropertyValue(property);
  currentColor= currentColor.substr(1); // cut of # from #000000
  var newColor = addHexColor(currentColor,incementValue); //we add
  if (newColor.length > 6) {
      newColor = newColor.substr(0,6); // if number finish greater then 6 digit we cut last one geting most meaning
    }
  docStyle.setProperty(property,'#'+ newColor); // set the color to new one
}

function addHexColor(c1, c2) {
  var hexStr = (parseInt(c1, 16) + parseInt(c2, 16)).toString(16);
  while (hexStr.length < 6) { hexStr = '0' + hexStr; } // Zero pad.
  return hexStr;
}

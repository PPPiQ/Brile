function switchVisibility(fromElementId,toElementId){
  toogleVisibilityOf(fromElementId);
  toogleVisibilityOf(toElementId);
}

function toogleVisibilityOf (elementId) {
  //visible = visibilityToogler(visible);

  var elements = document.getElementsByClassName(elementId);
  console.log(elements);
  for (element of elements) {
  element.hidden = !element.hidden ;
  console.log("visibility of" + elementId + " is now : " + element.hidden);
  }
  return "done";
}

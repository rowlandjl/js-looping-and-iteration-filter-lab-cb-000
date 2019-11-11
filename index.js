function findMatching(drivers, str) {
  return drivers.filter(function(driver) {
    return driver.toLowerCase() == str.toLowerCase();
  });
}


function fuzzyMatch(drivers, str) {
  return drivers.filter(function(driver) {
    return driver.slice(0,str.length) == str;
  });
}


function matchName(drivers, str) {
  
}
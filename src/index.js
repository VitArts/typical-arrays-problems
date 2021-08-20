
exports.min = function min (array = 0) {
  if (!array.length) {
    return 0
  }

  const min = Math.min.apply(null, array);

  return min;
}

exports.max = function max (array = 0) {


  if (!array.length) {
    return 0
  }

  const max = Math.max.apply(null, array);
  return max;
}

exports.avg = function avg (array = 0) {

if (!array.length) {
  return 0
}

  let avg = 0
  for(let i = 0; i < array.length; i++) {
    avg += array[i]
    
  }
  
  return avg / array.length
}
 
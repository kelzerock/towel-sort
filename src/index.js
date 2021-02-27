
// You should implement your task here.

module.exports = function towelSort (matrix) {
if(matrix === undefined){return []}
if(matrix.length===0){return []}

for(let i=0; i<matrix.length; i++){
  if((i+2)%2===0){
    matrix[i].sort(sortingGrow)
  } else { matrix[i].sort(sorting)}
}

  matrix = matrix.join(',').split(',')
  function f(v,i,a){
   a[i]=Number(a[i])
  }
 matrix.forEach(f)
 console.log(matrix)
  

function sortingGrow(a,b){
  if(a>b){return 1}
  if(a==b){return 0}
  if(a<b){return -1}
}
function sorting(a,b){
  if(a<b){return 1}
  if(a==b){return 0}
  if(a>b){return -1}
}

  return matrix;
}

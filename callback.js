let numbers = [55, 21, 100, 79, 43, 88, 60];
function sorting(array){
    let sorted = array.sort(function (x, y){
        return y - x;
    });
    console.log(sorted);
}

function addNumber(array, callback){
    array.push(37);
    callback(array);
}

addNumber(numbers, sorting);

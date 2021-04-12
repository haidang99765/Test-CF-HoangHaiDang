var arr1 = [1, 2, 'a'];
var arr2 = [1, 3, 'b'];

function compare(arr1, arr2) {
    var arr3 = [];
    for (var i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i]) == true) {
            arr3.push(arr1[i]);
        }
    }

    var arr4 = [];
    for (var i = 0; i < arr1.length; i++) {
        if (arr3.includes(arr1[i]) == false) {
            arr4.push(arr1[i]);
        }
    }

    for (var i = 0; i < arr2.length; i++) {
        if (arr3.includes(arr2[i]) == false) {
            arr4.push(arr2[i]);
        }
    }
    return arr4;
}
console.log('Mảng 1: ', arr1);
console.log('Mảng 2: ', arr2);
console.log ('Mảng của sau khi được gộp: ', compare(arr1, arr2));
//includes -- là 1 phương thức được sử dụng để kiểm tra phần tử đã cho có trong 1 mảng hay không
//trả về true hoặc false/ true tức là có phần tử đó trong mảng, false ngược lại



// var arr1 = prompt('Nhập mảng 1: ').split(',');
// var arr2 = prompt('Nhập mảng 2: ').split(',');

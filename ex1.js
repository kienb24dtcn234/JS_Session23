let numbers = prompt("Mời nhập vào các số, cách nhau bởi dấu phẩy").split(",").map(Number);  
let result = [];  
for (let i = 0; i < numbers.length; i++) {  
    if (numbers[i] >= 10) {  
        result.push(numbers[i]);  
    }  
}  
if (result.length > 0) {  
    alert(result.join(" "));  
} else {  
    alert("Không có số nào lớn hơn 10");  
}  
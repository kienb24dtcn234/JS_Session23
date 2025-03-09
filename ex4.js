let array = prompt("Mời nhập vào mảng, cách nhau bởi dấu phẩy").split(",");  
let count = 0;  
for (let i = 0; i < array.length; i++) {  
    if (!isNaN(array[i]) && array[i] !== "") {  
        count++;  
    }  
}  
if (count > 0) {  
    alert(count);  
} else {  
    alert("Không có ký tự số trong mảng.");  
}  
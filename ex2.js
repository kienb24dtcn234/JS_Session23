let number = prompt("Mời nhập vào dãy số, cách nhau bởi dấu phẩy").split(",").map(Number);  
if (number.length === 0) {  
    alert("Không có số lớn nhất");  
} else {  
    let a = number[0];  
    let viTri = 0;  

    for (let i = 1; i < number.length; i++) {  
        if (a < number[i]) {  
            a = number[i];  
            viTri = i;  
        }  
    }  
    alert("Số lớn nhất: " + a + "\nVị trí: " + viTri);  
}  
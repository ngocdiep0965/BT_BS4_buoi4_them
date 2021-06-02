// if (slg > 100){
//     tongTien = (49 * donGia) + (51 * donGia * 92/100) + ((slg - 100) * donGia * 88/100);
//     info +=  "<div> Tổng tiền phải trả là: " + tongTien + "đ</div>";
//     document.getElementById("show").innerHTML = info;
// } else if (slg >= 50 && slg <= 100 ) {
//         tongTien = (49 * donGia) + ((slg - 49) * donGia * 92/100);
//         info +=  "<div> Tổng tiền phải trả là: " + tongTien + "đ</div>";
//         document.getElementById("show").innerHTML = info;
//     } else if (slg > 0 && slg < 50 ){
//             tongTien = slg * donGia;
//             info +=  "<div> Tổng tiền phải trả là: " + tongTien + "đ</div>";
//             document.getElementById("show").innerHTML = info;
//         } else {
//                 document.getElementById("show").innerHTML = "Bạn đang nhập số lượng là 0 hoặc nhỏ hơn 0!";
//             }



// bài slide 24
document.getElementById("click1").onclick = function(event) {
    event.preventDefault();
    var hoTen = document.getElementById("hoTen").value;
    var subToan = document.getElementById("subToan").value;
    var subLy = document.getElementById("subLy").value;
    var subHoa = document.getElementById("subHoa").value;
    var dTB = (parseInt(subToan) + parseInt(subLy) + parseInt(subHoa)) / 3;
    if (dTB < 5){
        document.getElementById("show1").innerHTML = "Học sinh " + hoTen + " xếp loại: Yếu";
        } else if (dTB >= 5 && dTB < 6.5) {
            document.getElementById("show1").innerHTML = "Học sinh " + hoTen + " xếp loại: Trung Bình";    
            } else if (dTB >= 6.5 && dTB < 8.5){
                document.getElementById("show1").innerHTML = "Học sinh " + hoTen + " xếp loại: Khá";        
                } else {
                    document.getElementById("show1").innerHTML = "Học sinh " + hoTen + " xếp loại: Giỏi";            
                    }
};
// bài 1 slide 31
document.getElementById("click2").onclick = function(event) {
    event.preventDefault();
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;
    var num0;
    parseInt(num1)
    parseInt(num2)
    parseInt(num3)
    if (parseInt(num1) < parseInt(num2)){
        if (parseInt(num2) < parseInt(num3)){
            document.getElementById("show2").innerHTML = num1 + "; " + num2 + "; " + num3;            
        } else {
            num0 = num2;
            num2 = num3;
            num3 = num0;
            if (parseInt(num1) < parseInt(num2)){
            document.getElementById("show2").innerHTML = num1 + "; " + num2 + "; " + num3;            
            } else {
                num0 = num1;
                num1 = num2;
                num2 = num0;
                document.getElementById("show2").innerHTML = num1 + "; " + num2 + "; " + num3;            
            }
        }
    } else {
        num0 = num1;
        num1 = num2;
        num2 = num0;
        if (parseInt(num2) < parseInt(num3)){
            document.getElementById("show2").innerHTML = num1 + "; " + num2 + "; " + num3;            
        } else {
            num0 = num2;
            num2 = num3;
            num3 = num0;
            if (parseInt(num1) < parseInt(num2)){
            document.getElementById("show2").innerHTML = num1 + "; " + num2 + "; " + num3;            
            } else {
                num0 = num1;
                num1 = num2;
                num2 = num0;
                document.getElementById("show2").innerHTML = num1 + "; " + num2 + "; " + num3;            
            }
        }
    }
};
document.getElementById("click2_1").onclick = function(event) {
    event.preventDefault();
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;
    var num0;
    parseInt(num1)
    parseInt(num2)
    parseInt(num3)
    if (parseInt(num1) < parseInt(num2)){
        if (parseInt(num2) < parseInt(num3)){
            document.getElementById("show2").innerHTML = num3 + "; " + num2 + "; " + num1;            
        } else {
            num0 = num2;
            num2 = num3;
            num3 = num0;
            if (parseInt(num1) < parseInt(num2)){
            document.getElementById("show2").innerHTML = num3 + "; " + num2 + "; " + num1;            
            } else {
                num0 = num1;
                num1 = num2;
                num2 = num0;
                document.getElementById("show2").innerHTML = num3 + "; " + num2 + "; " + num1;            
            }
        }
    } else {
        num0 = num1;
        num1 = num2;
        num2 = num0;
        if (parseInt(num2) < parseInt(num3)){
            document.getElementById("show2").innerHTML = num3 + "; " + num2 + "; " + num1;            
        } else {
            num0 = num2;
            num2 = num3;
            num3 = num0;
            if (parseInt(num1) < parseInt(num2)){
            document.getElementById("show2").innerHTML = num3 + "; " + num2 + "; " + num1;            
            } else {
                num0 = num1;
                num1 = num2;
                num2 = num0;
                document.getElementById("show2").innerHTML = num3 + "; " + num2 + "; " + num1;            
            }
        }
    }
};

// bài 2 slide 31
document.getElementById("click3").onclick = function(event) {
    event.preventDefault();
    var user = document.getElementById("user").value ;
    var info;
    switch (user) {
        case 'B' :
        case 'b' :
            info = "<div>Kính chào ông chủ, để đề phòng bà chủ đăng nhập vào máy tính này.</div>";
            info += "<div>Ông chủ nên đi soạn hành lí từ bây giờ!</div>";
            document.getElementById("show3").innerHTML = info;
            break;
        case 'M':
        case 'm' :
            info = "<div>Kính chào bà chủ, hôm nay bà chủ muốn coi tin tức, coi bảng điểm 0 của cậu chủ</div>";
            info += "<div>Hay là coi tin nhắn ngoại tình của ông chủ đây?</div>";
            document.getElementById("show3").innerHTML = info;
            break;
        case 'A':
        case 'a' :
            info = "<div>Xin chào cậu chủ, cậu chủ nên giấu bảng điểm 0 của cô giáo mới gửi vào một file khác</div>";
            document.getElementById("show3").innerHTML = info;
            break;
        case 'E':
        case 'e' :
            info = "<div>Chào cô chủ nhỏ của gia đình, cô cần tôi giúp gì cho ngày hôm nay nào?</div>";
            document.getElementById("show3").innerHTML = info;
            break;
        default:
            document.getElementById("show3").innerHTML = "Bạn nhập sai cú pháp rồi!";
    }
}

// bài 3 slide 31
document.getElementById("click4").onclick = function(event) {
    event.preventDefault();
    var Num1 = document.getElementById("Num1").value;
    var Num2 = document.getElementById("Num2").value;
    var Num3 = document.getElementById("Num3").value;
    if (Num1 % 2 == 0) {
        if (Num2 % 2 == 0) {
            if (Num3 % 2 == 0){
                document.getElementById("show4").innerHTML = "Có 3 số chẵn";            
            } else {
                document.getElementById("show4").innerHTML = "Có 2 số chẵn và 1 số lẻ";            
            }
        } else {
            if (Num3 % 2 == 0){
                document.getElementById("show4").innerHTML = "Có 2 số chẵn và 1 số lẻ";            
            } else {
                document.getElementById("show4").innerHTML = "Có 1 số chẵn và 2 số lẻ";            
            }
        }
    } else {
        if (Num2 % 2 == 0) {
            if (Num3 % 2 == 0){
                document.getElementById("show4").innerHTML = "Có 2 số chẵn và 1 số lẻ";            
            } else {
                document.getElementById("show4").innerHTML = "Có 1 số chẵn và 2 số lẻ";            
            }
        } else {
            if (Num3 % 2 == 0){
                document.getElementById("show4").innerHTML = "Có 1 số chẵn và 2 số lẻ";            
            } else {
                document.getElementById("show4").innerHTML = "Có 3 số lẻ";            
            }
        }
    }
}

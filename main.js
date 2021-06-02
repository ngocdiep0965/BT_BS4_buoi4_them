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

// bài 4 slide 31
document.getElementById("click5").onclick = function(event) {
    event.preventDefault();
    var a = parseInt(document.getElementById("txtNumA").value);
    var b = parseInt(document.getElementById("txtNumB").value);
    var c = parseInt(document.getElementById("txtNumC").value);
    var soSanhTGcan = ((a == b && a != c) || (a == c && a != b) || (b == c && b != a));
    var soSanhTGvuong = ((a*a == b*b + c*c) || (b*b == a*a + c*c) || (c*c == a*a + b*b))
    // console.log(soSanhTGvuong);
    if (a == b && a == c && b == c) {
        document.getElementById("show5").innerHTML = "Tam giác đều";
    } else if (soSanhTGcan == true && soSanhTGvuong == true) {
        document.getElementById("show5").innerHTML = "Tam giác vuông cân";
    } else if (soSanhTGcan == true){
        document.getElementById("show5").innerHTML = "Tam giác cân";
    } else if (soSanhTGvuong == true){
        document.getElementById("show5").innerHTML = "Tam giác vuông";
    } else {
        document.getElementById("show5").innerHTML = "Tam giác thường";
    }

    
}

// bài 1 slide 32
document.getElementById("click6").onclick = function(event) {
    event.preventDefault();
    var dateInput = document.getElementById("today").value;
    const year = dateInput.split('-', 2) ;
    // const month = parseInt(dateInput.split('-',2)) ;
    // const day = parseInt(dateInput.split('-',3)) ;
    console.log(year);
    // console.log(month);
    // console.log(day);
    
}











// bài 3 slide 32
document.getElementById("click8").onclick = function(event) {
    event.preventDefault();
    var soNguyen = parseInt(document.getElementById("soNguyen").value);
    var hangTram = parseInt(soNguyen / 100); 
    var hangChuc = parseInt((soNguyen / 10) - (hangTram * 10)); 
    var hangDonVi = parseInt((soNguyen % 10)); 
    var cachDocHangTram, cachDocHangChuc, cachDocHangDonVi;
    // console.log(hangChuc)
    switch (hangTram){
        case 1 :
            cachDocHangTram = "Một Trăm";
            break;
        case 2 :
            cachDocHangTram = "Hai Trăm";
            break;
        case 3 :
            cachDocHangTram = "Ba Trăm";
            break;
        case 4 :
            cachDocHangTram = "Bốn Trăm";
            break;
        case 5 :
            cachDocHangTram = "Năm Trăm";
            break;
        case 6 :
            cachDocHangTram = "Sáu Trăm";
            break;
        case 7 :
            cachDocHangTram = "Bảy Trăm";
            break;
        case 8 :
            cachDocHangTram = "Tám Trăm";
            break;
        case 9 :
            cachDocHangTram = "Chín Trăm";
            break;
        default :
            cachDocHangTram = "Nhập sai";
    }
    switch (hangChuc){
        case 1 :
            cachDocHangChuc = "Mười";
            break;
        case 2 :
            cachDocHangChuc = "Hai Mươi";
            break;
        case 3 :
            cachDocHangChuc = "Ba Mươi";
            break;
        case 4 :
            cachDocHangChuc = "Bốn Mươi";
            break;
        case 5 :
            cachDocHangChuc = "Năm Mươi";
            break;
        case 6 :
            cachDocHangChuc = "Sáu Mươi";
            break;
        case 7 :
            cachDocHangChuc = "Bảy Mươi";
            break;
        case 8 :
            cachDocHangChuc = "Tám Mươi";
            break;
        case 9 :
            cachDocHangChuc = "Chín Mươi";
            break;
        case 0 : 
            if (hangChuc === 0  && hangDonVi ===0) {
                cachDocHangChuc = "";
            } else {cachDocHangChuc = "Lẻ";}
            break;
        default :
            cachDocHangChuc = "Nhập sai";
    }
    switch (hangDonVi){
        case 1 :
            if ((hangChuc === 0 || hangChuc === 1)) {
                cachDocHangDonVi = "Một";;
            } else {cachDocHangDonVi = "Mốt";}
            break;
        case 2 :
            cachDocHangDonVi = "Hai";
            break;
        case 3 :
            cachDocHangDonVi = "Ba";
            break;
        case 4 :
            cachDocHangDonVi = "Bốn";
            break;
        case 5 :
            if (hangTram === 1 && hangChuc === 0) {
                cachDocHangDonVi = "Năm";;
            } else {cachDocHangDonVi = "Lăm";}
            break;
            break;
        case 6 :
            cachDocHangDonVi = "Sáu";
            break;
        case 7 :
            cachDocHangDonVi = "Bảy";
            break;
        case 8 :
            cachDocHangDonVi = "Tám";
            break;
        case 9 :
            cachDocHangDonVi = "Chín";
            break;
        case 0 : 
            cachDocHangDonVi = "";
            break;
        default :
            cachDocHangDonVi = "Nhập sai";
    }
    var info = cachDocHangTram + " " + cachDocHangChuc + " " + cachDocHangDonVi;
    document.getElementById("show8").innerHTML = info;
    
}
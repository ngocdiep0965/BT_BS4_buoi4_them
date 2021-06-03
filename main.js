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

// bài 1 slide 32A
/*function layGiaTri() {
    var dateInput = document.getElementById("today").value;
    const mangsaukhicat = dateInput.split('-') ;
    var year = mangsaukhicat[0];
    var month = mangsaukhicat[1];
    var day = mangsaukhicat[2];
    year = parseInt(year);
    month = parseInt(month);
    day = parseInt(day);
};*/
document.getElementById("click6").onclick = function(event) {
    event.preventDefault();
    // layGiaTri();
    var dateInput = document.getElementById("today").value;
    const mangSauKhiCat = dateInput.split('-') ;
    var year = mangSauKhiCat[0];
    var month = mangSauKhiCat[1];
    var day = mangSauKhiCat[2];
    year = parseInt(year);
    month = parseInt(month);
    day = parseInt(day);
    switch (month) {
        case 1:
            if (day === 1){
                month = 12;
                day = 31;
                year = year - 1;
                document.getElementById("show6").innerHTML = year + "/" + month + "/" +day;
            } else {
                day = day - 1;
                document.getElementById("show6").innerHTML = year + "/" + month + "/" +day;
            }
            break;
        case 2:
        case 4:
        case 6:
        case 8:
        case 9:
        case 11:
            if (day === 1){
                month = month - 1;
                day = 31;
                document.getElementById("show6").innerHTML = year + "/" + month + "/" +day;
            } else {
                day = day - 1;
                document.getElementById("show6").innerHTML = year + "/" + month + "/" +day;
            }
            break;
        case 3:
            if (day === 1){
                month = month - 1;
                day = 28;
                document.getElementById("show6").innerHTML = year + "/" + month + "/" +day;
            } else {
                day = day - 1;
                document.getElementById("show6").innerHTML = year + "/" + month + "/" +day;
            }
            break;
        case 05:
        case 07:
        case 10:
        case 12:
            if (day === 1){
                month = month -1;
                day = 30;
            document.getElementById("show6").innerHTML = year + "/" + month + "/" +day;
            } else {
                day = day - 1;
                document.getElementById("show6").innerHTML = year + "/" + month + "/" +day;
            }
            break;
        default :
            document.getElementById("show6").innerHTML = "nhập sai!";
    }
}
document.getElementById("click6_1").onclick = function(event) {
    event.preventDefault();
    // layGiaTri();
    var dateInput = document.getElementById("today").value;
    const mangSauKhiCat = dateInput.split('-') ;
    var year = mangSauKhiCat[0];
    var month = mangSauKhiCat[1];
    var day = mangSauKhiCat[2];
    year = parseInt(year);
    month = parseInt(month);
    day = parseInt(day);
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
            if (day === 31){
                month = month + 1;
                day = 1;
                document.getElementById("show6").innerHTML = year + "/" + month + "/" +day;
            } else {
                day = day + 1;
                document.getElementById("show6").innerHTML = year + "/" + month + "/" +day;
            }
            break;
        case 2:
            if (day === 28){
                month = month + 1;
                day = 1;
                document.getElementById("show6").innerHTML = year + "/" + month + "/" +day;
            } else {
                day = day + 1;
                document.getElementById("show6").innerHTML = year + "/" + month + "/" +day;
            }
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            if (day === 30){
                month = month + 1;
                day = 1;
                document.getElementById("show6").innerHTML = year + "/" + month + "/" +day;
            } else {
                day = day + 1;
                document.getElementById("show6").innerHTML = year + "/" + month + "/" +day;
            }
            break;
        case 12:
            if (day === 31){
                month = 1;
                day = 1;
                year = year + 1;
                document.getElementById("show6").innerHTML = year + "/" + month + "/" +day;
            } else {
                day = day + 1;
                document.getElementById("show6").innerHTML = year + "/" + month + "/" +day;
            }
            break;
        default :
            document.getElementById("show6").innerHTML = "nhập sai!";
    }
}


// bài 2 slide 32A
document.getElementById("click7").onclick = function(event) {
    event.preventDefault();
    var valueInput = document.getElementById("randomMonth").value;
    const mangDaCat = valueInput.split('/') ;
    var nam = mangDaCat[1] ;
    var thang = mangDaCat[0] ;
    nam = parseInt(nam);
    thang = parseInt(thang);
    // console.log(nam, thang);
    var namNhuan = nam % 4;
    switch (thang){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.getElementById("show7").innerHTML = "Tháng " + thang + " Năm " + nam + " có 31 ngày.";
            break;
        case 2:
            if (namNhuan === 0){
                document.getElementById("show7").innerHTML = "Tháng " + thang + " Năm " + nam + " có 29 ngày.";    
            } else {
                document.getElementById("show7").innerHTML = "Tháng " + thang + " Năm " + nam + " có 28 ngày.";
            }
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            document.getElementById("show7").innerHTML = "Tháng " + thang + " Năm " + nam + " có 30 ngày.";
            break;   
        default:
            document.getElementById("show7").innerHTML = "nhập sai!";


    }
    
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

// bài 4 slide 32A
document.getElementById("click9").onclick = function(event) {
    event.preventDefault();
    var name1 = document.getElementById("name1").value;
    var name2 = document.getElementById("name2").value;
    var name3 = document.getElementById("name3").value;
    var value1 = document.getElementById("nhaSV1").value;
    var value2 = document.getElementById("nhaSV2").value;
    var value3 = document.getElementById("nhaSV3").value;
    var valueTrg = document.getElementById("truongDH").value;
    const valueDaCat1 = value1.split(',') ;
    const valueDaCat2 = value2.split(',') ;
    const valueDaCat3 = value3.split(',') ;
    const valueDaCatTrg = valueTrg.split(',') ;
    var x1 = valueDaCat1[0] ;
    var y1 = valueDaCat1[1] ;
    var x2 = valueDaCat2[0] ;
    var y2 = valueDaCat2[1] ;
    var x3 = valueDaCat3[0] ;
    var y3 = valueDaCat3[1] ;
    var xT = valueDaCatTrg[0] ;
    var yT = valueDaCatTrg[1] ;
    function chuyenGiaTri(a,b){
        a =parseInt(a);
        b =parseInt(b);
    }
    chuyenGiaTri(x1,y1);
    chuyenGiaTri(x2,y2);
    chuyenGiaTri(x3,y3);
    // console.log(x1, y1, x2, y2, x3, y3);
    var khoangCach1DenTrg = parseInt(Math.sqrt(((xT-x1)*(xT-x1)) + ((yT-y1)*(yT-y1)))) ;
    var khoangCach2DenTrg = parseInt(Math.sqrt(((xT-x2)*(xT-x2)) + ((yT-y2)*(yT-y2))));
    var khoangCach3DenTrg = parseInt(Math.sqrt(((xT-x3)*(xT-x3)) + ((yT-y3)*(yT-y3))));
    var info;
    if (khoangCach1DenTrg < khoangCach2DenTrg ){
        if (khoangCach2DenTrg < khoangCach3DenTrg ){
            info ="<div>Nhà sinh viên " + name3 + " cách trường xa nhất, với khoảng cách " + khoangCach3DenTrg + "km.</div>" ;
            document.getElementById("show9").innerHTML = info;
        } else if(khoangCach2DenTrg == khoangCach3DenTrg){
            info ="<div>Nhà sinh viên " + name2 + " và " + name3 + " cách trường xa nhất, với khoảng cách " + khoangCach3DenTrg + "km.</div>" ;
            document.getElementById("show9").innerHTML = info;
        } else {
            info ="<div>Nhà sinh viên " + name2 + " cách trường xa nhất, với khoảng cách " + khoangCach2DenTrg + "km.</div>" ;
            document.getElementById("show9").innerHTML = info;
        }
    } else if(khoangCach1DenTrg == khoangCach2DenTrg){
        if (khoangCach2DenTrg < khoangCach3DenTrg ){
            info ="<div>Nhà sinh viên " + name3 + " cách trường xa nhất, với khoảng cách " + khoangCach3DenTrg + "km.</div>" ;
            document.getElementById("show9").innerHTML = info;
        } else if(khoangCach2DenTrg == khoangCach3DenTrg){
            info ="<div>Nhà cả 3 sinh viên có khoảng cách đến trường bằng nhau, với khoảng cách " + khoangCach3DenTrg + "km.</div>" ;
            document.getElementById("show9").innerHTML = info;
        } else {
            info ="<div>Nhà sinh viên " + name1 + " và " + name2 + " cách trường xa nhất, với khoảng cách " + khoangCach2DenTrg + "km.</div>" ;
            document.getElementById("show9").innerHTML = info;
        }
    } else if(khoangCach1DenTrg < khoangCach3DenTrg) {
        info ="<div>Nhà sinh viên " + name3 + " cách trường xa nhất, với khoảng cách " + khoangCach3DenTrg + "km.</div>" ;
        document.getElementById("show9").innerHTML = info;
        } else if(khoangCach1DenTrg == khoangCach3DenTrg){
            info ="<div>Nhà sinh viên " + name1 + " và " + name3 + " cách trường xa nhất, với khoảng cách " + khoangCach3DenTrg + "km.</div>" ;
            document.getElementById("show9").innerHTML = info;
        } else {
            info ="<div>Nhà sinh viên " + name1 + " cách trường xa nhất, với khoảng cách " + khoangCach1DenTrg + "km.</div>" ;
            document.getElementById("show9").innerHTML = info;
    }
    
}
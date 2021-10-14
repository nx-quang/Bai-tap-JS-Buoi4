//------------- Bài 1: Sắp xếp thứ tự các số --------------
/**
 * Khối 1:
 * num1
 * num2
 * num3
 * Khối 2:
 * B1: Nhập giá trị
 * B2: Kiểm tra: a > b và a > c => a > b > c
 *               a > b và b < c => a > c > b
 *               a > b và a < c => c > a > b
 *               a < b và b > c => b > a > c
 *               a < c và b > c => b > c > a
 *          else: c > b > a
 * B3: xuất kết quả
 * Khố 3:
 * sapXep
 */

function sapXep(){
    //Lấy giá trị từ form
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;
    var c = document.getElementById("num3").value;
    
    var n1 = parseInt(a),
        n2 = parseInt(b),
        n3 = parseInt(c);
    var max = a,
        mid = Number.MIN_SAFE_INTEGER,
        min = Number.MAX_SAFE_INTEGER;
    if(n2 > max){
        mid =max;
        max = n2;
    }else if(n2 > mid){
        mid = n2;
    }
    if(n3 > max){
        mid = max;
        max = n3;
    }else if(n3 > mid){
        mid = n3;
    }
    if(min > n1){
        min = n1;
    }
    if(min > n2){
        min = n2;
    }
    if(min > n3){
        min = n3;
    }
  
    document.getElementById("txtXep").innerHTML = "Thứ tự tăng dần là: "+min+ " "+ mid+ " "+ max;
}
document.getElementById("btnXep").onclick = sapXep;

// ------------Bài 2: welcome----------
function welcome(){
    var name  = document.getElementById("name").value;
    document.getElementById("txtStart").innerHTML = "Xin Chào "+ name + "!";
}
document.getElementById("btnStart").onclick = welcome;


// ------------Bài 3: Đếm số chẵn lẻ----------
document.getElementById("btnDem").onclick = function() {
  var n1 = Number(document.getElementById("number1").value);
  var n2 = Number(document.getElementById("number2").value);
  var n3 = Number(document.getElementById("number3").value);

  var soChan = 0, soLe = 0;
  n1 % 2 == 0 ? ++soChan : ++soLe;
  n2 % 2 == 0 ? ++soChan : ++soLe;
  n3 % 2 == 0 ? ++soChan : ++soLe;
  console.log(soChan + " " + soLe);
  document.getElementById("txtDem").innerHTML = "Có " + soChan + " số chẵn, " + soLe + " số lẻ";
} 

// ------------Bài 4: Dự đoán----------
function outputResultTriangle(result) {
  document.getElementById("resultTriangle").value = result;
}
document.getElementById("btnCheck").onclick = function (){
    var edge1 = document.getElementById("edge1").value;
    var edge2 = document.getElementById("edge2").value;
    var edge3 = document.getElementById("edge3").value;

    var checkPytagoEdge1 = Math.sqrt(Math.pow(edge2, 2) + Math.pow(edge3, 2));
    var checkPytagoEdge2 = Math.sqrt(Math.pow(edge1, 2) + Math.pow(edge3, 2));
    var checkPytagoEdge3 = Math.sqrt(Math.pow(edge1, 2) + Math.pow(edge2, 2));
    if (edge1 == edge2 && edge2 == edge3) {
        outputResultTriangle("Tam Giác Đều");
    } else if (edge1 == edge2 || edge1 == edge3 || edge2 == edge3) {
        outputResultTriangle("Tam Giác Cân");
    } else if (
        edge1 == checkPytagoEdge1 || edge2 == checkPytagoEdge2 || edge3 == checkPytagoEdge3
    ) {
        outputResultTriangle("Tam Giác Vuông");
    } else {
        outputResultTriangle("Tam Giác Thường");
    }

};


// ------------Bài 1(Nâng cao): Tính ngày tháng năm----------
//output on browser
function outputDay(days, months, years) {
  document.getElementById("txtDay").innerHTML ="Ngày: "+ days + "/" + months + "/" + years;
}
function checkYear(years) {
  return years % 400 == 0 || (years % 4 == 0 && years % 100 != 0) ? 1 : 0;
}
//----Next day---
function nextDayOfYear(days, months, years) {
  //Months have to 30 days;
  if (months == 4 || months == 6 || months == 9 || months == 11) {
    if (days == 30) {
      days = 1;
      ++months;
    } else {
      ++days;
    }
  } else if (
    months == 1 ||
    months == 3 ||
    months == 5 ||
    months == 7 ||
    months == 8 ||
    months == 10 ||
    months == 12
  ) {
    if (months != 12 && days == 31) {
      days = 1;
      ++months;
    } else if (months == 12 && days == 31) {
      days = 1;
      months = 1;
      ++years;
    } else {
      ++days;
    }
  } else {
    // for 2 months
    if (days == 29) {
      days = 1;
      ++months;
    } else {
      ++days;
    }
  }
  outputDay(days, months, years);
}

function nextDayOfNotYear(days, months, years) {
  if (months == 4 || months == 6 || months == 9 || months == 11) {
    if (days == 30) {
      days = 1;
      ++months;
    } else {
      ++days;
    }
  } else if (
    months == 1 ||
    months == 3 ||
    months == 5 ||
    months == 7 ||
    months == 8 ||
    months == 10 ||
    months == 12
  ) {
    if (months != 12 && days == 31) {
      days = 1;
      ++months;
    } else if (months == 12 && days == 31) {
      days = 1;
      months = 1;
      ++years;
    } else {
      ++days;
    }
  } else {
    if (days == 28) {
      days = 1;
      ++months;
    } else {
      ++days;
    }
  }
  outputDay(days, months, years);
}
function calcNextDay(days, months, years) {
  var isLeapYear = checkYear(years);

  if (isLeapYear == 1) {
    nextDayOfYear(days, months, years);
  } else {
    nextDayOfNotYear(days, months, years);
  }
}
document.getElementById("btnNextDay").onclick = function () {
  var days = parseInt(document.getElementById("days").value);
  var months = parseInt(document.getElementById("months").value);
  var years = parseInt(document.getElementById("years").value);

  calcNextDay(days, months, years);
};

//-------Prev Day--------
function prevDayOfYear(days, months, years) {
  if (
    months == 2 ||
    months == 4 ||
    months == 6 ||
    months == 9 ||
    months == 11
  ) {
    if (days == 1) {
      days = 31;
      --months;
    } else {
      --days;
    }
  } else if (
    months == 1 ||
    months == 5 ||
    months == 7 ||
    months == 8 ||
    months == 10 ||
    months == 12
  ) {
    if (months != 1 && days == 1 && months != 8) {
      days = 30;
      --months;
    } else if (months == 1 && days == 1) {
      days = 31;
      months = 12;
      --years;
    } else if (months == 8 && days == 1) {
      days = 31;
      --months;
    } else {
      --days;
    }
  } else {
    //for 3 months
    if (days == 1) {
      days = 29;
      months = 2;
    } else {
      --days;
    }
  }
  outputDay(days, months, years);
}

function prevDayOfNotYear(days, months, years) {
  if (
    months == 2 ||
    months == 4 ||
    months == 6 ||
    months == 9 ||
    months == 11
  ) {
    if (days == 1) {
      days = 31;
      --months;
    } else {
      --days;
    }
  } else if (
    months == 1 ||
    months == 5 ||
    months == 7 ||
    months == 8 ||
    months == 10 ||
    months == 12
  ) {
    if (months != 1 && days == 1 && months != 8) {
      days = 30;
      --months;
    } else if (months == 1 && days == 1) {
      days = 31;
      months = 12;
      --years;
    } else if (months == 8 && days == 1) {
      days = 31;
      --months;
    } else {
      --days;
    }
  } else {
    //for 3 months
    if (days == 1) {
      days = 28;
      months = 2;
    } else {
      --days;
    }
  }
  outputDay(days, months, years);
}

//main function
function calcPrevDay(days, months, years) {
  var isLeapYear = checkYear(years);

  if (isLeapYear == 1) {
    prevDayOfYear(days, months, years);
  } else {
    prevDayOfNotYear(days, months, years);
  }
}

document.getElementById("btnPrevDay").onclick = function () {
  var days = parseInt(document.getElementById("days").value);
  var months = parseInt(document.getElementById("months").value);
  var years = parseInt(document.getElementById("years").value);

  calcPrevDay(days, months, years);
};

// ------------Bài 2(Nâng cao): Tính ngày----------

function findDaysOfYear(months, years) {
  var days = 0;
  if (months == 4 || months == 6 || months == 9 || months == 11) {
    days = 30;
  } else if (
    months == 1 ||
    months == 3 ||
    months == 5 ||
    months == 7 ||
    months == 8 ||
    months == 10 ||
    months == 12
  ) {
    days = 31;
  } else {
    days = 29;
  }
  document.getElementById("txtNgay").innerHTML = "Số ngày trong tháng là: "+ days;
}

function findDaysOfNotYear(months, years) {
  var days = 0;
  if (months == 4 || months == 6 || months == 9 || months == 11) {
    days = 30;
  } else if (
    months == 1 ||
    months == 3 ||
    months == 5 ||
    months == 7 ||
    months == 8 ||
    months == 10 ||
    months == 12
  ) {
    days = 31;
  } else {
    days = 28;
  }
  document.getElementById("txtNgay").innerHTML = "Số ngày trong tháng là: "+ days;
}

function findDays(months, years) {
  var isYear = checkYear(years);

  if (isYear == 1) {
    findDaysOfYear(months, years);
  } else {
    findDaysOfNotYear(months, years);
  }
}

document.getElementById("btnNgay").onclick = function () {
  var months = parseInt(document.getElementById("months2").value);
  var years = parseInt(document.getElementById("years2").value);

  findDays(months, years);
};



// ------------Bài 3(Nâng cao): Đọc số----------
function convertNumberToString(number) {
  var read = "";
  switch (number) {
    case 1:
      read = "Một";
      break;
    case 2:
      read = "Hai";
      break;
    case 3:
      read = "Ba";
      break;
    case 4:
      read = "Bốn";
      break;
    case 5:
      read = "Năm";
      break;
    case 6:
      read = "Sáu";
      break;
    case 7:
      read = "Bảy";
      break;
    case 8:
      read = "Tám";
      break;
    case 9:
      read = "Chín";
      break;
    default:
      //not number
      break;
  }
  return read;
}

function readNumber(number) {
  var numberOfDigit = parseInt(Math.log10(number) + 1);
  var donVi = convertNumberToString(parseInt(number % 10));
  var tempChuc = parseInt((number    % 100) / 10);
  var chuc = convertNumberToString(parseInt((number % 100) / 10));
  var tram = convertNumberToString(parseInt(number / 100));

  if (numberOfDigit == 1) {
    document.getElementById("txtRead").innerHTML = donVi + " Ngàn ";
  } else if (numberOfDigit == 2) {
    if (tempChuc == 1) {
      document.getElementById("txtRead").innerHTML = " Mười " + donVi + " Ngàn ";
    } else {
      document.getElementById("txtRead").innerHTML = chuc + " Mươi " + donVi + " Ngàn ";
    }
  } else {
    if (tempChuc == 1) {
      document.getElementById("txtRead").innerHTML = tram + " Trăm" + " Mười " + donVi + " Ngàn ";
    } else {
      document.getElementById("txtRead").innerHTML = tram + " Trăm " + chuc + " Mươi " + donVi + " Ngàn ";
    }
  }
}
document.getElementById("btnRead").onclick = function () {
  var number = document.getElementById("read").value;

  readNumber(number);
}



// ------------Bài 4(Nâng cao): Tìm SV----------
document.getElementById("resultEx8").disabled = true;
function distanceOfTwoPoint(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}
//distance from student home to school
function cmp(distance1, distance2, distance3) {
  var max = distance1;  
  if(distance2 > max) max = distance2;
  if(distance3 > max) max = distance3; 
  return max;
}

document.getElementById("btnEx8").onclick = function() {  
  var x1 = Number(document.getElementById("point_x_1").value);
  var y1 = Number(document.getElementById("point_y_1").value);
  var x2 = Number(document.getElementById("point_x_2").value);
  var y2 = Number(document.getElementById("point_y_2").value);
  var x3 = Number(document.getElementById("point_x_3").value);
  var y3 = Number(document.getElementById("point_y_3").value);

  var std1_name = document.getElementById("nameOfStudent1").value;
  var std2_name = document.getElementById("nameOfStudent2").value;
  var std3_name = document.getElementById("nameOfStudent3").value;

  var xSchool = Number(document.getElementById("point_x_school").value);
  var ySchool = Number(document.getElementById("point_y_school").value);

  var distance_from_std1_to_school = distanceOfTwoPoint(x1, y1, xSchool, ySchool);
  var distance_from_std2_to_school = distanceOfTwoPoint(x2, y2, xSchool, ySchool);
  var distance_from_std3_to_school = distanceOfTwoPoint(x3, y3, xSchool, ySchool);

  var max = cmp(distance_from_std1_to_school, distance_from_std2_to_school,  distance_from_std3_to_school);

  if(max == distance_from_std1_to_school) {
      document.getElementById("resultEx8").innerHTML = "Sinh viên xa trường nhất là: " + std1_name;
  } else if(max == distance_from_std2_to_school) {
      document.getElementById("resultEx8").innerHTML = "Sinh viên xa trường nhất là: " + std2_name;
  } else {
      document.getElementById("resultEx8").innerHTML = "Sinh viên xa trường nhất là: " + std3_name;
  }
}

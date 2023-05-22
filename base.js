// Bài 1: Quản lý tuyển sinh
function calcAreaGrade(area) {
    if (area === "A") return 2;
    if (area === "B") return 1;
    if (area === "C") return 0.5;
    return 0;
  }
function calcTypeGrade(type) {
    if (type === "1") return 2.5;
    if (type === "2") return 1.5;
    if (type === "3") return 1;
    return 0;
  }
  
  function exercise1() {
    var benchmark = +document.getElementById("benchmarkInput").value;
    var subject1 = +document.getElementById("subject1Input").value;
    var subject2 = +document.getElementById("subject2Input").value;
    var subject3 = +document.getElementById("subject3Input").value;
    var areaVal = document.getElementById("areaSelect").value;
    var typeVal = document.getElementById("typeSelect").value;
  
    var areaGrade = calcAreaGrade(areaVal);
    var typeGrade = calcTypeGrade(typeVal);
  
    var total = subject1 + subject2 + subject3 + areaGrade + typeGrade;
  
    if (
      total >= benchmark &&
      subject1 !== 0 &&
      subject2 !== 0 &&
      subject3 !== 0
    ) {
    document.getElementById("check").innerHTML = "Bạn đã đậu. " + "Tổng điểm: " + total;
    } else {
    document.getElementById("check").innerHTML = "Bạn đã rớt. " + "Tổng điểm: " + total;
    }
  }
  document.getElementById("btnSubmit").onclick = exercise1;


//   Bài 2: Tính điện năng tiêu thụ
document.getElementById("btn").onclick = function() {
    var NameInput = document.getElementById("NameInput").value;
    var KwInput = +document.getElementById("KwInput").value;
    var KwM = 500
    var KwH = 650
    var KwB = 850
    var KwF = 1100
    var KwN = 1300
    var total

    if (KwInput <= 50) {
        total = KwInput * KwM;

    } else if (KwInput <= 100) {
        total = (50 * KwM) + (KwInput - 50) * KwH;

    } else if (KwInput <= 200) {
        total = (50 * KwM) + (50 * KwH)  + (KwInput - 100) * KwB;

    } else if (KwInput <= 350) {
        total = (50 * KwM)  + (50 * KwH) + (100 * KwB)  + (KwInput - 200) * KwF;

    } else {
        total = (50 * KwM)  + (50 * KwH) + (100 * KwB) + (150 * KwF) + (KwInput - 350) * KwN;
    }

    document.getElementById("check2").innerHTML = "Họ tên: " + NameInput + "; " + "Tiền điện: " + total;
};

// Bài 3: Tính thuế thu nhâp cá nhân
document.getElementById("btn2").onclick = function() {
    var NameInput = document.getElementById("calInput1").value
    var CalInput1 = +document.getElementById("calInput2").value
    var CalInput2 = +document.getElementById("calInput3").value
    var Tax1 = 0.05
    var Tax2 = 0.1
    var Tax3 = 0.15
    var Tax4 = 0.2
    var Tax5 = 0.25
    var Tax6 = 0.3
    var Tax7 = 0.35
    var Dependent = 1600000
    var Deduction = 4000000
    var Total

    if (CalInput1 <= 60000000) {
    Total = (CalInput1 * Tax1) - (Deduction * Tax1) - (CalInput2 * Dependent) * Tax1;
    } else if (CalInput1 <= 120000000) {
        Total = (CalInput1 * Tax2)  - (Deduction * Tax2) - (CalInput2 * Dependent) * Tax2;
    } else if (CalInput1 <= 210000000) {
        Total = (CalInput1 * Tax3)  - (Deduction * Tax3) - (CalInput2 * Dependent) * Tax3; 
    } else if (CalInput1 <= 348000000) {
        Total = (CalInput1 * Tax4)  - (Deduction * Tax4) - (CalInput2 * Dependent) * Tax4; 
    } else if (CalInput1 <= 624000000) {
        Total = (CalInput1 * Tax5)  - (Deduction * Tax5) - (CalInput2 * Dependent) * Tax5; 
    } else if (CalInput1 <= 960000000) {
        Total = (CalInput1 * Tax6)  - (Deduction * Tax6) - (CalInput2 * Dependent) * Tax6; 
    } else if (CalInput1 > 960000000) {
        Total = (CalInput1 * Tax7)  - (Deduction * Tax7) - (CalInput2 * Dependent) * Tax7; 
    }

    document.getElementById("check3").innerHTML= "Họ tên: " + NameInput + "; " + "Tiền thuế thu nhập cá nhân la: " + Total
}

// Bài 4: Tính tiền cáp
document.getElementById("ClientInput").onchange = function() {
    var change = document.getElementById("ClientInput").value;
    if (change === "Enterprise") {
        document.getElementById("TypeInput").style.display="inline";
        Total = (QualityChanel * Connect) + Bill + SerBasics;

    } else if (change === "HousePep")
    document.getElementById("TypeInput").style.display="none";
    Total = (enQualityChanel * Connect) + enBill + enSerBasics;
}
document.getElementById("btn3").onclick = function() {
    var change = document.getElementById("ClientInput").value;
    var TagInput = +document.getElementById("TagInput").value;
    var Connect = +document.getElementById("connectInput").value;
    var TypeInput = document.getElementById("TypeInput").value;
    // Nhà dân
    var Bill = 4.5
    var SerBasics = 20.5
    var QualityChanel = 7.5
    // Doanh nghiệp
    var enBill = 15
    var enSerBasics = 75
    var enQualityChanel = 50
    var Connected = 5
    var Total
    // var People = change <= 0 && change === "HousePep"
    

    if ( change => 0) {
        Total = (QualityChanel * Connect) + Bill + SerBasics;
    }else if (change <= 10) {
        Total = (enQualityChanel * Connect) + enBill + enSerBasics;
    } else if (change ==="Enterprise" && change <= 10) {
        Total = (enQualityChanel * Connect) + enBill + enSerBasics;
    } else if (change ==="Enterprise") {
        Total = (enQualityChanel * Connect) + enBill + enSerBasics + Connected;
    }

    document.getElementById("check4").innerHTML = "Mã khách hàng: " + TagInput + "; Tiên cáp: " + Total + "$" 
}

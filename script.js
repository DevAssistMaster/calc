let idealNum = 520;
    result1TH = result1 + result1T;
    result2TH = result2 + result2T;
    result3TH = result3 + result3T;
    result4TH = result4 + result4T;
function plus(){
    var num1 , num2, num3,num4,num5,num6,num7,num8,num9,num10 , result1 , result2 , result3 , result4;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num1 = 100;
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    num3 = document.getElementById('n3').value;
    num3 = parseInt(num3);
    num4 = document.getElementById('n4').value;
    num4 = parseInt(num4);
    num5 = document.getElementById('n5').value;
    num5 = parseInt(num5);
    num6 = document.getElementById('n6').value;
    num6 = parseInt(num6);
//    num7 = document.getElementById('n7').value;
//    num7 = parseInt(num7);
//    
//    num8 = document.getElementById('n8').value;
//    num8 = parseInt(num8);
//    
//    num9 = document.getElementById('n9').value;
//    num9 = parseInt(num9);
//    
//    num10 = document.getElementById('n10').value;
//    num10 = parseInt(num10);
    
    result1 = (num3*num2)/num1;
    result2 = (num4*num2)/num1;
    result3 = (num5*num2)/num1;
    result4 = (num6*num2)/num1;
    //innerHTML
    document.getElementById('out1').innerHTML = result1+"ккал";
    document.getElementById('out2').innerHTML = result2+"г";
    document.getElementById('out3').innerHTML = result3+"г";
    document.getElementById('out4').innerHTML = result4+"г";
}

function plusT(){
    var num1T , num2T, num3T,num4T,num5T,num6T,num7T,num8T,num9T,num10T , result1T , result2T , result3T , result4T;
    num1T = document.getElementById('n1T').value;
    num1T = parseInt(num1T);
    num1T = 100;
    num2T = document.getElementById('n2T').value;
    num2T = parseInt(num2T);
    num3T = document.getElementById('n3T').value;
    num3T = parseInt(num3T);
    num4T = document.getElementById('n4T').value;
    num4T = parseInt(num4T);
    num5T = document.getElementById('n5T').value;
    num5T = parseInt(num5T);
    num6T = document.getElementById('n6T').value;
    num6T = parseInt(num6T);
//    num7 = document.getElementById('n7').value;
//    num7 = parseInt(num7);
//    
//    num8 = document.getElementById('n8').value;
//    num8 = parseInt(num8);
//    
//    num9 = document.getElementById('n9').value;
//    num9 = parseInt(num9);
//    
//    num10 = document.getElementById('n10').value;
//    num10 = parseInt(num10);
    
    result1T = (num3T*num2T)/num1T;
    result2T = (num4T*num2T)/num1T;
    result3T = (num5T*num2T)/num1T;
    result4T = (num6T*num2T)/num1T;
    //innerHTML
    document.getElementById('out1T').innerHTML = result1T+"ккал";
    document.getElementById('out2T').innerHTML = result2T+"г";
    document.getElementById('out3T').innerHTML = result3T+"г";
    document.getElementById('out4T').innerHTML = result4T+"г";
}


function plusTH(){
    var num1T , num2T, num3T,num4T,num5T,num6T,num7T,num8T,num9T,num10T , result1TH , result2TH , result3TH , result4TH;
    

    
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num1 = 100;
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    num3 = document.getElementById('n3').value;
    num3 = parseInt(num3);
    num4 = document.getElementById('n4').value;
    num4 = parseInt(num4);
    num5 = document.getElementById('n5').value;
    num5 = parseInt(num5);
    num6 = document.getElementById('n6').value;
    num6 = parseInt(num6);

    num1T = document.getElementById('n1T').value;
    num1T = parseInt(num1T);
    num1T = 100;
    num2T = document.getElementById('n2T').value;
    num2T = parseInt(num2T);
    num3T = document.getElementById('n3T').value;
    num3T = parseInt(num3T);
    num4T = document.getElementById('n4T').value;
    num4T = parseInt(num4T);
    num5T = document.getElementById('n5T').value;
    num5T = parseInt(num5T);
    num6T = document.getElementById('n6T').value;
    num6T = parseInt(num6T);
    
    result1 = (num3*num2)/num1;
    result2 = (num4*num2)/num1;
    result3 = (num5*num2)/num1;
    result4 = (num6*num2)/num1;
    
    result1T = (num3T*num2T)/num1T;
    result2T = (num4T*num2T)/num1T;
    result3T = (num5T*num2T)/num1T;
    result4T = (num6T*num2T)/num1T;
    
    
    result1TH = result1 + result1T;
    result2TH = result2 + result2T;
    result3TH = result3 + result3T;
    result4TH = result4 + result4T;
    //innerHTML
    document.getElementById('out1TH').innerHTML = result1TH+"ккал"+"( "+idealNum+"ккал идеально )";
    document.getElementById('out2TH').innerHTML = result2TH+"г"+"( "+parseInt((idealNum*0.3)/4)+"г идеально )";
    document.getElementById('out3TH').innerHTML = result3TH+"г"+"( "+parseInt((idealNum*0.1)/9)+"г идеально )";
    document.getElementById('out4TH').innerHTML = result4TH+"г"+"( "+parseInt((idealNum*0.6)/4)+"г идеально )";
}


















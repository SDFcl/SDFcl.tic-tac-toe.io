end = 0 ;
function XO11() {
    var XorO = document.getElementsByName("turn").length;
    var textX = "X";
    var textO = "O";
    var turnX = "<h1 name='turn'>X</h1>";
    var turnO = "<h1>O</h1>";
    if (XorO == 0) {
        document.getElementById("th11").innerHTML = textO;
        document.getElementById("num").innerHTML = turnX;
        
    } 
    else if (XorO == 1){
        document.getElementById("th11").innerHTML = textX;
        document.getElementById("num").innerHTML = turnO;
        
    } else {

    }

}

function XO12() {
    var XorO = document.getElementsByName("turn").length;
    var textX = "X";
    var textO = "O";
    var turnX = "<h1 name='turn'>X</h1>";
    var turnO = "<h1>O</h1>";
    if (XorO == 0) {
        document.getElementById("th12").innerHTML = textO;
        document.getElementById("num").innerHTML = turnX;
        
    } 
    else if (XorO == 1){
        document.getElementById("th12").innerHTML = textX;
        document.getElementById("num").innerHTML = turnO;
        
    } else {

    }

}

function XO13() {
    var XorO = document.getElementsByName("turn").length;
    var textX = "X";
    var textO = "O";
    var turnX = "<h1 name='turn'>X</h1>";
    var turnO = "<h1>O</h1>";
    if (XorO == 0) {
        document.getElementById("th13").innerHTML = textO;
        document.getElementById("num").innerHTML = turnX;
        
    } 
    else if (XorO == 1){
        document.getElementById("th13").innerHTML = textX;
        document.getElementById("num").innerHTML = turnO;
        
    } else {

    }

}

function XO21() {
    var XorO = document.getElementsByName("turn").length;
    var textX = "X";
    var textO = "O";
    var turnX = "<h1 name='turn'>X</h1>";
    var turnO = "<h1>O</h1>";
    if (XorO == 0) {
        document.getElementById("th21").innerHTML = textO;
        document.getElementById("num").innerHTML = turnX;
        
    } 
    else if (XorO == 1){
        document.getElementById("th21").innerHTML = textX;
        document.getElementById("num").innerHTML = turnO;
        
    } else {

    }

}

function XO22() {
    var XorO = document.getElementsByName("turn").length;
    var textX = "X";
    var textO = "O";
    var turnX = "<h1 name='turn'>X</h1>";
    var turnO = "<h1>O</h1>";
    if (XorO == 0) {
        document.getElementById("th22").innerHTML = textO;
        document.getElementById("num").innerHTML = turnX;
        
    } 
    else if (XorO == 1){
        document.getElementById("th22").innerHTML = textX;
        document.getElementById("num").innerHTML = turnO;
        
    } else {

    }

}

function XO23() {
    var XorO = document.getElementsByName("turn").length;
    var textX = "X";
    var textO = "O";
    var turnX = "<h1 name='turn'>X</h1>";
    var turnO = "<h1>O</h1>";
    if (XorO == 0) {
        document.getElementById("th23").innerHTML = textO;
        document.getElementById("num").innerHTML = turnX;
        
    } 
    else if (XorO == 1){
        document.getElementById("th23").innerHTML = textX;
        document.getElementById("num").innerHTML = turnO;
        
    } else {

    }

}

function XO31() {
    var XorO = document.getElementsByName("turn").length;
    var textX = "X";
    var textO = "O";
    var turnX = "<h1 name='turn'>X</h1>";
    var turnO = "<h1>O</h1>";
    if (XorO == 0) {
        document.getElementById("th31").innerHTML = textO;
        document.getElementById("num").innerHTML = turnX;
        
    } 
    else if (XorO == 1){
        document.getElementById("th31").innerHTML = textX;
        document.getElementById("num").innerHTML = turnO;
        
    } else {

    }

}

function XO32() {
    var XorO = document.getElementsByName("turn").length;
    var textX = "X";
    var textO = "O";
    var turnX = "<h1 name='turn'>X</h1>";
    var turnO = "<h1>O</h1>";
    if (XorO == 0) {
        document.getElementById("th32").innerHTML = textO;
        document.getElementById("num").innerHTML = turnX;
        
    } 
    else if (XorO == 1){
        document.getElementById("th32").innerHTML = textX;
        document.getElementById("num").innerHTML = turnO;
        
    } else {

    }

}

function XO33() {
    var XorO = document.getElementsByName("turn").length;
    var textX = "X";
    var textO = "O";
    var turnX = "<h1 name='turn'>X</h1>";
    var turnO = "<h1>O</h1>";
    if (XorO == 0) {
        document.getElementById("th33").innerHTML = textO;
        document.getElementById("num").innerHTML = turnX;
        
    } 
    else if (XorO == 1){
        document.getElementById("th33").innerHTML = textX;
        document.getElementById("num").innerHTML = turnO;
        
    } else {

    }

}

function re() {
    document.getElementById("th11").innerHTML = '<input type="text" class="cell" onclick="XO11(),WDL()"></input>';
    document.getElementById("th12").innerHTML = '<input type="text" class="cell" onclick="XO12(),WDL()"></input>';
    document.getElementById("th13").innerHTML = '<input type="text" class="cell" onclick="XO13(),WDL()"></input>';
    document.getElementById("th21").innerHTML = '<input type="text" class="cell" onclick="XO21(),WDL()"></input>';
    document.getElementById("th22").innerHTML = '<input type="text" class="cell" onclick="XO22(),WDL()"></input>';
    document.getElementById("th23").innerHTML = '<input type="text" class="cell" onclick="XO23(),WDL()"></input>';
    document.getElementById("th31").innerHTML = '<input type="text" class="cell" onclick="XO31(),WDL()"></input>';
    document.getElementById("th32").innerHTML = '<input type="text" class="cell" onclick="XO32(),WDL()"></input>';
    document.getElementById("th33").innerHTML = '<input type="text" class="cell" onclick="XO33(),WDL()"></input>';
    document.getElementById('num').innerHTML = '<h1 name="turn">X</h1>';
    document.getElementById('trun').innerHTML = '<th>Turn</th>';

}

function WDL() {
    var chip = document.getElementsByName("chip").length;
    var end = "<h1 name='turn'>Draw</h1>";
    var Xwin = "<h1 name='turn'>X win!!.</h1>"
    var Owin = "<h1 name='turn'>O win!!.</h1>"
    var re = "<center name='turn'>Player</center>";
    //var re = "<center><button class='button-6' onclick='re()' name='turn'>Reset</button></center>";
    
    var th11,th12,th13,th21,th22,th23,th31,th32,th33 = 0;
    th11 = document.getElementById("th11").innerText;
    th12 = document.getElementById("th12").innerText;
    th13 = document.getElementById("th13").innerText;
    th21 = document.getElementById("th21").innerText;
    th22 = document.getElementById("th22").innerText;
    th23 = document.getElementById("th23").innerText;
    th31 = document.getElementById("th31").innerText;
    th32 = document.getElementById("th32").innerText;
    th33 = document.getElementById("th33").innerText;
    /*
        X | x | X
        * | * | *
        * | * | *
    */
        if (th11 == "X" && th12 == "X" && th13 == "X") {
            document.getElementById("trun").innerHTML = re;
            document.getElementById("num").innerHTML = Xwin;
            end = 1;
        }
    /*
        * | * | *
        X | X | X
        * | * | *
    */
    else if (th21 == "X" && th22 == "X" && th23 == "X") {
        document.getElementById("trun").innerHTML = re;
        document.getElementById("num").innerHTML = Xwin;
        end = 1;
    }
    /*
        * | * | *
        * | * | *
        X | X | X
    */
    else if (th31 == "X" && th32 == "X" && th33 == "X") {
        document.getElementById("trun").innerHTML = re;
        document.getElementById("num").innerHTML = Xwin;
        end = 1;
    }
    /*
        X | * | *
        X | * | *
        X | * | *
    */
    else if (th11 == "X" && th21 == "X" && th31 == "X") {
        document.getElementById("trun").innerHTML = re;
        document.getElementById("num").innerHTML = Xwin;
        end = 1;
    }
    /*
        * | X | *
        * | X | *
        * | X | *
    */
    else if (th12 == "X" && th22 == "X" && th32 == "X") {
        document.getElementById("trun").innerHTML = re;
        document.getElementById("num").innerHTML = Xwin;
        end = 1;
    }
    /*
        * | * | X
        * | * | X
        * | * | X
    */
    else if (th13 == "X" && th23 == "X" && th33 == "X") {
        document.getElementById("trun").innerHTML = re;
        document.getElementById("num").innerHTML = Xwin;
        end = 1;
    }
    /*
        X | * | *
        * | X | *
        * | * | X
    */
    else if (th11 == "X" && th22 == "X" && th33 == "X") {
        document.getElementById("trun").innerHTML = re;
        document.getElementById("num").innerHTML = Xwin;
        end = 1;
    }
    /*
        * | * | X
        * | X | *
        X | * | *
    */
    else if (th13 == "X" && th22 == "X" && th31 == "X") {
        document.getElementById("trun").innerHTML = re;
        document.getElementById("num").innerHTML = Xwin;
        end = 1;
    } 
    /*
        X | x | X
        * | * | *
        * | * | *
    */
        if (th11 == "O" && th12 == "O" && th13 == "O") {
            document.getElementById("trun").innerHTML = re;
            document.getElementById("num").innerHTML = Owin;
            end = 1;
        }
    /*
        * | * | *
        X | X | X
        * | * | *
    */
    else if (th21 == "O" && th22 == "O" && th23 == "O") {
        document.getElementById("trun").innerHTML = re;
        document.getElementById("num").innerHTML = Owin;
        end = 1;
    }
    /*
        * | * | *
        * | * | *
        X | X | X
    */
    else if (th31 == "O" && th32 == "O" && th33 == "O") {
        document.getElementById("trun").innerHTML = re;
        document.getElementById("num").innerHTML = Owin;
        end = 1;
    }
    /*
        X | * | *
        X | * | *
        X | * | *
    */
    else if (th11 == "O" && th21 == "O" && th31 == "O") {
        document.getElementById("trun").innerHTML = re;
        document.getElementById("num").innerHTML = Owin;
        end = 1;
    }
    /*
        * | X | *
        * | X | *
        * | X | *
    */
    else if (th12 == "O" && th22 == "O" && th32 == "O") {
        document.getElementById("trun").innerHTML = re;
        document.getElementById("num").innerHTML = Owin;
        end = 1;
    }
    /*
        * | * | X
        * | * | X
        * | * | X
    */
    else if (th13 == "O" && th23 == "O" && th33 == "O") {
        document.getElementById("trun").innerHTML = re;
        document.getElementById("num").innerHTML = Owin;
        end = 1;
    }
    /*
        X | * | *
        * | X | *
        * | * | X
    */
    else if (th11 == "O" && th22 == "O" && th33 == "O") {
        document.getElementById("trun").innerHTML = re;
        document.getElementById("num").innerHTML = Owin;
        end = 1;
    }
    /*
        * | * | X
        * | X | *
        X | * | *
    */
    else if (th13 == "O" && th22 == "O" && th31 == "O") {
        document.getElementById("trun").innerHTML = re;
        document.getElementById("num").innerHTML = Owin;
        end = 1;
    }
    else if ((th11 == "X" || th11 == "O") && (th12 == "X" || th12 == "O") && (th13 == "X" || th13 == "O") && (th21 == "X" || th21 == "O") && (th22 == "X" || th22 == "O") && (th23 == "X" || th23 == "O") && (th31 == "X" || th31 == "O") && (th32 == "X" || th32 == "O") && (th33 == "X" || th33 == "O")) {
        document.getElementById("trun").innerHTML = re;
        document.getElementById("num").innerHTML = end;
    }
}
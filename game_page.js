player1_name = localStorage.getItem("p1");
player2_name = localStorage.getItem("p2");

p1score = 0;
p2score = 0;

document.getElementById("p1_name").innerHTML = player1_name + " : ";
document.getElementById("p2_name").innerHTML = player2_name + " : ";
document.getElementById("p1_score").innerHTML = p1score;
document.getElementById("p2_score").innerHTML = p2score;
document.getElementById("Q_turn").innerHTML = "Question turn " + player1_name;
document.getElementById("A_turn").innerHTML = "Answer turn " + player2_name;

function send() {
    i_word = document.getElementById("word").value;
    word = i_word.toLowerCase();
    c1 = word.charAt(1);
    lw = word.length;
    lw_middle = Math.floor(lw / 2);
    c2 = word.charAt(lw_middle);
    second_last = lw - 1;
    c3 = word.charAt(second_last);
    removec1 = word.replace(c1, "_");
    removec2 = removec1.replace(c2, "_");
    removec3 = removec2.replace(c3, "_");
    console.log(removec3);
    qword = "<h4 id='word_display'>q. " + removec3 + "</h4>";
    ibox = "<br> answer=<input id='ibox' type='text'>";
    cbutton = "<br><br><button class='btn btn-danger' onclick='check()'>Check</button>";
    row = qword + ibox + cbutton;
    document.getElementById("output").innerHTML = row;
}
Qturn = "player1";
Aturn = "player2";

function check() {
    get_word = document.getElementById("ibox").value;
    answer = get_word.toLowerCase();
    if (word == answer) {
        if (Aturn == "player1") {
            p1score = p1score + 1;
            document.getElementById("p1_score").innerHTML = p1score;
        } else {
            p2score = p2score + 1;
            document.getElementById("p2_score").innerHTML = p2score;
        }
    }
    if (Qturn == "player1") {
        Qturn = "player2"
        document.getElementById("Q_turn").innerHTML = "Question Turn - " + player2_name;
    } else {
        Qturn = "player1"
        document.getElementById("Q_turn").innerHTML = "Question Turn - " + player1_name;
    }
    if (Aturn == "player1") {
        Aturn = "player2"
        document.getElementById("A_turn").innerHTML = "Answer Turn - " + player2_name;
    } else {
        Aturn = "player1"
        document.getElementById("A_turn").innerHTML = "Answer Turn - " + player1_name;
    }
}
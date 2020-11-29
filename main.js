function next(){
    var n1=document.getElementById("player_1_name").value;
    var n2=document.getElementById("player_2_name").value;
    localStorage.setItem("p1",n1);
    localStorage.setItem("p2",n2);
    window.location="game_page.html";
}
function adduser()
 {
    player1_name = document.getElementById("P1").value;
    player2_name = document.getElementById("P2").value;
    localStorage.setItem("Player 1's name = ", player1_name);
    localStorage.setItem("Player 2's name = ",player2_name);
    window.location ="game_page.html";
}
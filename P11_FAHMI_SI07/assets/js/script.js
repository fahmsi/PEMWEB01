// menangkap semua elemen a
document.querySelectorAll("#opts a").forEach((a) => 
    // jika diklik akan menjalankan fungsi computerChoice
    a.addEventListener("click",(element) => {
        computerChoice(element);
    })
);
function computerChoice(elemen) {
    // tangkap pilihan user
    let pilihanUser =elemen.target.innerText;

    //menangkap elemen result dengan queryselector untuk menampung 
    // nilai hasil dari game
    let pilihanComputer = document.querySelector("#result");

    // membuat array pilihan untuk komputer
    let choices = ["Rock","Paper","Scissors"];

    // pilihan random untuk komputer
    pilihanComputer.innerHTML =
    choices[Math.round(Math.random() * choices.length)];
    pilihanComputer = pilihanComputer.innerHTML;


    if (pilihanUser == pilihanComputer) {
        alert("SERI");
    }

    
    if (pilihanUser == "Rock" && pilihanComputer == "Scissors") {
        alert("MENANG");
    }else if(pilihanUser == "Paper" && pilihanComputer == "Rock") {
        alert("MENANG");
    }else if(pilihanUser == "Scissors" && pilihanComputer == "Paper") {
        alert("MENANG");
    }


    if (pilihanUser == "Rock" && pilihanComputer == "Paper") {
        alert("KALAH");
    }else if(pilihanUser == "Paper" && pilihanComputer == "Scissors") {
        alert("KALAH");
    }else if(pilihanUser == "Scissors" && pilihanComputer == "Rock") {
        alert("KALAH");
    }
}
// scriviamo un programma che stampi ordinato da 1 a 100

const container = document.querySelector(".container");


for (let i = 1; i <= 98; i++){
    // container.innerHTML += i; 

    if (i % 3 == 0 && i % 5 == 0) {
        let i = "fizzbuzz";
        console.log(i);
        container.innerHTML += i;
    }

    else if (i % 5 == 0) {
        let i = "buzz"
        console.log(i);
        container.innerHTML += i;
    }

    else if (i % 3 == 0) {
        let i = "fizz"
        console.log(i);
        container.innerHTML += i;
    }

    else {
        console.log(i);
        container.innerHTML += i;
    }



}

// stampiamo diversamente per i numeri divisibili per 3,5 ed entrambi

// creiamo un div container nel dom

// appendiamo gli elementi all'interno del dom

// applichiamo le classi CSS


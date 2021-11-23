// scriviamo un programma che stampi ordinato da 1 a 100

const container = document.querySelector(".container");


for (let i = 1; i <= 100; i++){

    const element = document.createElement ("div");
    console.log(element);
    container.append(element);
    element.classList.add("box");
    

    // appendo i miei nuovi div, al container principale

    

    // stampiamo diversamente per i numeri divisibili per 3,5 ed entrambi

    if (i % 3 == 0 && i % 5 == 0) {
        let i = "FizzBuzz";
        console.log(i);
        element.innerHTML += i;
        element.classList.add("red");
        
    }

    else if (i % 5 == 0) {
        let i = "Buzz"
        console.log(i);
        element.innerHTML += i;
        element.classList.add("yellow");
    }

    else if (i % 3 == 0) {
        let i = "Fizz"
        console.log(i);
        element.innerHTML += i;
        element.classList.add("green");
    }

    else {
        console.log(i);
        element.innerHTML += i;
        element.classList.add("blue");
    }

    


}



// creiamo un div container nel dom

// appendiamo gli elementi all'interno del dom

// applichiamo le classi CSS


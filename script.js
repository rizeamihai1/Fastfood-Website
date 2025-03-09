// cand dau click alterneaza imaginile
function schimbaImagine() {
    const imagine = document.getElementById("imagine");
    const srcActual = imagine.getAttribute("src");
    const srcNou = srcActual.includes("logo.png") ? "./images/o1.jpg" : "./images/logo.png";
    imagine.setAttribute("src", srcNou);
}
// schimb cularea la header din galbenu ala in portocaliu
document.addEventListener('DOMContentLoaded', (event) => {
    const navigare = document.querySelector('nav');
    // getComputed ma lasa sa accesez toate stilurile unui elem
    const backgroundColor = window.getComputedStyle(document.body).backgroundColor;
    navigare.style.backgroundColor = '#f19234';
    console.log(backgroundColor);
    const button = document.querySelector('button');
    button.style.backgroundColor = '#f18234';
});
//pt a crea add to cart ul
document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItems = document.querySelector('ul');
    
    function updateCart() {
        cartItems.innerHTML = '';
        
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} x${item.contor}`;
            cartItems.appendChild(li);
        });
        
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    
    function addToCart(productName) {
        // Verifică dacă produsul este deja în coș
        const existingProduct = cart.find(item => item.name === productName);
        if (existingProduct) {
            // Incrementez contorul dacă produsul este deja în coș
            existingProduct.contor += 1;
        } else {
            // Dacă produsul nu este deja în coș, adaugă-l și actualizează coșul
            cart.push({ name: productName, contor: 1 });
        }
        
        updateCart();
    }
    
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.getAttribute('data-product');
            addToCart(productName);
        });
    });
    
    document.getElementById('clear-cart').addEventListener('click', () => {
        cart.length = 0;
        updateCart();
    });
    
    updateCart();
});
// iau elem container si adaug ca si copil un nou produs
function AdaugaProdusNou() {
    // Selectez sectiunea cu produse 
    var container = document.querySelector('.produs-container');

    // Creez un div nou pt produs
    var newProduct = document.createElement('div');
    newProduct.className = 'produs';

    // adaug cu innerHTML continutul pt produs
    newProduct.innerHTML = `
        <div class="produs-details">
        <p>Chifla proaspătă, pui grillat suculent, frunze de salată verde, roșii, ceapă caramelizată
        și sos picant. O alegere sănătoasă și delicioasă pentru iubitorii de burgeri cu carne de pui.
        </p>
        <button class="add-to-cart" data-product="Burger cu pui">Adaugă în coș</button>
    </div>
    <img src="./images/f11.png" alt="poza cartofi prăjiți">
    <p class="produs-title">Burger cu pui</p>
    </div>
    `;
    // adaug nou produs la sectiunea aia de produse 
    container.appendChild(newProduct);
}
// sterg (daca pot) ultimu copil adica produs
function stergeUltElem() {
    // Selectez sectiunea cu produse 
    var container = document.querySelector('.produs-container');

    // iau ultimu produs din lista
    var lastProduct = container.lastElementChild;

    // verific sa nu fie gol (sa am cel putin un produs)
    if (lastProduct) {
        container.removeChild(lastProduct);
    } else {
        console.log('Nu există produse de șters.');
    }
}
// functie de modifica css ul de aici :)
function SchimbStilDinJS() {
    var butoane = document.querySelectorAll('.butoane-add-sterge');
    // cu . ca e clasa 
    // selectez clasa cu butoanele alea
    // iterez sa modific fiecare buton
    butoane.forEach(function(buton) {
    buton.style.display = 'flex';
    buton.style.justifyContent = 'space-between';
    buton.style.alignItems = 'center';
    buton.style.marginRight = '10px';
    buton.style.backgroundColor = '#fdcc04';
    buton.style.padding = '10px';
    buton.style.borderRadius = '10px';
    });
}
window.onload =  SchimbStilDinJS();

// pentru tastatura
function SchimbareCuloare() { 
    // vreau sa selectez paragrafu din index cu Restaurantul nostru si cand apas una din taste imi schimba culoarea
    // R - rosu G - galben A - albastru
    var paragraf = document.getElementById('paragrafu-meu');
    document.body.onkeyup = function(event) {
        switch (event.key) {
        case "r":
        paragraf.style.color = "#d9534f";
        break;
        case "g":
        paragraf.style.color = "#ffc244";
        break;
        case "a":
        paragraf.style.color = "#0f88eb";
        break;
        default:
        console.log("Altă tastă"); return; 
        }
    }
}
window.onload = SchimbareCuloare;
// Timer sa folosesc setInterval:

// variabila pt timp
let timpPetrecut = 0;

setInterval(function() {
    timpPetrecut += 1; // o data la 60000 creste cu un minut
    document.getElementById('timer').innerText = `Timp petrecut pe site: ${timpPetrecut} minute`;

    if(timpPetrecut % 5 === 0) {
        alert(`Au trecut ${timpPetrecut}  minute de când sunteți pe site.`);
    }
}, 60000); // 60000 e un minut
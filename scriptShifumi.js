
const btn = document.querySelectorAll('button');
let scorePlayer = document.getElementById('scoreplayer');
let scoreComputer = document.getElementById('scorecomputer');
console.log(scorePlayer, scoreComputer);
let btnPierre = document.getElementById('pierre');

let btnPapier=document.getElementById('papier');

let btnCiseaux=document.getElementById('ciseaux');

let btnRandom=document.getElementById('random');
let choixPlayer = [...document.getElementsByClassName('choix-joueur')];
console.log(choixPlayer);

let emoji = document.querySelectorAll('span');

let opierre = document.getElementById('c-pierre');
let opapier = document.getElementById('c-papier');
let ociseaux = document.getElementById('c-ciseaux');
let selecJoueur = document.getElementsByClassName('resultat-joueur');
let selecComputer = document.getElementsByClassName('resultat-computer');
let message = document.getElementById('message');
console.log(message);
let btnReset=document.getElementById('reset');
console.log(btnReset);
let btnNext= document.getElementById('next');
console.log(btnNext);


let pierre = "pierre";
let papier = "papier" ; 
let ciseaux = "ciseaux";





const jouerManche = (e) =>{
    
    let choix = e.target; 
    console.log(choix);
    
    choixPlayer.forEach((btn) =>{
        
        btn.classList.add('desactivated');
        btn.removeEventListener('click', jouerManche);
        
    });
    
    let choixJoueur = choix.id;
    console.log(choixJoueur);

    let choixIA = faireChoixIA();

    verifWinner(choixJoueur, choixIA);
    // Je n'avais pas mis les arguments pour faire fonctionner;

    btnNext.style.visibility = "visible";
    selecJoueur.textContent = choix.id;
    selecComputer.textContent="" ;

    btnNext.addEventListener('click', nouvelleManche);

    findePartie(choixJoueur, choixIA);

}

const faireChoixIA = () =>{
    // O = Pierre;
    // 1 = Feuille;
    // 2 = ciseaux;
    
    let nbrRdm = Math.floor(Math.random() * 3);
    //Me permet de d'obtenir nbr rdm de 0 à 3 grace *3
    
    switch(nbrRdm){
        case 0 : 
        opierre.classList.add('actived');
        return pierre;
        case 1 : 
        opapier.classList.add('actived');
        return papier;
        default:
            ociseaux.classList.add('actived');
            return ciseaux;
        }
}
    
choixPlayer.forEach(btn => btn.addEventListener('click', jouerManche));

const verifWinner = (choixJoueur, choixIA) => {
    if (choixJoueur == choixIA) {
        console.log("Egalité");
        message.textContent="Egalité";
        message.style.fontSize="35px";
        message.style.color = "orangered";
        return;
    }
    if (choixJoueur == pierre ){
        if(choixIA == papier){
            return victoireIA();
        } else if (choixIA == ciseaux){
            return victoireJoueur();
        }
    }
    if (choixJoueur == papier){
        if (choixIA == ciseaux){
            return victoireIA();
        } else if (choixIA == pierre){
            return victoireJoueur();
        }    
        
    }
    
    if (choixJoueur == ciseaux){
        if (choixIA == pierre){
            return victoireIA();
        } else if (choixIA == papier){
            return victoireJoueur();
        }
    }
    
    
}


const victoireIA = () =>{
    message.textContent =" L'ordinateur gagne ";
    message.style.fontSize="35px";
    message.style.color = "orangered";
    scoreComputer.textContent++;
    console.log("victoire IA ");
}

const victoireJoueur = () => {
    message.textContent="Vous avez gagné";
    message.style.fontSize= "35px"; 
    message.style.color = "orangered";
    scorePlayer.textContent++;
    console.log("victoire Joueur ");
    
}

// btnNext.addEventListener('click', nouvelleManche);

const nouvelleManche = () =>{
    
    choixPlayer.forEach(btn =>{

       btn.classList.remove('desactivated');
       btn.classList.remove('actived');
       btn.addEventListener('click', jouerManche);
       opierre.classList.remove('actived');
       opapier.classList.remove('actived');
       ociseaux.classList.remove('actived');
       message.textContent="A vous de jouer";
        
    })
    
};

// btnReset.addEventListener('click', jouerManche);



const tourSuivant = () => {
    choixPlayer.forEach (btn => {
        btn.classList.remove('actived');
        btnNext.style.visibility="hidden";
    })
};

btnNext.addEventListener('click', tourSuivant);

document.addEventListener('keydown', (event)=>{
     if (event.key == " " ){
        tourSuivant();
    }
})



const reset = () =>{
    scoreComputer.textContent = "0";
    scorePlayer.textContent = "0";
    alert("retour 0 ?");
    opierre.classList.remove('actived');
    opapier.classList.remove('actived');
    ociseaux.classList.remove('actived');
}

btnReset.addEventListener('click', reset);

const findePartie = () =>{
    if (scorePlayer.textContent == "3"){
        alert ("Vous avez gagné");
        reset()

    }if(scoreComputer.textContent == "3"){
        alert("Ordinateur gagne");
        reset()
    }
}

console.log(scorePlayer);
console.log(scoreComputer);




// let nbAleatoire = Math.floor(Math.random()*3);
// console.log(nbAleatoire);

// btn.forEach(element => {
//     element.addEventListener('click', move2);
// });


// function move2(event) {
//     for (const button of btn) {
//         if (button === event.target) {
//             button.classList.toggle('modif');
//         }
//     }
// }
//Dans cet exemple, nous avons modifié la fonction move2 pour qu'elle prenne un argument event, 
//qui est l'événement click qui a déclenché la fonction. 
//Nous utilisons l'objet event.target pour cibler l'élément qui a été cliqué 
//et nous utilisons une condition pour vérifier si cet élément est égal à l'élément 
//actuel de la boucle for. Si c'est le cas, nous utilisons la méthode classList.toggle
// pour ajouter ou supprimer la classe modif à cet élément. Cela nous permet de ne modifier que l'élément
// qui a été cliqué, plutôt que tous les éléments de la liste.


// btnRandom.addEventListener('click', log );
// function log(number){
//     var number = Math.random();
//     console.log(number);
    
//     if (number < 1/3) {
//         let choixIA = "pierre"; 
//         console.log(choixIA);

//     } else if (number < 2/3) {
//         let choixIA = "papier";
//         console.log(choixIA);
//     } else {
//         let choixIA = "ciseaux";
//         console.log(choixIA);
//     }
    
// };

// let compteur = document.createElement('div');
// compteur.textContent=" 0 - 0 " ;
// document.getElementById('random').prepend(compteur);
// compteur.style.fontSize="35px";
// compteur.style.color="red";


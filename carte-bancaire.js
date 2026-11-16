// Vérifier si un n° de carte bancaire est valide

/*
4111-1111-1111-1111 : Pas valide car tirets
4111 1111 1111 111  : Pas valide car manque un digit
4111 1111 1111 1112 : Pas valide car dernier chiffre faux
5555 5555 5555 4434 : Pas valide car  1 chiffre faux
4111 1111 1111 1111 : Valide
5555 5555 5555 4444 : Valide

Algorithme de Luhn

    1. Parcourir de droite à gauche.
    a. Ignorer les caractères non numeriques.
    2. Double (*2) un chiffre sur deux, en commançant par le deuxième.
    3. Si un chiffre doublé dépasse 9, on soustrait 9.
    4. Faire la somme de tous les chiffres.
    5. Si la somme est un multiple de 10, alors le numéro est valide (modulo).
*/

// Une chaîne de caractères
let c = 'abcdefgh';

// lecture de chaque caractère de la chaîne
for (let i=0 ; i<8; i++) {
    console.log(c.substring(i,i+1))
}

// Lecture depuis la fin
let d = 'abcdefgh';
for (let i=c.length ; i>=0; i--) {
    console.log(d.substring(i,i+1))
}

// Tentative code de vérification : 

let numero = "4111 1111 1111 1111";
for (let i = numero.length - 1; i >= 0; i--) {
    console.log(numero.substring(i, i + 1));
}
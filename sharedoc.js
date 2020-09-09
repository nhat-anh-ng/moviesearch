/*let dailySalesLundiP1 = {
    dayOne: 827,
    dayTwo: 294,
    dayThree: 92,
    dayFour: 876,
    averageDailySales: function () {
        return (this.dayOne + this.dayTwo + this.dayThree + this.dayFour) / 4 ;
    }
    let resultat = dailySalesLundiP1.map(averageDailySales),
}; 

//key

let p1 = {
    Lundi: averageDailySales,
    Mardi: 97,
    Mercredi: 86,
    Jeudi: 97,
    Vendredi: 865,
    Samedi: 78,
    Dimanche: 658
};

let dailySales = [
    { produit: 'HE728', Lundi: 837}, 
]
*/

/*let p1 = {
    lundi: 827,
    mardi: 294,
    mercredi: 92,
    jeudi: 876,
    vendredi: 829,
    samedi: 292,
    dimanche: 982,
    averageDailySales: function () {
        return (this.dayOne + this.dayTwo + this.dayThree + this.dayFour) / 4 ;
    }
    let resultat = p1.map( el => )
}; 


let p1 = {
    lundi: 8273,
    mardi: 872
}

let keys = Object.keys(p1);
let vals = Object.values(p1); */

/*let dailySales = new Map ( [
    ['lundi', 57],
    ['mardi', 163],
    ['mercredi', 289],
    ['jeudi', 290],
    ['vendredi', 506],
    ['samedi', 708],
    ['dimanche', 986],
]);

for (let entry of dailySales) {
    console.log(entry);
} */

let dailySales = [
    { jour: 'Lundi', sum: 286},
    { jour: 'Mardi', sum: 290},
    { jour: 'Mercredi', sum: 509},
    { jour: 'Jeudi', sum: 569},
    { jour: 'Vendredi', sum: 786},
    { jour: 'Samedi', sum: 820},
    { jour: 'Dimanche', sum: 970},
];


let averageDailySales = dailySales.map( sales => `${sales.jour} ${sales.sum}`);
console.log(averageDailySales)

/*for (let entry of dailySales) {
    averageDailySales: function () {
        return (this.dayOne + this.dayTwo + this.dayThree + this.dayFour) / 4 ;
    }
    console.log(averageDailySales)
}*/

var count = (function () {
    var counter = 0;
    return function() (return counter +=1;)
}) ();

function displaycount() {
    document.getElementById("carrier").innerHTML = count();
}
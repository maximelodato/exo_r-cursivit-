const computeSquareRoot = (n, p) => {
  
    if (n < 0) {
        return 0;
    }

    // Initialiser la précision
    let precisions = Math.pow(10, -p);

    // Estimation initiale de la racine carrée
    let guess = n / 2;

    // Méthode itérative de Newton
    while (Math.abs(guess * guess - n) > precisions) {
        guess = (guess + n / guess) / 2;
    }

    // Retourner la valeur arrondie avec la précision spécifiée
    return parseFloat(guess.toFixed(p));
};

console.log(computeSquareRoot(25, 5));  // Affiche 5.00000

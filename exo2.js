const computeFactorialRec = (n) => {
    if (n === 0 || n === 1) {
      return 1;
    }
  
    return n * computeFactorialRec(n - 1);
  };

  console.log(computeFactorialRec(5));  // Affiche 120
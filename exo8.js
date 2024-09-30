const countValidQueens = (n) => {
    // Cette fonction aide à vérifier si une reine peut être placée à la position (row, col)
    const canPlace = (board, row, col) => {
        // Vérifier la même colonne
        for (let i = 0; i < row; i++) {
            if (board[i] === col) {
                return false;
            }
        }
        // Vérifier la diagonale gauche
        for (let i = 0; i < row; i++) {
            if (board[i] === col - (row - i)) {
                return false;
            }
        }
        // Vérifier la diagonale droite
        for (let i = 0; i < row; i++) {
            if (board[i] === col + (row - i)) {
                return false;
            }
        }
        return true;
    };

    // Fonction récursive pour résoudre le problème
    const solveNQueens = (board, row) => {
        // Si toutes les reines ont été placées
        if (row === n) {
            return 1; // On a trouvé une solution
        }
        let count = 0;
        // Essayer de placer une reine dans chaque colonne de cette ligne
        for (let col = 0; col < n; col++) {
            if (canPlace(board, row, col)) {
                // Si la reine peut être placée, on la place (sauvegarde la colonne)
                board[row] = col;
                // Continuer à placer les reines pour les lignes suivantes
                count += solveNQueens(board, row + 1);
                // Backtracking : enlever la reine placée pour explorer d'autres solutions
                board[row] = -1;
            }
        }
        return count;
    };

    // On initialise le tableau qui contiendra les positions des reines
    const board = new Array(n).fill(-1);
    return solveNQueens(board, 0);
};

console.log(countValidQueens(4)); // 2 solutions pour un échiquier 4x4
console.log(countValidQueens(8)); // 92 solutions pour un échiquier 8x8

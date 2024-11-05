const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

const NumeriPari= []; 
nums.forEach(function(num) {
  if (num % 2 === 0) { 
   NumeriPari.push(num); 
  }
});
console.log(NumeriPari); 
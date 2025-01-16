function Question01() {
  let index: number = 13;
  let sum: number = 0;
  let increment: number = 0;

  while (increment < index) {
    increment += 1;
    sum = sum + increment;
  }
  console.log('A Soma é:',sum);
}


Question01()


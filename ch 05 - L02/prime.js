let i = 2;
while (i <= 500) {
  let isPrime = true;  // At first declaring it as a prime number.
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {  //Then I'm checking if it's getting divided by any number other than 1 or that number.
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(i);
  }
  i++;
}
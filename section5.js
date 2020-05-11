function isPrime(numInput) {
  if (numInput === 1) return false;
  if (numInput === 2) return true;
  for (let i = 2; i < numInput; i++) {
    if (numInput % i === 0) return false;
  }
  return true;
}
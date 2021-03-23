function* squaredNumberGenerator(max) {
  let n = 0
  while (n < max) {
      n++;
      yield n*n;
  }
}

for (const sq of squaredNumberGenerator(10)) {
  console.log(sq)
}

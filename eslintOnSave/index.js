const foo = 'bar';

const dogs = ['boxer', 'bloodhound', 'doberman'];
for (let i = 0; i < someLimit; i++) {
  for (let j = 0; j < dogs.length; j++) {
    const thisDog = `${dogs[j]}(" + i + ")`;
    let stepsWalked = 0;
    while (stepsWalked < 10) {
      console.log(`${thisDog} has walked ${stepsWalked} steps`);
      stepsWalked++;
    }
  }
}

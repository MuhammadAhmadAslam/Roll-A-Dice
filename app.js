function roll() {
  let change = document.getElementById('diceimage')
  let random = Math.floor(Math.random()*6)+1;
  change = diceimage.src=`images/dice${random}.jpeg`
  console.log(change);
}
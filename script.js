var factList = [
  "In 2015, there were an estimated 43.4 million adults –about 1 in 5 Americans aged 18 or older – with a mental illness within the previous year.","Just over 20% – or 1 in 5 – children, have had a seriously debilitating mental disorder.", 
  "In 2015, 75% of children aged 4 to 17 received treatment for their mental disorders within the past year.", 
  "It is estimated that 1 in 10 adults suffer from some type of mood disorder, with the most common conditions being depression and bipolar disorder.", "Suicide, which is often associated with symptoms of mental illness, is the 10th leading cause of death the U.S. and the 2nd leading cause of death among people aged 15-34."
  ];

var fact = document.getElementById("fact");
var myBtn = document.getElementById("myBtn");
var count = 0;

myBtn.addEventListener("click", displayFact);

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.lenght){
    count = 0;
  }
}

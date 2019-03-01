function theBeatlesPlay(musicians, instruments){
  var array = []
  for(let i=0; i<musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array
}

function johnLennonFacts(facts){
  let i = 4
  while(i > 0){
    facts = facts[i]
    console.log(--i)
  }
  return facts
}

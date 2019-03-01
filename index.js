function theBeatlesPlay(musicians, instruments){
  var array = []
  for(let i=0; i<musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array
}

function johnLennonFacts(facts){
  let i = 0
  while(i < 5){
    facts = `${facts[i]}!!!`
    i++
  }
  return facts
}

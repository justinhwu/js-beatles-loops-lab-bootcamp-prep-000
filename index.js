function theBeatlesPlay(musicians, instruments){
  var array = []
  for(let i=0; i<musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array
}

function johnLennonFacts(facts){
  let i = 0
  while(i < facts.length){
    facts[i] += "!!!"
    console.log(i++)
  }
  return facts
}

function iLoveTheBeatles(num){
  var array = []
  var i = 0

	function incrementVariable() {
		i = i + 1
    return i
	}
  
  do{
    array.push("I love the Beatles!")
    num = num + 1
    return num
  }while(num <15
  
  return array
}

const testVar = {}

function testFunc() {
  return "hi"
}

const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
]

function superbowlWin(array){
  //return array.result === "W"
  array.find( function(s){
    if(s.result === "W"){
      return s
    }
  })
}

const inventory = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5}
];

function findCherries(arr){
  arr.find(function(fruit){
    return fruit.name === "cherries"
  })
}

findCherries(inventory)
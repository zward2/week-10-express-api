
///// A

function calculateTotalSalary(lineup) {
  return lineup.reduce((count, position) => {
    return count + position.salary
  }, 0)
}

///// B
// returns a number
getZero = function  () {
    return 0
}

// returns a number
function reducer(count, player) {
  return count + player.salary
}
function calculateTotalSalary(lineup) {
    // reduce takes a function as a param so a number returned from the function won't work
  return lineup.reduce(reducer(count, player), getZero())
}


///// C

const reducer = (count, player) => count + player.salary

function calculateTotalSalary(lineup) {
    // reducer is a function
  return lineup.reduce(reducer, 0)
}


///// D


function reducer(count, player) {
  return count + player.salary
}
function calculateTotalSalary(lineup) {
  return lineup.reduce((count, player) => {
      reducer(count, player)
  }, 0)
}

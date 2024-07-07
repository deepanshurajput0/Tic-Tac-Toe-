let currentUser = 'X'
let ply = Array(9).fill(null)


function isWinner(){
    if(
        ( ply[0] !== null && ply[0] == ply[1] && ply[1] == ply[2]) || 
        ( ply[3] !== null && ply[3] == ply[4] && ply[4] == ply[5]) ||
        ( ply[6] !== null && ply[6] == ply[7] && ply[7] == ply[8]) ||
        ( ply[0] !== null && ply[0] == ply[3] && ply[3] == ply[6]) ||
        ( ply[1] !== null && ply[1] == ply[4] && ply[4] == ply[7]) ||
        ( ply[2] !== null && ply[2] == ply[5] && ply[5] == ply[8]) ||
        ( ply[0] !== null && ply[0] == ply[4] && ply[4] == ply[8]) ||
        ( ply[2] !== null && ply[2] == ply[4] && ply[4] == ply[6]) 

    ) 
    { 
     document.write(`<h1> Congratulations ${currentUser} is Winner </h1>`)
     return
    }
    if(!ply.some((e)=> e=== null)){
        document.write(`<h1> Draw try again</h1>`)
        return
    }
}

function handleUser(user){
  const id = Number(user.id)
  ply[id] = currentUser;
  user.innerText = currentUser
  isWinner()
  if(currentUser ==='X'){
    currentUser = '0'
  }else{
    currentUser = 'X'
  }
  console.log(ply)
}



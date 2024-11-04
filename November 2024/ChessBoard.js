//Your task is to write a function that takes two integers rows and columns and returns a 
//chessboard pattern as a two dimensional array.

function chessBoard(rows, columns){
  let board = []
  for(let x = 0; x < rows; x++){
      let arr = []
    for(let y = 0; y < columns; y++){
      if((x + y) % 2 == 0 ){
        arr.push('X')
      }else{
        arr.push('O')
      }
    }
    return board.push(arr)
  }
  return board
}
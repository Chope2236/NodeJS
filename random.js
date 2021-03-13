 function between(min, max) {  
    return Math.floor(
      Math.random() * (max - min) + min
    )
  }
  
  console.log(  
    between(10, 200)
  )

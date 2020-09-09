function  bounceOff(val1,val2) {
    if (val1.x - val2.x < val2.width/2 + val1.width/2
      && val2.x - val1.x < val2.width/2 + val1.width/2) {
    val1.velocityX = val1.velocityX * (-1);
    val2.velocityX = val2.velocityX * (-1);
  }
  if (val1.y - val2.y < val2.height/2 + val1.height/2
    && val2.y - val1.y < val2.height/2 + val1.height/2){
    val1.velocityY = val1.velocityY * (-1);
    val2.velocityY = val2.velocityY * (-1);
  }
  
  }
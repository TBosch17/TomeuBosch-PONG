class bolla {
    constructor(x, y, diam, velX, velY, r, g, b) {
      this.x = x;
      this.y = y;
      this.d = diam;
      this.vX = velX;
      this.vY = velY;
      this.color = {
        r: r,
        g: g,
        b: b,
      };
     
    }
    dibuixa() {
      fill(this.color.r, this.color.g, this.color.b);
      circle(this.x, this.y, this.d);
    }
    moviment() {
      this.x = this.x + this.vX;
      this.y = this.y + this.vY;
  
      if (this.y > height) {
        this.x= width/2
        this.y = height/2
        this.vX = 0
        playyer1.x = width/2 - 75
        playyer2.x = width/2 - 75
        playyer1.p = playyer1.p +1
      }
      if (this.y < 0) {
        this.x= width/2
        this.y = height/2
        this.vX = 0
        playyer1.x = width/2 - 75
        playyer2.x = width/2 - 75
        playyer2.p = playyer2.p +1
      }
      if (this.x < 0){
        this.vX *= -1;
      }
      if (this.x > width){
        this.vX *= -1;
      }
      
      if (this.y - this.d / 2 < playyer1.y + playyer1.a) {
        if( this.x > playyer1.x){
          if(this.x < playyer1.x + playyer1.l){
        this.vY *= -1;
        this.vX = random(5, -5);
          }
         }
        }
      if (this.y + this.d / 2 > playyer2.y) {
        if (this.x > playyer2.x) {
          if (this.x < playyer2.x + playyer2.l) {
            this.vY *= -1;
            this.vX = random(5, -5);
          }
        }
      }
      
    }
  }
  
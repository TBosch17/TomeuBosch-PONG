class jugador {
    constructor(x, y, ample, llarg, velX, velY, r, g, b, esq, dret, punts, xMarc, yMarc, nom){
      this.x = x
      this.y = y
      this.a = ample
      this.l = llarg
      this.vX = velX
      this.vY = velY
      this.color = {
        r: r,
        g: g,
        b: b,
      }
      this.dret = dret
      this.esq = esq
      this.p = punts
      this.xM = xMarc
      this.yM = yMarc
      this.n = nom
    }
    dibuixa(){
      fill(this.color.r, this.color.g, this.color.b);
      rect(this.x, this.y, this.l, this.a);
    }
    moviment(){
      if(keyIsDown(this.esq)){
        if(this.x > 0){
          this.x = this.x - this.vX
        }  
      }
      if(keyIsDown(this.dret)){
        if(this.x + this.l < width){
          this.x = this.x + this.vX
        }  
      }
    }
      marcador(){
      text("Player_" + this.n + ": " + this.p, this.xM, this.yM);
    }
  }
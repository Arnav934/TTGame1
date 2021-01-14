class Home {
      constructor(){
      this.singlePlayerButton = createButton('SINGLE-PLAYER')    
      this.multiPlayerButton = createButton('MULTI-PLAYER')
      this.title = createElement('H1')
      }

      display(){
      this.singlePlayerButton.position(displayWidth/2 - 100, displayHeight/2 - 100)  
      this.multiPlayerButton.position(displayWidth/2 - 100, displayHeight/2)  
      this.title.html("Table Tennis Game")
      this.title.position(displayWidth/2 - 100, displayHeight/6)

            this.singlePlayerButton.mousePressed(()=>{
            this.singlePlayerButton.hide();    
            this.multiPlayerButton.hide();
            
            singlePlrHome = new SinglePlayerHome();
            singlePlrHome.display()
            })
      }      
}
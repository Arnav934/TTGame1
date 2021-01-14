class SinglePlayerHome{
      constructor(){
            this.level1 = createButton('LEVEL1')
            this.level2 = createButton('LEVEL2')
            this.back = createSprite(100, displayHeight - 200, 50,50)
            this.submit = createSprite(displayWidth - 100, displayHeight - 200, 50,50)

      }

        display(){
        this.level1.position(displayWidth/2 - 100, displayHeight/2 - 100)  
        this.level2.position(displayWidth/2 - 100, displayHeight/2)  
        
        }      
}
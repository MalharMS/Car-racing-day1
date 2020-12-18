class Form {
    constructor() {

    }
    display(){
        var title = createElement('h2');
        title.html('Car Racing');
        title.position(130,0);
         
        var input = createInput('Write your name')
        input.position(130,160)

        var button = createButton('Submit');
        button.position(250,200);
        input.mousePressed(function(){
            input.setText('');
        })

        button.mousePressed(function (){
            input.hide();
            button.hide();
            var playername = input.value();
            playerCount++
            player.update(playername);
            player.updateCount(playerCount);
            var greating = createElement('h3');
            greating.html('hello '+ playername);
            greating.position(130,150);
        })
    }
}
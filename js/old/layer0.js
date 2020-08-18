


window.addEventListener('keydown', ((evt) => {
    const direction = evt.key.replace('Arrow', '');
    console.log(direction);
    
    

    //Declaring the table Ids to initialize the game
    let myId = document.getElementsByClassName('table-content active')[0].id.toString();


    
    let values = myId.split("-");
    const vetor = Array.from(values);
  
    let row = (vetor[0])*1;
    let column = (vetor[1])*1;
    //Calling function to make the changes on the table
    position(direction, row, column, myId);

    


    
    gameOver();
    
    

}));


    function position (direction, row, column,myId) {

        let vigilantRight = row.toString() + "-" + parseInt(column+1).toString();
        // console.log(vigilantRight);
        // console.log(document.getElementById(vigilantRight).classList);

        let vigilantLeft = row.toString() + "-" + parseInt(column-1).toString();
        
        let vigilantDown = parseInt(row+1).toString() + "-" + column.toString();

        let vigilantUp = parseInt(row-1).toString() + "-" + column.toString();

        


        if (direction == "Right") {
            if (column < 30 && document.getElementById(vigilantRight).classList[1] !== "vigilant" && document.getElementById(vigilantRight).classList[1] !== "wall" ) {
            column = column + 1;
            }
        } else if (direction == "Left" ){
            if(column >1  && document.getElementById(vigilantLeft).classList[1] !== "vigilant" && document.getElementById(vigilantLeft).classList[1] !== "wall") {
            column = column- 1;
            }
        } else if (direction == "Up") {
            if (row>1 && document.getElementById(vigilantUp).classList[1] !== "vigilant"  && document.getElementById(vigilantUp).classList[1] !== "wall"){
            row = row -1;
            }
        } else if (direction == "Down") {
            if (row < 14  && document.getElementById(vigilantDown).classList[1] !== "vigilant"  && document.getElementById(vigilantDown).classList[1] !== "wall"){
            row = row +1;
            }
        }
    
        console.log(row + "-" + column);

        newId= `${row}-${column}`;
        newId2= `${row}-${column+1}`;

      
        if(document.getElementById(newId).classList[1] ==="vision"){
            document.getElementById(myId).classList = "table-content";
             document.getElementById(newId).classList = "table-content wasted";
         } else{
            document.getElementById(myId).classList = "table-content";
            document.getElementById(newId).classList = "table-content active";

         }

       
               

              console.log(document.getElementById(newId2).classList)
            

            
        


    };

  
    



    function gameOver(){

        document.getElementsByClassName('table-content wasted')[0] ? alert("Game over"):"";
        
        
    }







//Part of the code that define some actions to beggining of the code






















        
{   //Function to start the guards that look to right in environment
        function vigilantVisionRight(){


            

            let vigilantposition = document.getElementsByClassName('table-content vigilant')[0].id.toString();
            let vigilantpositionchecked = vigilantposition.split("-");
            let row = (vigilantpositionchecked[0])*1;
            let column = (vigilantpositionchecked[1])*1;
            let validAction =  `${row+1}-${column}`;


            let validRight = `${row}-${column+1}`
            let validLeft = `${row}-${column-1}`
            let validUp = `${row-1}-${column}`
            let validDown = `${row+1}-${column}`


//Chamando a primeira variável de validação
            if( document.getElementById(validRight).classList !== "table-content vision" &&  document.getElementById(validLeft).classList !=="table-content vision" &&  document.getElementById(validDown).classList !=="table-content vision" &&   document.getElementById(validUp).classList !=="table-content vision"    ) {

                document.getElementById(validDown).classList = "table-content vision";
                

            }




            console.log(validAction);
            

            if(document.getElementById(validAction).classList == "table-content vision"){

                vigilantVisionClear();


             for(i=-1; i<=1;i++){
                 let teste = parseInt(row+i).toString() + "-" + parseInt(column+1).toString();
                if(document.getElementById(teste).classList[1]  !== "active" && document.getElementById(teste).classList[1]  !== "wall"){
                   document.getElementById(teste).classList = "table-content vision";
                }else if(document.getElementById(teste).classList[1]  == "active") {
                    document.getElementById(teste).classList = "table-content wasted";
                } 
                
             }
    
             for(i=-2; i<=2;i++){
                let teste = parseInt(row+i).toString() + "-" + parseInt(column+2).toString();
                if(document.getElementById(teste).classList[1]  !== "active" && document.getElementById(teste).classList[1]  !== "wall"){
                    document.getElementById(teste).classList = "table-content vision";
                }else if(document.getElementById(teste).classList[1]  == "active") {
                    document.getElementById(teste).classList = "table-content wasted";
                } 
            }
    
            for(i=-3; i<=3;i++){
                let teste = parseInt(row+i).toString() + "-" + parseInt(column+3).toString();
                if(document.getElementById(teste).classList[1]  !== "active" && document.getElementById(teste).classList[1]  !== "wall"){
                    document.getElementById(teste).classList = "table-content vision";
                }else if(document.getElementById(teste).classList[1]  == "active") {
                    document.getElementById(teste).classList = "table-content wasted";
                } 
            }
    
            for(i=-4; i<=4;i++){
                let teste = parseInt(row+i).toString() + "-" + parseInt(column+4).toString();
                if(document.getElementById(teste).classList[1]  !== "active" && document.getElementById(teste).classList[1]  !== "wall"){
                    document.getElementById(teste).classList = "table-content vision";
                }else if(document.getElementById(teste).classList[1]  == "active") {
                    document.getElementById(teste).classList = "table-content wasted";
                } 
            }
    

        }
 
   
        //Initializing the clear table for the vision
            
        // sleep time expects milliseconds
                function sleep (time) {
                    return new Promise((resolve) => setTimeout(resolve, time));
                }
                
                // Usage!
                sleep(1000).then(() => {
                   vigilantVisionUp();
                });
   
                gameOver();


            }




            function vigilantVisionUp(){

                

                let vigilantposition = document.getElementsByClassName('table-content vigilant')[0].id.toString();
                let vigilantpositionchecked = vigilantposition.split("-");
                let row = (vigilantpositionchecked[0])*1;
                let column = (vigilantpositionchecked[1])*1;
        
                let validAction =  `${row}-${column+1}`;


                console.log(validAction);
                
    
                if(document.getElementById(validAction).classList == "table-content vision"){
    
                    vigilantVisionClear();
    

    
                 for(i=-1; i<=1;i++){
                     let teste = parseInt(row-1).toString() + "-" + parseInt(column-i).toString();
                     if(document.getElementById(teste).classList[1]  !== "active"){
                        document.getElementById(teste).classList = "table-content vision";
                    }else{
                        document.getElementById(teste).classList = "table-content wasted";
                    }
                 }
        
                 for(i=-2; i<=2;i++){
                    let teste = parseInt(row-2).toString() + "-" + parseInt(column-i).toString();
                    if(document.getElementById(teste).classList[1]  !== "active"){
                        document.getElementById(teste).classList = "table-content vision";
                    }else{
                        document.getElementById(teste).classList = "table-content wasted";
                    }
                }
        
                for(i=-3; i<=3;i++){
                    let teste = parseInt(row-3).toString() + "-" + parseInt(column-i).toString();
                    if(document.getElementById(teste).classList[1]  !== "active"){
                        document.getElementById(teste).classList = "table-content vision";
                    }else{
                        document.getElementById(teste).classList = "table-content wasted";
                    }
                }
        
                for(i=-4; i<=4;i++){
                    let teste = parseInt(row-4).toString() + "-" + parseInt(column-i).toString();
                    if(document.getElementById(teste).classList[1]  !== "active"){
                        document.getElementById(teste).classList = "table-content vision";
                    }else{
                        document.getElementById(teste).classList = "table-content wasted";
                    }
                }
        
        
                }


                function sleep (time) {
                    return new Promise((resolve) => setTimeout(resolve, time));
                }
                
                // Usage!
                sleep(1000).then(() => {
                   vigilantVisionLeft();
                });

                gameOver();
    
            }



            function vigilantVisionLeft(){
                    
                    
                


                let vigilantposition = document.getElementsByClassName('table-content vigilant')[0].id.toString();
                let vigilantpositionchecked = vigilantposition.split("-");
                let row = (vigilantpositionchecked[0])*1;
                let column = (vigilantpositionchecked[1])*1;
            
                let validAction =  `${row-1}-${column}`;


                console.log(validAction);
                
    
                if(document.getElementById(validAction).classList == "table-content vision"){
    
                    vigilantVisionClear();
    
    
                    
            
             for(i=-1; i<=1;i++){
                let teste = parseInt(row+i).toString() + "-" + parseInt(column-1).toString();
                if(document.getElementById(teste).classList[1]  !== "active"){
                    document.getElementById(teste).classList = "table-content vision";
                 }else{
                    document.getElementById(teste).classList = "table-content wasted";
                }
            }
   
            for(i=-2; i<=2;i++){
               let teste = parseInt(row+i).toString() + "-" + parseInt(column-2).toString();
               if(document.getElementById(teste).classList[1]  !== "active"){
                document.getElementById(teste).classList = "table-content vision";
             }else{
                document.getElementById(teste).classList = "table-content wasted";
            }
           }
   
           for(i=-3; i<=3;i++){
               let teste = parseInt(row+i).toString() + "-" + parseInt(column-3).toString();
               if(document.getElementById(teste).classList[1]  !== "active"){
                document.getElementById(teste).classList = "table-content vision";
             }else{
                document.getElementById(teste).classList = "table-content wasted";
            }
           }
   
           for(i=-4; i<=4;i++){
               let teste = parseInt(row+i).toString() + "-" + parseInt(column-4).toString();
               if(document.getElementById(teste).classList[1]  !== "active"){
                document.getElementById(teste).classList = "table-content vision";
             }else{
                document.getElementById(teste).classList = "table-content wasted";
            }
           }

        }




        function sleep (time) {
            return new Promise((resolve) => setTimeout(resolve, time));
        }
        
        // Usage!
        sleep(1000).then(() => {
           vigilantVisionDown();
        });
        gameOver();
   
    }



 




            function vigilantVisionDown(){


                let vigilantposition = document.getElementsByClassName('table-content vigilant')[0].id.toString();
                let vigilantpositionchecked = vigilantposition.split("-");
                let row = (vigilantpositionchecked[0])*1;
                let column = (vigilantpositionchecked[1])*1;
                
                let validAction =  `${row}-${column-1}`;

                
                console.log(validAction);
                
    
                if(document.getElementById(validAction).classList == "table-content vision"){
    
                   
    
                    vigilantVisionClear();
                    
                for(i=-1; i<=1;i++){
                    let teste = parseInt(row+1).toString() + "-" + parseInt(column-i).toString();
                    if(document.getElementById(teste).classList[1]  !== "active"){
                        document.getElementById(teste).classList = "table-content vision";
                     }else{
                        document.getElementById(teste).classList = "table-content wasted";
                    }
                }
                
                for(i=-2; i<=2;i++){
                    let teste = parseInt(row+2).toString() + "-" + parseInt(column-i).toString();
                    if(document.getElementById(teste).classList[1]  !== "active"){
                        document.getElementById(teste).classList = "table-content vision";
                     }else{
                        document.getElementById(teste).classList = "table-content wasted";
                    }
                }
                
                for(i=-3; i<=3;i++){
                    let teste = parseInt(row+3).toString() + "-" + parseInt(column-i).toString();
                    if(document.getElementById(teste).classList[1]  !== "active"){
                        document.getElementById(teste).classList = "table-content vision";
                     }else{
                        document.getElementById(teste).classList = "table-content wasted";
                    }
                }
                
                for(i=-4; i<=4;i++){
                    let teste = parseInt(row+4).toString() + "-" + parseInt(column-i).toString();
                    if(document.getElementById(teste).classList[1]  !== "active"){
                        document.getElementById(teste).classList = "table-content vision";
                     }else{
                        document.getElementById(teste).classList = "table-content wasted";
                    }
                }
            }

            
            function sleep (time) {
                return new Promise((resolve) => setTimeout(resolve, time));
            }
            
            // Usage!
            sleep(1000).then(() => {
               vigilantVisionRight();
            });

            gameOver();
                
        }
        
}



























{       //Start de Code to clean the guardvision


    

    function vigilantVisionClear(){


        let vigilantposition = document.getElementsByClassName('table-content vigilant')[0].id.toString();
        let vigilantpositionchecked = vigilantposition.split("-");
        let row = (vigilantpositionchecked[0])*1;
        let column = (vigilantpositionchecked[1])*1;

        console.log(row,column);

        let rightView = `${row}-${column+1}`;
        let leftView = `${row}-${column-1}`;
        let downView = `${row+1}-${column}`;
        let upView = `${row-1}-${column}`;


        


    //CleaningRight
            for(i=-1; i<=1;i++){
                let teste = parseInt(row+i).toString() + "-" + parseInt(column+1).toString();
                if(document.getElementById(teste).classList[1]  === "vision" && document.getElementById(teste).classList[1]  !== "active" ){
                    document.getElementById(teste).classList = "table-content";
                }
            }

            for(i=-2; i<=2;i++){
            let teste = parseInt(row+i).toString() + "-" + parseInt(column+2).toString();
                if(document.getElementById(teste).classList[1]  === "vision" && document.getElementById(teste).classList[1]  !== "active" ){
                    document.getElementById(teste).classList = "table-content";
                }
        }

        for(i=-3; i<=3;i++){
            let teste = parseInt(row+i).toString() + "-" + parseInt(column+3).toString();
                if(document.getElementById(teste).classList[1]  === "vision" && document.getElementById(teste).classList[1]  !== "active" ){
                    document.getElementById(teste).classList = "table-content";
                }
        }

        for(i=-4; i<=4;i++){
            let teste = parseInt(row+i).toString() + "-" + parseInt(column+4).toString();
                if(document.getElementById(teste).classList[1]  === "vision" && document.getElementById(teste).classList[1]  !== "active" ){
                    document.getElementById(teste).classList = "table-content";
                }
        }




    //Cleaningup
            
        for(i=-1; i<=1;i++){
            let teste = parseInt(row-1).toString() + "-" + parseInt(column-i).toString();
                if(document.getElementById(teste).classList[1]  === "vision"  && document.getElementById(teste).classList[1]  !== "active" ){
                    document.getElementById(teste).classList = "table-content";
                }
        }

        for(i=-2; i<=2;i++){
        let teste = parseInt(row-2).toString() + "-" + parseInt(column-i).toString();
            if(document.getElementById(teste).classList[1] == "vision" && document.getElementById(teste).classList[1]  !== "active"  ){
                document.getElementById(teste).classList = "table-content";
            }

    }

    for(i=-3; i<=3;i++){
        let teste = parseInt(row-3).toString() + "-" + parseInt(column-i).toString();
            if(document.getElementById(teste).classList[1] == "vision" && document.getElementById(teste).classList[1]  !== "active" ){
                document.getElementById(teste).classList = "table-content";
            }
    }

    for(i=-4; i<=4;i++){
        let teste = parseInt(row-4).toString() + "-" + parseInt(column-i).toString();
            if(document.getElementById(teste).classList[1] == "vision" && document.getElementById(teste).classList[1]  !== "active"  ){
                document.getElementById(teste).classList = "table-content";
            }
    }




                //CleaningLEft
    for(i=-1; i<=1;i++){
        let teste = parseInt(row+i).toString() + "-" + parseInt(column-1).toString();
        if(document.getElementById(teste).classList[1] == "vision"  && document.getElementById(teste).classList[1]  !== "active" ){
            document.getElementById(teste).classList = "table-content";
        }
    }

    for(i=-2; i<=2;i++){
    let teste = parseInt(row+i).toString() + "-" + parseInt(column-2).toString();
        if(document.getElementById(teste).classList[1] == "vision" && document.getElementById(teste).classList[1]  !== "active"  ){
            document.getElementById(teste).classList = "table-content";
        }
    }

    for(i=-3; i<=3;i++){
    let teste = parseInt(row+i).toString() + "-" + parseInt(column-3).toString();
        if(document.getElementById(teste).classList[1] == "vision" && document.getElementById(teste).classList[1]  !== "active"  ){
            document.getElementById(teste).classList = "table-content";
        }
    }

    for(i=-4; i<=4;i++){
    let teste = parseInt(row+i).toString() + "-" + parseInt(column-4).toString();
        if(document.getElementById(teste).classList[1] == "vision" && document.getElementById(teste).classList[1]  !== "active"  ){
            document.getElementById(teste).classList = "table-content";
        }
    }


    //CleaningDown

    for(i=-1; i<=1;i++){
    let teste = parseInt(row+1).toString() + "-" + parseInt(column-i).toString();
        if(document.getElementById(teste).classList[1] == "vision" && document.getElementById(teste).classList[1]  !== "active"  ){
            document.getElementById(teste).classList = "table-content";
        }
    }

    for(i=-2; i<=2;i++){
    let teste = parseInt(row+2).toString() + "-" + parseInt(column-i).toString();
    if(document.getElementById(teste).classList[1] == "vision" && document.getElementById(teste).classList[1]  !== "active"  ){
        document.getElementById(teste).classList = "table-content";
    }
    }

    for(i=-3; i<=3;i++){
    let teste = parseInt(row+3).toString() + "-" + parseInt(column-i).toString();
    if(document.getElementById(teste).classList[1] == "vision" && document.getElementById(teste).classList[1]  !== "active"  ){
        document.getElementById(teste).classList = "table-content";
    }
    }

    for(i=-4; i<=4;i++){
    let teste = parseInt(row+4).toString() + "-" + parseInt(column-i).toString();
    if(document.getElementById(teste).classList[1] == "vision" && document.getElementById(teste).classList[1]  !== "active"  ){
        document.getElementById(teste).classList = "table-content";
    }
    }



    }




//End of Code to clean the guardvision 
}


























































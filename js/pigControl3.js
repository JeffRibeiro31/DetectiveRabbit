

//Programação dos guardas porcos ---------------------------------------------

function PigPosition3(){
    

    let posicaopig3 = document.getElementById("security3");
    let pigrect3 = posicaopig3.getBoundingClientRect();
    //console.log(pigrect3.top, pigrect3.right, pigrect3.bottom, pigrect3.left);

    let extraction2 =  (document.getElementById("security3").src).split("/")
    let imageName3 = extraction2[extraction2.length-1];

     let scan3 = document.querySelector(".table");

    for (let i = 0; i< scan3.rows.length; i++){
        for (let j = 14; j< scan3.rows[i].cells.length; j++){

        posicaoleitura3 = scan3.rows[i].cells[j]
        let output3 = posicaoleitura3.getBoundingClientRect();
        ////console.log(output3.top, output3.right, output3.bottom, output3.left);
            if( output3.bottom < pigrect3.bottom &&  output3.top> pigrect3.top && output3.left > pigrect3.left && output3.right< pigrect3.right   ){

                scan3.rows[i].cells[j].setAttribute("guarda3","guarda-sim");
            } else {

               scan3.rows[i].cells[j].setAttribute("guarda3","guarda-nao");
            }

        }
        
    }

    
    


    //let segurancapos3 = document.querySelectorAll('[guarda3 = "guarda-sim"]');
    //let localizaId3 = [segurancapos3[0].id.split("-") , segurancapos3[3].id.split("-")] ;
    //let topo3 = localizaId3[0];
    //let base3 = localizaId3[1];

    // //console.log(localizaId3);

 

}













    
    





























function pigStart3() {
    
    let posicaopiginit = document.getElementById("security3");
    let pigstart3 = posicaopiginit.getBoundingClientRect();
    cont3 = 0;


    //Detectando posição do segurança

    let segurancapos3 = document.querySelectorAll('[guarda3 = "guarda-sim"]');
    let localizaId3 = [segurancapos3[0].id.split("-") , segurancapos3[3].id.split("-")] ;
    
    let topo3 = localizaId3[0];
    let base3 = localizaId3[1];

     ////console.log(localizaId3);

    //Chamando a variável da tabela para ajustar a visão do seguranca
    let table = document.querySelector(".table");
    


    //Iniciando a rota dos segurancas



    document.getElementById("security3").src = "./img/characters/pigsecurity/PigSecurityFrontStop.gif"
    setInterval(function pigRoute3()
    {

            let segurancapos3 = document.querySelectorAll('[guarda3 = "guarda-sim"]');
            let localizaId3 = [segurancapos3[0].id.split("-") , segurancapos3[3].id.split("-")] ;
            let topo3 = localizaId3[0];
            let base3 = localizaId3[1];


        if ( cont3 < 20  ){
            
            pig3.style.top = parseInt(pig3.style.top);
            PigPosition3();
            
            //--

            

            ////console.log(base3[1])

           for (i=-1;i <= 0; i++){
            let vision = (parseInt(base3[0])+1).toString() +'-' + (parseInt(base3[1])+i).toString()
            //console.log(vision)
            document.getElementById(vision).setAttribute("guardavision", "guardavision-yes");
            document.getElementById(vision).setAttribute("light", "light-sim");

            }
        
            for (i=-2;i <= 1; i++){
                let vision = (parseInt(base3[0])+2).toString() +'-' + (parseInt(base3[1])+i).toString()
                //console.log(vision)
                document.getElementById(vision).setAttribute("guardavision", "guardavision-yes");
                document.getElementById(vision).setAttribute("light", "light-sim");
    
                }


                for (i=-3;i <= 2; i++){
                    let vision = (parseInt(base3[0])+3).toString() +'-' + (parseInt(base3[1])+i).toString()
                    //console.log(vision)
                    document.getElementById(vision).setAttribute("guardavision", "guardavision-yes");
                    document.getElementById(vision).setAttribute("light", "light-sim");
        
                    }

                for (i=-4;i <= 3; i++){
                let vision = (parseInt(base3[0])+4).toString() +'-' + (parseInt(base3[1])+i).toString()
                //console.log(vision)
                document.getElementById(vision).setAttribute("guardavision", "guardavision-yes");
                document.getElementById(vision).setAttribute("light", "light-sim");
    
                }

               


            cont3 +=1;
            ////console.log(cont3);








        } 
        
        
        
        if ( cont3 === 20  ){
            for (i=-1;i <= 0; i++){
                let vision = (parseInt(base3[0])+1).toString() +'-' + (parseInt(base3[1])+i).toString()
                //console.log(vision)
                document.getElementById(vision).setAttribute("guardavision", "guardavision-no");
                document.getElementById(vision).setAttribute("light", "light-nao");
                }
            
                for (i=-2;i <= 1; i++){
                    let vision = (parseInt(base3[0])+2).toString() +'-' + (parseInt(base3[1])+i).toString()
                    //console.log(vision)
                    document.getElementById(vision).setAttribute("guardavision", "guardavision-no");
                    document.getElementById(vision).setAttribute("light", "light-nao");
                    }
    
    
                    for (i=-3;i <= 2; i++){
                        let vision = (parseInt(base3[0])+3).toString() +'-' + (parseInt(base3[1])+i).toString()
                        //console.log(vision)
                        document.getElementById(vision).setAttribute("guardavision", "guardavision-no");
                        document.getElementById(vision).setAttribute("light", "light-nao");
                        }
    
                    for (i=-4;i <= 3; i++){
                    let vision = (parseInt(base3[0])+4).toString() +'-' + (parseInt(base3[1])+i).toString()
                    //console.log(vision)
                    document.getElementById(vision).setAttribute("guardavision", "guardavision-no");
                    document.getElementById(vision).setAttribute("light", "light-nao");
                    }

            document.getElementById("security3").src = "./img/characters/pigsecurity/PigSecurityFrontWalk.gif"
        
        } 

        


        
                if ( cont3 >= 20 && cont3 < 40  ){

                    
                   
                //Limpando a visão
                   



                let segurancapos3 = document.querySelectorAll('[guarda3 = "guarda-sim"]');
                let localizaId3 = [segurancapos3[0].id.split("-") , segurancapos3[3].id.split("-")] ;
                let topo3 = localizaId3[0];
                let base3 = localizaId3[1];





                pig3.style.top = parseInt(pig3.style.top) + movePig3 + 'px';
                PigPosition3();

                
                if (parseInt(base3[0]) <=13 ) {
                for (i=-1;i <= 0; i++){

                    
                        let vision = (parseInt(base3[0])+1).toString() +'-' + (parseInt(base3[1])+i).toString()
                        //console.log(vision)
                        document.getElementById(vision).setAttribute("guardavision", "guardavision-yes");
                        document.getElementById(vision).setAttribute("light", "light-sim");

                    }

                    }



                    if (parseInt(base3[0]) <=12 ) {
                    for (i=-2;i <= 1; i++){

                       

                        let vision = (parseInt(base3[0])+2).toString() +'-' + (parseInt(base3[1])+i).toString()
                        //console.log(vision)
                        document.getElementById(vision).setAttribute("guardavision", "guardavision-yes");
                        document.getElementById(vision).setAttribute("light", "light-sim");
            
                        }
                        }
        
                        if (parseInt(base3[0]) <=11 ) {
                        for (i=-3;i <= 2; i++){
                            

                            let vision = (parseInt(base3[0])+3).toString() +'-' + (parseInt(base3[1])+i).toString()
                            //console.log(vision)
                            document.getElementById(vision).setAttribute("guardavision", "guardavision-yes");
                            document.getElementById(vision).setAttribute("light", "light-sim");
                
                            }

                        }
        
                        if (parseInt(base3[0]) <=10 ) {

                        for (i=-4;i <= 3; i++){

                           
                        let vision = (parseInt(base3[0])+4).toString() +'-' + (parseInt(base3[1])+i).toString()
                        //console.log(vision)
                        document.getElementById(vision).setAttribute("guardavision", "guardavision-yes");
                        document.getElementById(vision).setAttribute("light", "light-sim");
            
                            }

                        }
                
                
               

                











                        
                cont3 +=1;





                if (parseInt(base3[0]) <=13 ) {
                    for (i=-1;i <= 0; i++){
    
                        
                            let vision = (parseInt(base3[0])).toString() +'-' + (parseInt(base3[1])+i).toString()
                           // //console.log(vision)
                            document.getElementById(vision).setAttribute("guardavision", "guardavision-no");
                            document.getElementById(vision).setAttribute("light", "light-nao");
    
                        }
    
                        }
    
                        
                        if (parseInt(base3[0]) <=13 ) {
                            for (i=-2;i <= 2; i++){
            
                                
                                    let vision1 = (parseInt(base3[0])+1).toString() +'-' + (parseInt(base3[1])-2).toString()
                                    let vision2 = (parseInt(base3[0])+1).toString() +'-' + (parseInt(base3[1])+1).toString()
                                    ////console.log(vision)
                                    document.getElementById(vision1).setAttribute("guardavision", "guardavision-no");
                                    document.getElementById(vision2).setAttribute("guardavision", "guardavision-no");

                                    document.getElementById(vision1).setAttribute("light", "light-nao");
                                    document.getElementById(vision2).setAttribute("light", "light-nao");
                                
                                }
            
                                }
    

                                if (parseInt(base3[0]) <=12 ) {
                                    for (i=-2;i <= 2; i++){
                    
                                        
                                            let vision1 = (parseInt(base3[0])+2).toString() +'-' + (parseInt(base3[1])-3).toString()
                                            let vision2 = (parseInt(base3[0])+2).toString() +'-' + (parseInt(base3[1])+2).toString()
                                            //let vision3 = (parseInt(base3[0])+2).toString() +'-' + (parseInt(base3[1])+1).toString()
                                           // let vision4 = (parseInt(base3[0])+2).toString() +'-' + (parseInt(base3[1])+1).toString()

                                            ////console.log(vision)
                                            document.getElementById(vision1).setAttribute("guardavision", "guardavision-no");
                                            document.getElementById(vision2).setAttribute("guardavision", "guardavision-no");

                                            document.getElementById(vision1).setAttribute("light", "light-nao");
                                            document.getElementById(vision2).setAttribute("light", "light-nao");
                                        
                                        }
                    
                                        }


                                        if (parseInt(base3[0]) <=11 ) {
                                            for (i=-2;i <= 2; i++){
                            
                                                
                                                    let vision1 = (parseInt(base3[0])+3).toString() +'-' + (parseInt(base3[1])-4).toString()
                                                    let vision2 = (parseInt(base3[0])+3).toString() +'-' + (parseInt(base3[1])+3).toString()
                                                    //let vision3 = (parseInt(base3[0])+2).toString() +'-' + (parseInt(base3[1])+1).toString()
                                                   // let vision4 = (parseInt(base3[0])+2).toString() +'-' + (parseInt(base3[1])+1).toString()
        
                                                    ////console.log(vision)
                                                    document.getElementById(vision1).setAttribute("guardavision", "guardavision-no");
                                                    document.getElementById(vision2).setAttribute("guardavision", "guardavision-no");

                                                    document.getElementById(vision1).setAttribute("light", "light-nao");
                                                    document.getElementById(vision2).setAttribute("light", "light-nao");
                                                
                                                }
                            
                                                }
        




                
               // //console.log(cont3);
            } 

            if ( cont3 === 40  ){
            
                document.getElementById("security3").src = "./img/characters/pigsecurity/PigSecurityFrontStop.gif"
            } 
    



            if ( cont3 >= 40 && cont3 < 60   ){
                pig3.style.top = parseInt(pig3.style.top);
                PigPosition3();
                
                cont3 +=1;
               // //console.log(cont3);

            } 

            if ( cont3 === 60 ){

                pig3.style.top = parseInt(pig3.style.top);
                PigPosition3();
                document.getElementById("security3").src = "./img/characters/pigsecurity/PigSecurityBackWalk.gif"
                //Colocar aqui
                cont3+=1;
                
                if (parseInt(base3[0]) <=13 ) {
                    for (i=-1;i <= 0; i++){
    
                        
                            let vision = (parseInt(base3[0])+1).toString() +'-' + (parseInt(base3[1])+i).toString()
                           // //console.log(vision)
                            document.getElementById(vision).setAttribute("guardavision", "guardavision-no");

                            document.getElementById(vision).setAttribute("light", "light-nao");
                
                        
                        }
    
                        }



                  if (parseInt(base3[0]) <=13 ) {
                    for (i=-2;i <= 1; i++){
    
                        
                            let vision = (parseInt(base3[0])+2).toString() +'-' + (parseInt(base3[1])-2).toString()
                            let vision2 = (parseInt(base3[0])+2).toString() +'-' + (parseInt(base3[1])-1).toString()
                            let vision3 = (parseInt(base3[0])+2).toString() +'-' + (parseInt(base3[1])).toString()
                            let vision4 = (parseInt(base3[0])+2).toString() +'-' + (parseInt(base3[1])+1).toString()
                           // //console.log(vision)
                            document.getElementById(vision).setAttribute("guardavision", "guardavision-no");
                            document.getElementById(vision2).setAttribute("guardavision", "guardavision-no");
                            document.getElementById(vision3).setAttribute("guardavision", "guardavision-no");
                            document.getElementById(vision4).setAttribute("guardavision", "guardavision-no");

                            document.getElementById(vision).setAttribute("light", "light-nao");
                            document.getElementById(vision2).setAttribute("light", "light-nao");
                            document.getElementById(vision3).setAttribute("light", "light-nao");
                            document.getElementById(vision4).setAttribute("light", "light-nao");
                            
                        
                        }
    
                        }      


                        if (parseInt(base3[0]) <=13 ) {
                            for (i=-2;i <= 1; i++){
            
                                
                                    let vision = (parseInt(base3[0])+3).toString() +'-' + (parseInt(base3[1])-3).toString()
                                    let vision2 = (parseInt(base3[0])+3).toString() +'-' + (parseInt(base3[1])-2).toString()
                                    let vision3 = (parseInt(base3[0])+3).toString() +'-' + (parseInt(base3[1])-1).toString()
                                    let vision4 = (parseInt(base3[0])+3).toString() +'-' + (parseInt(base3[1])).toString()
                                    let vision5 = (parseInt(base3[0])+3).toString() +'-' + (parseInt(base3[1])+1).toString()
                                    let vision6 = (parseInt(base3[0])+3).toString() +'-' + (parseInt(base3[1])+2).toString()
                                   // //console.log(vision)
                                    document.getElementById(vision).setAttribute("guardavision", "guardavision-no");
                                    document.getElementById(vision2).setAttribute("guardavision", "guardavision-no");
                                    document.getElementById(vision3).setAttribute("guardavision", "guardavision-no");
                                    document.getElementById(vision4).setAttribute("guardavision", "guardavision-no");
                                    document.getElementById(vision5).setAttribute("guardavision", "guardavision-no");
                                    document.getElementById(vision6).setAttribute("guardavision", "guardavision-no");

                                    document.getElementById(vision).setAttribute("light", "light-nao");
                                    document.getElementById(vision2).setAttribute("light", "light-nao");
                                    document.getElementById(vision3).setAttribute("light", "light-nao");
                                    document.getElementById(vision4).setAttribute("light", "light-nao");
                                    document.getElementById(vision5).setAttribute("light", "light-nao");
                                    document.getElementById(vision6).setAttribute("light", "light-nao");
                                
                                }
            
                                }    

                             

                                if (parseInt(base3[0]) <=13 ) {
                                    for (i=-2;i <= 1; i++){
                    
                                        
                                            let vision = (parseInt(base3[0])+4).toString() +'-' + (parseInt(base3[1])-4).toString()
                                            let vision2 = (parseInt(base3[0])+4).toString() +'-' + (parseInt(base3[1])-3).toString()
                                            let vision3 = (parseInt(base3[0])+4).toString() +'-' + (parseInt(base3[1])-2).toString()
                                            let vision4 = (parseInt(base3[0])+4).toString() +'-' + (parseInt(base3[1])-1).toString()
                                            let vision5 = (parseInt(base3[0])+4).toString() +'-' + (parseInt(base3[1])).toString()
                                            let vision6 = (parseInt(base3[0])+4).toString() +'-' + (parseInt(base3[1])+1).toString()
                                            let vision7 = (parseInt(base3[0])+4).toString() +'-' + (parseInt(base3[1])+2).toString()
                                            let vision8 = (parseInt(base3[0])+4).toString() +'-' + (parseInt(base3[1])+3).toString()


                                           // //console.log(vision)
                                            document.getElementById(vision).setAttribute("guardavision", "guardavision-no");
                                            document.getElementById(vision2).setAttribute("guardavision", "guardavision-no");
                                            document.getElementById(vision3).setAttribute("guardavision", "guardavision-no");
                                            document.getElementById(vision4).setAttribute("guardavision", "guardavision-no");
                                            document.getElementById(vision5).setAttribute("guardavision", "guardavision-no");
                                            document.getElementById(vision6).setAttribute("guardavision", "guardavision-no");
                                            document.getElementById(vision7).setAttribute("guardavision", "guardavision-no");
                                            document.getElementById(vision8).setAttribute("guardavision", "guardavision-no");
                                        
                                            document.getElementById(vision).setAttribute("light", "light-nao");
                                            document.getElementById(vision2).setAttribute("light", "light-nao");
                                            document.getElementById(vision3).setAttribute("light", "light-nao");
                                            document.getElementById(vision4).setAttribute("light", "light-nao");
                                            document.getElementById(vision5).setAttribute("light", "light-nao");
                                            document.getElementById(vision6).setAttribute("light", "light-nao");
                                            document.getElementById(vision7).setAttribute("light", "light-nao");
                                            document.getElementById(vision8).setAttribute("light", "light-nao");



                                        }
                    
                                        }  


            
                
            } 




            if ( cont3 >= 61 && cont3 < 81  ){
                pig3.style.top = parseInt(pig3.style.top) - movePig3 + 'px';
                PigPosition3();
                cont3+=1;
                
                    if (parseInt(topo3[0]) >=2 ) {
                        for (i=0;i <= 1; i++){

                    
                        let vision = (parseInt(topo3[0])-1).toString() +'-' + (parseInt(topo3[1])+i).toString()
                        //console.log(vision)
                        if (vision !== "6-27" && vision !== "6-28" && vision !== "7-27" && vision !== "7-28"){
                        document.getElementById(vision).setAttribute("guardavision", "guardavision-yes");
                        document.getElementById(vision).setAttribute("light", "light-sim");
                        
                        }
                    }

                    }

                
                    if (parseInt(topo3[0]) >=3 ) {
                        for (i=-1;i <= 2; i++){
        
                            
                                let vision = (parseInt(topo3[0])-2).toString() +'-' + (parseInt(topo3[1])+i).toString()
                                //console.log(vision)
                                if (vision !== "6-27" && vision !== "6-28" && vision !== "7-27" && vision !== "7-28"){
                                document.getElementById(vision).setAttribute("guardavision", "guardavision-yes");
                                document.getElementById(vision).setAttribute("light", "light-sim");
                                }
        
                            }
        
                            }


                    if (parseInt(topo3[0]) >=4 ) {
                        for (i=-2;i <= 3; i++){
        
                            
                                let vision = (parseInt(topo3[0])-3).toString() +'-' + (parseInt(topo3[1])+i).toString()
                                //console.log(vision)

                                if (vision !== "6-27" && vision !== "6-28" && vision !== "7-27" && vision !== "7-28"){
                                document.getElementById(vision).setAttribute("guardavision", "guardavision-yes");
                                document.getElementById(vision).setAttribute("light", "light-sim");
                                }
        
                            }
        
                            }
        


                    if (parseInt(topo3[0]) >=5 ) {
                        for (i=-3;i <= 4; i++){
        
                            
                            let vision = (parseInt(topo3[0])-4).toString() +'-' + (parseInt(topo3[1])+i).toString()
                            //console.log(vision)

                            if (vision !== "6-27" && vision !== "6-28" && vision !== "7-27" && vision !== "7-28"){
                            document.getElementById(vision).setAttribute("guardavision", "guardavision-yes");
                            document.getElementById(vision).setAttribute("light", "light-sim");
                            }
        
                            }
        
                            }






                            


                
                
               // //console.log(cont3); Limpando rota


              
               if (parseInt(topo3[0]) >=1 ) {
                for (i=0;i <= 1; i++){

                    
                        let vision = (parseInt(topo3[0])).toString() +'-' + (parseInt(topo3[1])+i).toString()
                       // //console.log(vision)

                       if (vision !== "6-27" && vision !== "6-28" && vision !== "7-27" && vision !== "7-28"){
                        document.getElementById(vision).setAttribute("guardavision", "guardavision-no");
                        document.getElementById(vision).setAttribute("light", "light-nao");
                       }

                    }

                    }


              
                    if (parseInt(topo3[0]) >=1  ) {
                        for (i=-1;i <= 2; i++){
        
                            
                                let vision1 = (parseInt(topo3[0])-1).toString() +'-' + (parseInt(topo3[1])-1).toString()
                                let vision2 = (parseInt(topo3[0])-1).toString() +'-' + (parseInt(topo3[1])+2).toString()
                                ////console.log(vision)
                                document.getElementById(vision1).setAttribute("guardavision", "guardavision-no");
                                document.getElementById(vision2).setAttribute("guardavision", "guardavision-no");

                                document.getElementById(vision1).setAttribute("light", "light-nao");
                                document.getElementById(vision2).setAttribute("light", "light-nao");
                            
                            }
        
                            }
               




                     if (parseInt(topo3[0]) >=1  ) {
                        for (i=-2;i <= 3; i++){
        
                            
                                let vision1 = (parseInt(topo3[0])-2).toString() +'-' + (parseInt(topo3[1])-2).toString()
                                let vision2 = (parseInt(topo3[0])-2).toString() +'-' + (parseInt(topo3[1])+3).toString()
                                ////console.log(vision)
                                document.getElementById(vision1).setAttribute("guardavision", "guardavision-no");
                                document.getElementById(vision2).setAttribute("guardavision", "guardavision-no");

                                document.getElementById(vision1).setAttribute("light", "light-nao");
                                document.getElementById(vision2).setAttribute("light", "light-nao");
                            
                            }
        
                            }




                    if (parseInt(topo3[0]) >=1  ) {
                        for (i=-3;i <= 4; i++){
        
                            
                                let vision1 = (parseInt(topo3[0])-3).toString() +'-' + (parseInt(topo3[1])-3).toString()
                                let vision2 = (parseInt(topo3[0])-3).toString() +'-' + (parseInt(topo3[1])+4).toString()
                                ////console.log(vision)
                                document.getElementById(vision1).setAttribute("guardavision", "guardavision-no");
                                document.getElementById(vision2).setAttribute("guardavision", "guardavision-no");

                                document.getElementById(vision1).setAttribute("light", "light-nao");
                                document.getElementById(vision2).setAttribute("light", "light-nao");
                            
                            }
        
                            }




                



            } 

                
            if(cont3 === 81 ){

                    pig3.style.top = parseInt(pig3.style.top);
                    PigPosition3();






                    cont3 = 0;
                    document.getElementById("security3").src = "./img/characters/pigsecurity/PigSecurityFrontStop.gif"
               



                    if (parseInt(topo3[0]-1) >=1 ) {
                        for (i=-1;i <= 2; i++){
        
                            let vision1 = (parseInt(topo3[0])+1).toString() +'-' + (parseInt(topo3[1])-1).toString()
                                let vision2 = (parseInt(topo3[0])+1).toString() +'-' + (parseInt(topo3[1])+2).toString()
                                let vision3 = (parseInt(topo3[0])).toString() +'-' + (parseInt(topo3[1])-2).toString()
                                let vision4 = (parseInt(topo3[0])).toString() +'-' + (parseInt(topo3[1])+3).toString()
                                let vision5 = (parseInt(topo3[0])-1).toString() +'-' + (parseInt(topo3[1])-3).toString()
                                let vision6 = (parseInt(topo3[0])-1).toString() +'-' + (parseInt(topo3[1])+4).toString()
                                ////console.log(vision)
                                document.getElementById(vision1).setAttribute("guardavision", "guardavision-no");
                                document.getElementById(vision2).setAttribute("guardavision", "guardavision-no");
                                document.getElementById(vision3).setAttribute("guardavision", "guardavision-no");
                                document.getElementById(vision4).setAttribute("guardavision", "guardavision-no");
                                document.getElementById(vision5).setAttribute("guardavision", "guardavision-no");
                                document.getElementById(vision6).setAttribute("guardavision", "guardavision-no");

                                document.getElementById(vision1).setAttribute("light", "light-nao");
                                document.getElementById(vision2).setAttribute("light", "light-nao");
                                document.getElementById(vision3).setAttribute("light", "light-nao");
                                document.getElementById(vision4).setAttribute("light", "light-nao");
                                document.getElementById(vision5).setAttribute("light", "light-nao");
                                document.getElementById(vision6).setAttribute("light", "light-nao");
                                

                            
                            }
        
                            }





                    if (parseInt(topo3[0]) >=1 ) {
                        for (i=0;i <= 1; i++){
        
                            
                                let vision = (parseInt(topo3[0])-1).toString() +'-' + (parseInt(topo3[1])+i).toString()
                               // //console.log(vision)
                                document.getElementById(vision).setAttribute("guardavision", "guardavision-no");
                                document.getElementById(vision).setAttribute("light", "light-nao");
                    
        
                            }
        
                            }
               
                    if (parseInt(topo3[0]) >=1 ) {
                        for (i=-1;i <= 2; i++){
        
                            let vision1 = (parseInt(topo3[0])-2).toString() +'-' + (parseInt(topo3[1])-1).toString()
                               // let vision1 = (parseInt(topo3[0])-2).toString() +'-' + (parseInt(topo3[1])-1).toString()
                                let vision2 = (parseInt(topo3[0])-2).toString() +'-' + (parseInt(topo3[1])+2).toString()
                                let vision3 = (parseInt(topo3[0])-2).toString() +'-' + (parseInt(topo3[1])).toString()
                                let vision4 = (parseInt(topo3[0])-2).toString() +'-' + (parseInt(topo3[1])+1).toString()
                                ////console.log(vision)
                                document.getElementById(vision1).setAttribute("guardavision", "guardavision-no");
                                document.getElementById(vision2).setAttribute("guardavision", "guardavision-no");
                                document.getElementById(vision3).setAttribute("guardavision", "guardavision-no");
                                document.getElementById(vision4).setAttribute("guardavision", "guardavision-no");

                                document.getElementById(vision1).setAttribute("light", "light-nao");
                                document.getElementById(vision2).setAttribute("light", "light-nao");
                                document.getElementById(vision3).setAttribute("light", "light-nao");
                                document.getElementById(vision4).setAttribute("light", "light-nao");
                            
                            }
        
                            }


                            if (parseInt(topo3[0]) >=1 ) {
                                for (i=-2;i <= 3; i++){
                
                                         let vision1 = (parseInt(topo3[0])-3).toString() +'-' + (parseInt(topo3[1])-1).toString()
                                       
                                        let vision2 = (parseInt(topo3[0])-3).toString() +'-' + (parseInt(topo3[1])+2).toString()
                                        let vision3 = (parseInt(topo3[0])-3).toString() +'-' + (parseInt(topo3[1])).toString()
                                        let vision4 = (parseInt(topo3[0])-3).toString() +'-' + (parseInt(topo3[1])+1).toString()
                                        let vision5 = (parseInt(topo3[0])-3).toString() +'-' + (parseInt(topo3[1])+3).toString()
                                        let vision6 = (parseInt(topo3[0])-3).toString() +'-' + (parseInt(topo3[1])-2).toString()

                                        ////console.log(vision)
                                        document.getElementById(vision1).setAttribute("guardavision", "guardavision-no");
                                        document.getElementById(vision2).setAttribute("guardavision", "guardavision-no");
                                        document.getElementById(vision3).setAttribute("guardavision", "guardavision-no");
                                        document.getElementById(vision4).setAttribute("guardavision", "guardavision-no");
                                        document.getElementById(vision5).setAttribute("guardavision", "guardavision-no");
                                        document.getElementById(vision6).setAttribute("guardavision", "guardavision-no");

                                        document.getElementById(vision1).setAttribute("light", "light-nao");
                                        document.getElementById(vision2).setAttribute("light", "light-nao");
                                        document.getElementById(vision3).setAttribute("light", "light-nao");
                                        document.getElementById(vision4).setAttribute("light", "light-nao");
                                        document.getElementById(vision5).setAttribute("light", "light-nao");
                                        document.getElementById(vision6).setAttribute("light", "light-nao");
                                    
                                    }
                
                                    }


                                    if (parseInt(topo3[0]) >=1 ) {
                                        for (i=-3;i <= 4; i++){
                        
                                            let vision1 = (parseInt(topo3[0])-4).toString() +'-' + (parseInt(topo3[1])-1).toString()
                                                let vision2 = (parseInt(topo3[0])-4).toString() +'-' + (parseInt(topo3[1])+2).toString()
                                                let vision3 = (parseInt(topo3[0])-4).toString() +'-' + (parseInt(topo3[1])).toString()
                                                let vision4 = (parseInt(topo3[0])-4).toString() +'-' + (parseInt(topo3[1])+1).toString()
                                                let vision5 = (parseInt(topo3[0])-4).toString() +'-' + (parseInt(topo3[1])+3).toString()
                                                let vision6 = (parseInt(topo3[0])-4).toString() +'-' + (parseInt(topo3[1])-2).toString()
                                                let vision7 = (parseInt(topo3[0])-4).toString() +'-' + (parseInt(topo3[1])+4).toString()
                                                let vision8 = (parseInt(topo3[0])-4).toString() +'-' + (parseInt(topo3[1])-3).toString()

        
                                                ////console.log(vision)
                                                document.getElementById(vision1).setAttribute("guardavision", "guardavision-no");
                                                document.getElementById(vision2).setAttribute("guardavision", "guardavision-no");
                                                document.getElementById(vision3).setAttribute("guardavision", "guardavision-no");
                                                document.getElementById(vision4).setAttribute("guardavision", "guardavision-no");
                                                document.getElementById(vision5).setAttribute("guardavision", "guardavision-no");
                                                document.getElementById(vision6).setAttribute("guardavision", "guardavision-no");
                                                document.getElementById(vision7).setAttribute("guardavision", "guardavision-no");
                                                document.getElementById(vision8).setAttribute("guardavision", "guardavision-no");

                                                document.getElementById(vision1).setAttribute("light", "light-nao");
                                                document.getElementById(vision2).setAttribute("light", "light-nao");
                                                document.getElementById(vision3).setAttribute("light", "light-nao");
                                                document.getElementById(vision4).setAttribute("light", "light-nao");
                                                document.getElementById(vision5).setAttribute("light", "light-nao");
                                                document.getElementById(vision6).setAttribute("light", "light-nao");
                                                document.getElementById(vision7).setAttribute("light", "light-nao");
                                                document.getElementById(vision8).setAttribute("light", "light-nao");
                                                
                                            
                                            }
                        
                                            }








               
                }


            
                
                gameOver();


    
    }, 50);


    

}













































//-----------------------------------------------------------------------------------













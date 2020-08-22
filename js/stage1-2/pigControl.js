

//Programação dos guardas porcos ---------------------------------------------

function PigPosition(){
    

    let posicaopig = document.getElementById("security1");
    let pigrect = posicaopig.getBoundingClientRect();
    //console.log(pigrect.top, pigrect.right, pigrect.bottom, pigrect.left);

    let extraction =  (document.getElementById("security1").src).split("/")
    let imageName = extraction[extraction.length-1];

     let scan = document.querySelector(".table");

    for (let i = 0; i< scan.rows.length; i++){

        //ATENÇÃO PARTE DO CÓDIGO MODIFICADA PARA APRESENTAÇÃO
        for (let j = 0; j< 13; j++){

        posicaoleitura = scan.rows[i].cells[j]
        let output = posicaoleitura.getBoundingClientRect();
        ////console.log(output.top, output.right, output.bottom, output.left);
            if( output.bottom < pigrect.bottom &&  output.top> pigrect.top && output.left > pigrect.left && output.right< pigrect.right   ){

                scan.rows[i].cells[j].setAttribute("guarda","guarda-sim");
            } else {

                scan.rows[i].cells[j].setAttribute("guarda","guarda-nao");
            }

        }
        
    }

    
    


    //let segurancapos = document.querySelectorAll('[guarda = "guarda-sim"]');
    //let localizaId = [segurancapos[0].id.split("-") , segurancapos[3].id.split("-")] ;
    //let topo = localizaId[0];
    //let base = localizaId[1];

    // //console.log(localizaId);

 

}













    
    





























function pigStart() {
    
    let posicaopiginit = document.getElementById("security1");
    let pigstart = posicaopiginit.getBoundingClientRect();
    cont = 0;


    //Detectando posição do segurança

    let segurancapos = document.querySelectorAll('[guarda = "guarda-sim"]');
    let localizaId = [segurancapos[0].id.split("-") , segurancapos[3].id.split("-")] ;
    let topo = localizaId[0];
    let base = localizaId[1];

     ////console.log(localizaId);

    //Chamando a variável da tabela para ajustar a visão do seguranca
    let table = document.querySelector(".table");
    


    //Iniciando a rota dos segurancas



    document.getElementById("security1").src = "./img/characters/pigsecurity/PigSecurityFrontStop.gif"
    setInterval(function pigRoute()
    {

            let segurancapos = document.querySelectorAll('[guarda = "guarda-sim"]');
            let localizaId = [segurancapos[0].id.split("-") , segurancapos[3].id.split("-")] ;
            let topo = localizaId[0];
            let base = localizaId[1];


        if ( cont < 30  ){
            
            pig.style.top = parseInt(pig.style.top);
            PigPosition();
            
            //--

            

            ////console.log(base[1])

           for (i=-1;i <= 0; i++){
            let vision = (parseInt(base[0])+1).toString() +'-' + (parseInt(base[1])+i).toString()
           // //console.log(vision)
            document.getElementById(vision).setAttribute("guardavision", "guardavision-yes");
            document.getElementById(vision).setAttribute("light", "light-sim");

            }
        
            for (i=-2;i <= 1; i++){
                let vision = (parseInt(base[0])+2).toString() +'-' + (parseInt(base[1])+i).toString()
             //   //console.log(vision)
                document.getElementById(vision).setAttribute("guardavision", "guardavision-yes");
                document.getElementById(vision).setAttribute("light", "light-sim");
    
                }


                for (i=-3;i <= 2; i++){
                    let vision = (parseInt(base[0])+3).toString() +'-' + (parseInt(base[1])+i).toString()
              //      //console.log(vision)
                    document.getElementById(vision).setAttribute("guardavision", "guardavision-yes");
                    document.getElementById(vision).setAttribute("light", "light-sim");
        
                    }

                for (i=-4;i <= 3; i++){
                let vision = (parseInt(base[0])+4).toString() +'-' + (parseInt(base[1])+i).toString()
              //  //console.log(vision)
                document.getElementById(vision).setAttribute("guardavision", "guardavision-yes");
                document.getElementById(vision).setAttribute("light", "light-sim");
    
                }

               


            cont +=1;
            ////console.log(cont);








        } 
        
        
        
        if ( cont === 30  ){
            for (i=-1;i <= 0; i++){
                let vision = (parseInt(base[0])+1).toString() +'-' + (parseInt(base[1])+i).toString()
             //   //console.log(vision)
                document.getElementById(vision).setAttribute("guardavision", "guardavision-no");
                document.getElementById(vision).setAttribute("light", "light-nao");
                }
            
                for (i=-2;i <= 1; i++){
                    let vision = (parseInt(base[0])+2).toString() +'-' + (parseInt(base[1])+i).toString()
             //       //console.log(vision)
                    document.getElementById(vision).setAttribute("guardavision", "guardavision-no");
                    document.getElementById(vision).setAttribute("light", "light-nao");
                    }
    
    
                    for (i=-3;i <= 2; i++){
                        let vision = (parseInt(base[0])+3).toString() +'-' + (parseInt(base[1])+i).toString()
               //         //console.log(vision)
                        document.getElementById(vision).setAttribute("guardavision", "guardavision-no");
                        document.getElementById(vision).setAttribute("light", "light-nao");
                        }
    
                    for (i=-4;i <= 3; i++){
                    let vision = (parseInt(base[0])+4).toString() +'-' + (parseInt(base[1])+i).toString()
               //     //console.log(vision)
                    document.getElementById(vision).setAttribute("guardavision", "guardavision-no");
                    document.getElementById(vision).setAttribute("light", "light-nao");
                    }

            document.getElementById("security1").src = "./img/characters/pigsecurity/PigSecurityFrontWalk.gif"
        
        } 

        


        
                if ( cont >= 30 && cont < 110  ){

                    
                   
                //Limpando a visão
                   



                let segurancapos = document.querySelectorAll('[guarda = "guarda-sim"]');
                let localizaId = [segurancapos[0].id.split("-") , segurancapos[3].id.split("-")] ;
                let topo = localizaId[0];
                let base = localizaId[1];





                pig.style.top = parseInt(pig.style.top) + movePig1+ 'px';
                PigPosition();

                
                if (parseInt(base[0]) <=13 ) {
                for (i=-1;i <= 0; i++){

                    
                        let vision = (parseInt(base[0])+1).toString() +'-' + (parseInt(base[1])+i).toString()
                 //       //console.log(vision)
                        document.getElementById(vision).setAttribute("guardavision", "guardavision-yes");
                        document.getElementById(vision).setAttribute("light", "light-sim");

                    }

                    }



                    if (parseInt(base[0]) <=12 ) {
                    for (i=-2;i <= 1; i++){

                       

                        let vision = (parseInt(base[0])+2).toString() +'-' + (parseInt(base[1])+i).toString()
                  //      //console.log(vision)
                        document.getElementById(vision).setAttribute("guardavision", "guardavision-yes");
                        document.getElementById(vision).setAttribute("light", "light-sim");
            
                        }
                        }
        
                        if (parseInt(base[0]) <=11 ) {
                        for (i=-3;i <= 2; i++){
                            

                            let vision = (parseInt(base[0])+3).toString() +'-' + (parseInt(base[1])+i).toString()
                  //          //console.log(vision)
                            document.getElementById(vision).setAttribute("guardavision", "guardavision-yes");
                            document.getElementById(vision).setAttribute("light", "light-sim");
                
                            }

                        }
        
                        if (parseInt(base[0]) <=10 ) {

                        for (i=-4;i <= 3; i++){

                           
                        let vision = (parseInt(base[0])+4).toString() +'-' + (parseInt(base[1])+i).toString()
                   //     //console.log(vision)
                        document.getElementById(vision).setAttribute("guardavision", "guardavision-yes");
                        document.getElementById(vision).setAttribute("light", "light-sim");
            
                            }

                        }
                
                
               

                











                        
                cont +=1;





                if (parseInt(base[0]) <=13 ) {
                    for (i=-1;i <= 0; i++){
    
                        
                            let vision = (parseInt(base[0])).toString() +'-' + (parseInt(base[1])+i).toString()
                           // //console.log(vision)
                            document.getElementById(vision).setAttribute("guardavision", "guardavision-no");
                            document.getElementById(vision).setAttribute("light", "light-nao");
    
                        }
    
                        }
    
                        
                        if (parseInt(base[0]) <=13 ) {
                            for (i=-2;i <= 2; i++){
            
                                
                                    let vision1 = (parseInt(base[0])+1).toString() +'-' + (parseInt(base[1])-2).toString()
                                    let vision2 = (parseInt(base[0])+1).toString() +'-' + (parseInt(base[1])+1).toString()
                                    ////console.log(vision)
                                    document.getElementById(vision1).setAttribute("guardavision", "guardavision-no");
                                    document.getElementById(vision2).setAttribute("guardavision", "guardavision-no");

                                    document.getElementById(vision1).setAttribute("light", "light-nao");
                                    document.getElementById(vision2).setAttribute("light", "light-nao");
                                
                                }
            
                                }
    

                                if (parseInt(base[0]) <=12 ) {
                                    for (i=-2;i <= 2; i++){
                    
                                        
                                            let vision1 = (parseInt(base[0])+2).toString() +'-' + (parseInt(base[1])-3).toString()
                                            let vision2 = (parseInt(base[0])+2).toString() +'-' + (parseInt(base[1])+2).toString()
                                            //let vision3 = (parseInt(base[0])+2).toString() +'-' + (parseInt(base[1])+1).toString()
                                           // let vision4 = (parseInt(base[0])+2).toString() +'-' + (parseInt(base[1])+1).toString()

                                            ////console.log(vision)
                                            document.getElementById(vision1).setAttribute("guardavision", "guardavision-no");
                                            document.getElementById(vision2).setAttribute("guardavision", "guardavision-no");

                                            document.getElementById(vision1).setAttribute("light", "light-nao");
                                            document.getElementById(vision2).setAttribute("light", "light-nao");
                                        
                                        }
                    
                                        }


                                        if (parseInt(base[0]) <=11 ) {
                                            for (i=-2;i <= 2; i++){
                            
                                                
                                                    let vision1 = (parseInt(base[0])+3).toString() +'-' + (parseInt(base[1])-4).toString()
                                                    let vision2 = (parseInt(base[0])+3).toString() +'-' + (parseInt(base[1])+3).toString()
                                                    //let vision3 = (parseInt(base[0])+2).toString() +'-' + (parseInt(base[1])+1).toString()
                                                   // let vision4 = (parseInt(base[0])+2).toString() +'-' + (parseInt(base[1])+1).toString()
        
                                                    ////console.log(vision)
                                                    document.getElementById(vision1).setAttribute("guardavision", "guardavision-no");
                                                    document.getElementById(vision2).setAttribute("guardavision", "guardavision-no");

                                                    document.getElementById(vision1).setAttribute("light", "light-nao");
                                                    document.getElementById(vision2).setAttribute("light", "light-nao");
                                                
                                                }
                            
                                                }
        




                
               // //console.log(cont);
            } 

            if ( cont === 110  ){
            
                document.getElementById("security1").src = "./img/characters/pigsecurity/PigSecurityFrontStop.gif"
            } 
    



            if ( cont >= 110 && cont < 141   ){
                pig.style.top = parseInt(pig.style.top);
                PigPosition();
                
                cont +=1;
               // //console.log(cont);

            } 

            if ( cont === 140  ){

                pig.style.top = parseInt(pig.style.top);
                PigPosition();
                document.getElementById("security1").src = "./img/characters/pigsecurity/PigSecurityBackWalk.gif"
                //Colocar aqui
                cont+=1;
                
                if (parseInt(base[0]) <=13 ) {
                    for (i=-1;i <= 0; i++){
    
                        
                            let vision = (parseInt(base[0])+1).toString() +'-' + (parseInt(base[1])+i).toString()
                           // //console.log(vision)
                            document.getElementById(vision).setAttribute("guardavision", "guardavision-no");

                            document.getElementById(vision).setAttribute("light", "light-nao");
                
                        
                        }
    
                        }



                  if (parseInt(base[0]) <=13 ) {
                    for (i=-2;i <= 1; i++){
    
                        
                            let vision = (parseInt(base[0])+2).toString() +'-' + (parseInt(base[1])-2).toString()
                            let vision2 = (parseInt(base[0])+2).toString() +'-' + (parseInt(base[1])-1).toString()
                            let vision3 = (parseInt(base[0])+2).toString() +'-' + (parseInt(base[1])).toString()
                            let vision4 = (parseInt(base[0])+2).toString() +'-' + (parseInt(base[1])+1).toString()
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


                        if (parseInt(base[0]) <=13 ) {
                            for (i=-2;i <= 1; i++){
            
                                
                                    let vision = (parseInt(base[0])+3).toString() +'-' + (parseInt(base[1])-3).toString()
                                    let vision2 = (parseInt(base[0])+3).toString() +'-' + (parseInt(base[1])-2).toString()
                                    let vision3 = (parseInt(base[0])+3).toString() +'-' + (parseInt(base[1])-1).toString()
                                    let vision4 = (parseInt(base[0])+3).toString() +'-' + (parseInt(base[1])).toString()
                                    let vision5 = (parseInt(base[0])+3).toString() +'-' + (parseInt(base[1])+1).toString()
                                    let vision6 = (parseInt(base[0])+3).toString() +'-' + (parseInt(base[1])+2).toString()
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

                             

                                if (parseInt(base[0]) <=13 ) {
                                    for (i=-2;i <= 1; i++){
                    
                                        
                                            let vision = (parseInt(base[0])+4).toString() +'-' + (parseInt(base[1])-4).toString()
                                            let vision2 = (parseInt(base[0])+4).toString() +'-' + (parseInt(base[1])-3).toString()
                                            let vision3 = (parseInt(base[0])+4).toString() +'-' + (parseInt(base[1])-2).toString()
                                            let vision4 = (parseInt(base[0])+4).toString() +'-' + (parseInt(base[1])-1).toString()
                                            let vision5 = (parseInt(base[0])+4).toString() +'-' + (parseInt(base[1])).toString()
                                            let vision6 = (parseInt(base[0])+4).toString() +'-' + (parseInt(base[1])+1).toString()
                                            let vision7 = (parseInt(base[0])+4).toString() +'-' + (parseInt(base[1])+2).toString()
                                            let vision8 = (parseInt(base[0])+4).toString() +'-' + (parseInt(base[1])+3).toString()


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




            if ( cont >= 141 && cont < 221  ){
                pig.style.top = parseInt(pig.style.top) - movePig1+ 'px';
                PigPosition();
                cont+=1;
                
                    if (parseInt(topo[0]) >=2 ) {
                        for (i=0;i <= 1; i++){

                    
                        let vision = (parseInt(topo[0])-1).toString() +'-' + (parseInt(topo[1])+i).toString()
                //        //console.log(vision)
                        document.getElementById(vision).setAttribute("guardavision", "guardavision-yes");
                        document.getElementById(vision).setAttribute("light", "light-sim");

                    }

                    }

                
                    if (parseInt(topo[0]) >=3 ) {
                        for (i=-1;i <= 2; i++){
        
                            
                                let vision = (parseInt(topo[0])-2).toString() +'-' + (parseInt(topo[1])+i).toString()
                                //console.log(vision)
                                document.getElementById(vision).setAttribute("guardavision", "guardavision-yes");
                                document.getElementById(vision).setAttribute("light", "light-sim");
                    
        
                            }
        
                            }


                    if (parseInt(topo[0]) >=4 ) {
                        for (i=-2;i <= 3; i++){
        
                            
                                let vision = (parseInt(topo[0])-3).toString() +'-' + (parseInt(topo[1])+i).toString()
                    //            //console.log(vision)
                                document.getElementById(vision).setAttribute("guardavision", "guardavision-yes");
                                document.getElementById(vision).setAttribute("light", "light-sim");
                    
        
                            }
        
                            }
        


                    if (parseInt(topo[0]) >=5 ) {
                        for (i=-3;i <= 4; i++){
        
                            
                            let vision = (parseInt(topo[0])-4).toString() +'-' + (parseInt(topo[1])+i).toString()
                      //      //console.log(vision)
                            document.getElementById(vision).setAttribute("guardavision", "guardavision-yes");
                            document.getElementById(vision).setAttribute("light", "light-sim");
                    
        
                            }
        
                            }






                            


                
                
               // //console.log(cont); Limpando rota


              
               if (parseInt(topo[0]) >=1 ) {
                for (i=0;i <= 1; i++){

                    
                        let vision = (parseInt(topo[0])).toString() +'-' + (parseInt(topo[1])+i).toString()
                       // //console.log(vision)
                        document.getElementById(vision).setAttribute("guardavision", "guardavision-no");
                        document.getElementById(vision).setAttribute("light", "light-nao");
            

                    }

                    }


              
                    if (parseInt(topo[0]) >=1  ) {
                        for (i=-1;i <= 2; i++){
        
                            
                                let vision1 = (parseInt(topo[0])-1).toString() +'-' + (parseInt(topo[1])-1).toString()
                                let vision2 = (parseInt(topo[0])-1).toString() +'-' + (parseInt(topo[1])+2).toString()
                                ////console.log(vision)
                                document.getElementById(vision1).setAttribute("guardavision", "guardavision-no");
                                document.getElementById(vision2).setAttribute("guardavision", "guardavision-no");

                                document.getElementById(vision1).setAttribute("light", "light-nao");
                                document.getElementById(vision2).setAttribute("light", "light-nao");
                            
                            }
        
                            }
               




                     if (parseInt(topo[0]) >=1  ) {
                        for (i=-2;i <= 3; i++){
        
                            
                                let vision1 = (parseInt(topo[0])-2).toString() +'-' + (parseInt(topo[1])-2).toString()
                                let vision2 = (parseInt(topo[0])-2).toString() +'-' + (parseInt(topo[1])+3).toString()
                                ////console.log(vision)
                                document.getElementById(vision1).setAttribute("guardavision", "guardavision-no");
                                document.getElementById(vision2).setAttribute("guardavision", "guardavision-no");

                                document.getElementById(vision1).setAttribute("light", "light-nao");
                                document.getElementById(vision2).setAttribute("light", "light-nao");
                            
                            }
        
                            }




                    if (parseInt(topo[0]) >=1  ) {
                        for (i=-3;i <= 4; i++){
        
                            
                                let vision1 = (parseInt(topo[0])-3).toString() +'-' + (parseInt(topo[1])-3).toString()
                                let vision2 = (parseInt(topo[0])-3).toString() +'-' + (parseInt(topo[1])+4).toString()
                                ////console.log(vision)
                                document.getElementById(vision1).setAttribute("guardavision", "guardavision-no");
                                document.getElementById(vision2).setAttribute("guardavision", "guardavision-no");

                                document.getElementById(vision1).setAttribute("light", "light-nao");
                                document.getElementById(vision2).setAttribute("light", "light-nao");
                            
                            }
        
                            }




                



            } 

                
            if(cont === 221 ){

                    pig.style.top = parseInt(pig.style.top);
                    PigPosition();






                    cont = 0;
                    document.getElementById("security1").src = "./img/characters/pigsecurity/PigSecurityFrontStop.gif"
               



                    if (parseInt(topo[0]-1) >=1 ) {
                        for (i=-1;i <= 2; i++){
        
                            let vision1 = (parseInt(topo[0])+1).toString() +'-' + (parseInt(topo[1])-1).toString()
                                let vision2 = (parseInt(topo[0])+1).toString() +'-' + (parseInt(topo[1])+2).toString()
                                let vision3 = (parseInt(topo[0])).toString() +'-' + (parseInt(topo[1])-2).toString()
                                let vision4 = (parseInt(topo[0])).toString() +'-' + (parseInt(topo[1])+3).toString()
                                let vision5 = (parseInt(topo[0])-1).toString() +'-' + (parseInt(topo[1])-3).toString()
                                let vision6 = (parseInt(topo[0])-1).toString() +'-' + (parseInt(topo[1])+4).toString()
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





                    if (parseInt(topo[0]) >=1 ) {
                        for (i=0;i <= 1; i++){
        
                            
                                let vision = (parseInt(topo[0])-1).toString() +'-' + (parseInt(topo[1])+i).toString()
                               // //console.log(vision)
                                document.getElementById(vision).setAttribute("guardavision", "guardavision-no");
                                document.getElementById(vision).setAttribute("light", "light-nao");
                    
        
                            }
        
                            }
               
                    if (parseInt(topo[0]) >=1 ) {
                        for (i=-1;i <= 2; i++){
        
                            let vision1 = (parseInt(topo[0])-2).toString() +'-' + (parseInt(topo[1])-1).toString()
                               // let vision1 = (parseInt(topo[0])-2).toString() +'-' + (parseInt(topo[1])-1).toString()
                                let vision2 = (parseInt(topo[0])-2).toString() +'-' + (parseInt(topo[1])+2).toString()
                                let vision3 = (parseInt(topo[0])-2).toString() +'-' + (parseInt(topo[1])).toString()
                                let vision4 = (parseInt(topo[0])-2).toString() +'-' + (parseInt(topo[1])+1).toString()
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


                            if (parseInt(topo[0]) >=1 ) {
                                for (i=-2;i <= 3; i++){
                
                                         let vision1 = (parseInt(topo[0])-3).toString() +'-' + (parseInt(topo[1])-1).toString()
                                       
                                        let vision2 = (parseInt(topo[0])-3).toString() +'-' + (parseInt(topo[1])+2).toString()
                                        let vision3 = (parseInt(topo[0])-3).toString() +'-' + (parseInt(topo[1])).toString()
                                        let vision4 = (parseInt(topo[0])-3).toString() +'-' + (parseInt(topo[1])+1).toString()
                                        let vision5 = (parseInt(topo[0])-3).toString() +'-' + (parseInt(topo[1])+3).toString()
                                        let vision6 = (parseInt(topo[0])-3).toString() +'-' + (parseInt(topo[1])-2).toString()

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


                                    if (parseInt(topo[0]) >=1 ) {
                                        for (i=-3;i <= 4; i++){
                        
                                            let vision1 = (parseInt(topo[0])-4).toString() +'-' + (parseInt(topo[1])-1).toString()
                                                let vision2 = (parseInt(topo[0])-4).toString() +'-' + (parseInt(topo[1])+2).toString()
                                                let vision3 = (parseInt(topo[0])-4).toString() +'-' + (parseInt(topo[1])).toString()
                                                let vision4 = (parseInt(topo[0])-4).toString() +'-' + (parseInt(topo[1])+1).toString()
                                                let vision5 = (parseInt(topo[0])-4).toString() +'-' + (parseInt(topo[1])+3).toString()
                                                let vision6 = (parseInt(topo[0])-4).toString() +'-' + (parseInt(topo[1])-2).toString()
                                                let vision7 = (parseInt(topo[0])-4).toString() +'-' + (parseInt(topo[1])+4).toString()
                                                let vision8 = (parseInt(topo[0])-4).toString() +'-' + (parseInt(topo[1])-3).toString()

        
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


            
                //let verifica = 
               

                

                gameOver();
               




    
    }, 50);


    

}













































//-----------------------------------------------------------------------------------













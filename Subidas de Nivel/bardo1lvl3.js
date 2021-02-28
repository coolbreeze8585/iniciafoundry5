//El bardo 1 sube a nivel 2
main()

async function main (){
    //Comprobación de selección de token de Bardo 1
    if(canvas.tokens.controlled.length==0||canvas.tokens.controlled.length>1){
        ui.notifications.error("Selecciona el token de Kalna, please (sólo el de Kalna)");
        return;
    }
    //Pasamos de token a actor
    let actor=canvas.tokens.controlled[0].actor

    let Bard = actor.items.find(Item5e => Item5e.data.name=="Bard")
    if(Bard==null||Bard==undefined){
        ui.notifications.error("Selecciona el token de Kalna para subirla a nivel 3");
        return;
    }
    
    //Añadimos un nivel al héroe
    if(Bard.data.data.levels=2){
        await Bard.update({"data.levels":Bard.data.data.levels+1})
    }
    //Checked => esto funciona
    //Falta por añadir error si no está a nivel 1. ¿Dentro del IF?
          
    
    //Añadimos un espacio de conjuro por estar a nivel 3. Sirve para Bardos, Clérigos, Druidas y Magos.
    
    let nuevoRecursomax=actor.data.data.resources.primary.max +2
    actor.update({"data.resources.primary.max": nuevoRecursomax});
    let nuevoRecurso=actor.data.data.resources.primary.value +2
    actor.update({"data.resources.primary.value": nuevoRecurso});
    //Checked => esto funciona
    

    //A nivel 3 los bardos obtienen 2 conjuros de nivel 2 y una habilidad de clase. Cuando se sube a nivel 3, hay que poner varias cosas:
    ////Hay que hacer que, desde el tab de "items" se añadan los conjuros específicos para cada bardo.
    //El Bardo 1, a nivel 3 obtiene los siguientes conjuros (ya cargados en el tab "Items" de Foundry):
    ////Ceguera / Sordera
    let ceguera=game.items.find(item=>item.data.name=="Ceguera")
    console.log(ceguera)

    ////Hacer añicos
    ////Configurarlos para que consuma recurso.atriburo.primario
    ////Configurar su preparación: "prepared = checked"; "preparation = at will"
    ////Tanto los conjuros como la habilidad tiene que marcarse en la ficha de Tidy5eSheet como "favoritos" para que vayan a la página principal de atributos.
    

    //Eliminamos items que se añaden automáticamente a la classe y que sobran. 
    ////Bardos a nivel 2:
    //////Song of rest
    let songofrest=actor.items.find(item=>item.data.name=="Song of Rest")
    if(songofrest){
        songofrest.delete()
    }
    //////Jack of all trades
    let jackofalltrades=actor.items.find(item=>item.data.name=="Jack of All Trades")
    if(jackofalltrades){
        jackofalltrades.delete()
    }
    ////Bardos a nivel 3:
    //////"Bard College"
    let collegeBard=actor.items.find(item=>item.data.name=="Bard College")
    if(collegeBard){
        collegeBard.delete()
    }       
    //////"Expertise (Bard)"
    let expertiseBard=actor.items.find(item=>item.data.name=="Expertise (Bard)")
    if(expertiseBard){
        expertiseBard.delete()
    }
    //Checked => esto funciona
    



    //Una vez se ha hecho todo, informamos de la subida de nivel
    ui.notifications.info(`${actor.data.name} ha subido de nivel`)    
    //Checked => esto funciona
   
}
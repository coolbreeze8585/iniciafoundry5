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
        ui.notifications.error("Selecciona el token de Kalna para subirla a nivel 2");
        return;
    }
    
    //Añadimos un nivel al héroe
    if(Bard.data.data.levels=1){
        await Bard.update({"data.levels":Bard.data.data.levels+1})        
    }
    else{
        ui.notifications.error("Kalna no está a nivel 1");
        return;
    }
    //Checked => esto funciona
             
    
    //Añadimos un espacio de conjuro por estar a nivel 2. Sirve para Bardos, Clérigos, Druidas y Magos.
    spellcasters1_2(actor);
    //Checked => esto funciona
   
            
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
    
    //añadir cosas
    let ceguera=game.items.find(item=>item.data.name=="Ceguera")
    console.log(ceguera)
    actor.createOwnedItem({ceguera})


    //Una vez se ha hecho todo, informamos de la subida de nivel
    ui.notifications.info(`${actor.data.name} ha subido de nivel`)    
    //Checked => esto funciona
   
}

function spellcasters1_2(actor) {
    let nuevoRecursomax = actor.data.data.resources.primary.max = 3;
    actor.update({ "data.resources.primary.max": nuevoRecursomax });
    let nuevoRecurso = actor.data.data.resources.primary.value + 1;
    actor.update({ "data.resources.primary.value": nuevoRecurso });
}

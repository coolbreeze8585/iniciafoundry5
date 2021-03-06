//Con tu acción adicional, consumes esta poción y recuperas un espacio de conjuro, furia, maniobra o punto de ki.//
main()

async function main (){
    // Comprobación de selección de token
    if(canvas.tokens.controlled.length==0){
        ui.notifications.error("Selecciona tu token, melón!");
        return;
    }
    if(canvas.tokens.controlled.length>1){
        ui.notifications.error("Selecciona sólo tu token, melón");
        return;
    }        
    let actor=canvas.tokens.controlled[0].actor

    // Comprobación de poti en inventario
    let potirest=actor.items.find(item=>item.data.name=="Poción de Restauración")
    if(potirest==null||potirest==undefined){
        ui.notifications.error("No tienes pociones de restauración. Ni posibilidades de ganar.");
        return;
    }

    // Si actor a tope de recursos, no añadir
    if(actor.data.data.resources.primary.value==actor.data.data.resources.primary.max){
        ui.notifications.error("Ya estás a tope de recursos, mangurrián!");
        return;
    }
    //Quitamos la poti del inventario
    await potirest.update({"data.quantity": potirest.data.data.quantity -1})
    if(potirest.data.data.quantity<1){
        potirest.delete();
    }

    //Añadimos el recurso
    let nuevoRecurso=actor.data.data.resources.primary.value +1
    actor.update({"data.resources.primary.value": nuevoRecurso});
    ui.notifications.info("Muy bien, campeón. ¡Y sin derramar ni una gota! Xarrupa que vessa!")
}
class Pokemon {
    constructor(name, pv, atk, def, luck) {
        this.name = name
        this.pv = pv
        this.atk = atk
        this.def = def
        this.luck=luck
    }

    isLucky(){
        const Numrand = Math.floor(Math.random()*100);
        return Numrand <= this.luck;
    }

    attackPokemon(qlf) {
        qlf.pv -= this.atk
        //qlf.pv += qlf.def
    }
}
    let Rayquaza = new Pokemon("Rayquaza", 180, 35, 20, 50)
    let Giratina = new Pokemon("Giratina", 180, 15, 30, 80)
 

    console.log(Giratina)   
    console.log(Rayquaza)  

    while (Rayquaza.pv >0 && Giratina.pv >0 ){

    if (Rayquaza.isLucky())  {
        console.log(Rayquaza.name + ' is lucky')
        console.log('GIRATINA dommage ' + (Rayquaza.atk - Giratina.def ))
        Rayquaza.attackPokemon(Giratina)
        
    } else {
        console.log(Giratina.name + ' is lucky')
        console.log('RAYQUAZA dommage '+ (Giratina.atk - Rayquaza.def ))
        Giratina.attackPokemon(Rayquaza)
        
    }
    
    console.log(Giratina)   
    console.log(Rayquaza)   

}
 if (Rayquaza.pv >0) {
    console.log('GIRATINA is DEAD !! :(')   

 }else{
    console.log('RAYQUAZA is DEAD !! :(')  
 }  
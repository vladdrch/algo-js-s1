class Pokemon {
    constructor(name, pv, atk, def, luck) {
        this.name = name
        this.pv = pv
        this.atk = atk
        this.def = def
        this.luck=luck
    }

    isLucky(){
        const Numrand = Math.floor(Math.random());
        return Numrand <= this.luck;
    }

    attackPokemon(qlf) {
        qlf.pv -= this.atk
    }
}
    let Rayquaza = new Pokemon("Rayquaza", 180, 35, 20,0.5)
    let Giratina = new Pokemon("Giratina",180, 15, 30,0.2)
 

    console.log(Giratina)   
    console.log(Rayquaza)  

    while (Rayquaza.pv >0 && Giratina.pv >0 ){

    if (Rayquaza.isLucky())  {
        console.log(Rayquaza.name + ' is lucky')
        Rayquaza.attackPokemon(Giratina)
        console.log(' Giratina degat' +Rayquaza.atk - Giratina.def )
    } else {
        console.log(Rayquaza.name + ' no lucky')
        Giratina.attackPokemon(Rayquaza)
        console.log(' Rayquaza degat'+Giratina.atk - Rayquaza.def )
    }
    
    console.log(Giratina)   
    console.log(Rayquaza)   

}
 if (Rayquaza.pv >0) {
    console.log('Giratina si DEAD !! :(')   

 }else{
    console.log('Rayquaza si DEAD !! :(')  
 }  
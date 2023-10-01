class Character {
    constructor(name,sanity) {
      this.name = name
      this.sanity = sanity
  }
    path (playlist,hatemusic){
       let Nbtaxichange = 0
       let NbFirepassed = 0
       
       while (NbFirepassed<30 && this.sanity>0){
              let music =playlist[Math.floor(Math.random() * 5)];
              NbFirepassed++;
              console.log( '####################>>Playng ....' + music);
              console.log(30 - NbFirepassed + ' Fire to pass');
             
             
            if (music===hatemusic)
              {
              this.sanity--;
              Nbtaxichange ++;
              console.log('_____________TAXI CHANGE___________ >>' + Nbtaxichange);
              }
              // console.log(Nbtaxichange);
               //console.log(NbFirepassed);
               //console.log(this.samnt);
         
          if (this.sanity===0){
              console.log(this.name + ' EXPLODED !');
              break;
          }
            if (NbFirepassed===30){
              console.log(this.name + ' AT HOME !! WIth ' +Nbtaxichange+' TAXI CHANGING');
              break;
          }
       }
  }
  }
  let John = new Character("John",10);
  let playlist = ["Wejdene - Anissa", "Freeze Corleone - Jour de Plus", "Werenoi - Chemin d'or", "Tiakola - Meuda", "SDM - Bollide Allemand"]
  
  console.log (John)
  console.log (playlist)
  
  John.path (playlist, "Wejdene - Anissa");

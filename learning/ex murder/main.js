class Murder {
    constructor (name, hp)
    {
        this.name=name
        this.hp = hp
    }
}

class Survivor {
    constructor (name,type,pb1, pb2, pb3)
    {
        this.name = name
        this.type=type
        this.pb1=pb1
        this.pb2=pb2
        this.pb3=pb3
    }
   
    ChooseAttTypeWhithProbability(AttType){
        const ProbabilityList = [this.pb1, this.pb2,this.pb3] //la somme =1
        const randomNum = Math.random()
 
        let sumPb = 0;
        for (let i = 0; i < AttType.length; i++) {
          sumPb += ProbabilityList[i];
           if (randomNum < sumPb) {
            return AttType[i];
           }
        }
    }
   
}


let Jason = new Murder("Jason",100);

let NameList=['Bob','Kate','Kevin','Nico','Brice','Mike','Harry','Stivy','Mary','Walid'];
let TypeList=['Blond','Sporty','Naive','Cool','Stylish','Nerd','Geek','Grupmy','Funny','Lazy','Nervous'];

const randomNumName1 = Math.floor(Math.random()*NameList.length);
const randomNumTyme1 = Math.floor(Math.random()*TypeList.length);

const randomNumName2 = Math.floor(Math.random()*NameList.length);
const randomNumTyme2 = Math.floor(Math.random()*TypeList.length);

const randomNumName3 = Math.floor(Math.random()*NameList.length);
const randomNumTyme3 = Math.floor(Math.random()*TypeList.length);

const randomNumName4 = Math.floor(Math.random()*NameList.length);
const randomNumTyme4 = Math.floor(Math.random()*TypeList.length);

const randomNumName5 = Math.floor(Math.random()*NameList.length);
const randomNumTyme5 = Math.floor(Math.random()*TypeList.length);

// La somme des probabilités doit etre égale a 1. 

let Surv1=new Survivor (NameList[randomNumName1],TypeList[randomNumTyme1],0.3, 0.2, 0.5 );
let Surv2=new Survivor (NameList[randomNumName2],TypeList[randomNumTyme2],0.4, 0.1, 0.5 );
let Surv3=new Survivor (NameList[randomNumName3],TypeList[randomNumTyme3],0.3, 0.6, 0.1 );
let Surv4=new Survivor (NameList[randomNumName4],TypeList[randomNumTyme4],0.3, 0.4, 0.3 );
let Surv5=new Survivor (NameList[randomNumName5],TypeList[randomNumTyme5],0.1 , 0.9, 0.0 );


let SurvList = [Surv1,Surv2,Surv3,Surv4,Surv5];

let AttList=['Att1','Att2','Att3'];
let SurvRipList=[];


console.log ('Survivor Team:');
console.log ('1.' + Surv1.name + ' ' +Surv1.type);
console.log ('2.' + Surv2.name + ' ' +Surv2.type);
console.log ('3.' + Surv3.name + ' ' +Surv3.type);
console.log ('4.' + Surv4.name + ' ' +Surv4.type);
console.log ('5.' + Surv5.name + ' ' +Surv5.type);
console.log (' ')
console.log ('------------------START GAME------------------------------------');
console.log (' ')

while (Jason.hp >0&& SurvList.length >0 )
{
   
     for (let i = 0; i < SurvList.length; i++)
     {  
        let att =SurvList[i].ChooseAttTypeWhithProbability(AttList);
        if (att==='Att1') {
           
            console.log (SurvList[i].name + ' '+ SurvList[i].type + ' WASx KILLED BY JASON');
            SurvRipList.push(SurvList[i])
            SurvList.splice(i,1);
           
        }
        if (att==='Att2') {
           
            Jason.hp=Jason.hp-10;
            console.log (SurvList[i].name + ' '+SurvList[i].type + ' -10 hp on Jason');
        }
         if (att==='Att3') {
           
            Jason.hp=Jason.hp-15;
            console.log (SurvList[i].name + ' '+SurvList[i].type + ' -15 hp on Jason and DEAD');
             SurvRipList.push(SurvList[i])
            SurvList.splice(i,1);
           
        }
       
}
 if ( SurvList.length ===0)
 {
      console.log (' ')
      console.log ('Jason killed everyone - RIP ');
      SurvRipList.forEach(srv =>
     {
         console.log (srv.name + ' '+ srv.type);
     }
     )
     

 }

  if ( Jason.hp<=0)
  {
     console.log (' ')
     console.log (Jason.name +" is DEAD' !!!!");
     console.log (' ')
     console.log('Survivor  ');
     
     SurvList.forEach(srv =>
     {
         console.log (srv.name + ' '+ srv.type);
     }
     )
     console.log('Well Done! GG :) ');
     console.log ('  RIP ');
      SurvRipList.forEach(srv =>
     {
         console.log (srv.name + ' '+ srv.type);
     }
     )
  }
   
}
 console.log (' ')
console.log ('-------------GAME OVER TRY AGANE-----------------------------');
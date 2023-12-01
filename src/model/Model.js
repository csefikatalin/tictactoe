export default class Model{
    #lista = [];
    #kikovetkezik="X";
    #vege=false
  constructor(){
    this.#lista=["X", "O", " ", " ", " ", " ", " ", " ", " "]
  }
    get lista(){
        return this.#lista
    }
    get kikovetkezik(){
        return this.#kikovetkezik
    }
    get vege(){
        return this.#vege
    }
    kivalaszt(index){
        this.#lista[index]=this.#kikovetkezik
        console.log(this.#lista)
        this.kovetkezoJatekos()
    }
    kovetkezoJatekos(){
        if (this.#kikovetkezik==="X"){
            this.#kikovetkezik="O"
        }else{
            this.#kikovetkezik="X"
        }
        return this.#kikovetkezik
    }
    #getVizszintes(){
        let ellX="";
        this.#lista.forEach((element,index) => {
            ellX+=element;
            if (index%3==2){
                ellX+="@";
            }
        });
       
        return ellX;
    }
    #getFuggoleges(){
        let ellY="";
        for (let index = 0; index < 3; index++) {
            ellY+=this.#lista[index]+this.#lista[index+3]+this.#lista[index+6];
            
            ellY+="@";
        }
       console.log(ellY)
        return ellY;
    }

    #getAtlo(){
        let ell=this.#lista[0]+this.#lista[4]+this.#lista[8]+"@";
         ell+=this.#lista[2]+this.#lista[4]+this.#lista[6];
        console.log(ell);
         return ell;
    }

    ellenerozes(){
        let ell=this.#getVizszintes()+"@"+this.#getAtlo()+"@"+this.#getFuggoleges();
        let allapot="";
        if (ell.indexOf("XXX")>=0) {
            allapot="X"
        }else if (ell.indexOf("OOO")>=0) {
            allapot="O"
        }
        if (allapot==="" && ell.indexOf(" ")===-1){
            allapot="Döntetlen"
        } 
       // console.log(allapot)
        return allapot;
    }
    
}
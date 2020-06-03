class Michael {
    constructor(fullName, id, language){
        this.fullName = fullName;
        this.id = id;
        this.language = language;
    }

    comDetails(){
        return `Hello World, this is ${this.fullName} with HNGi7 ID ${this.id} using ${this.language} for stage 2 task`
    }
}

let michaelElaigwu = new Michael("Michael Elaigwu", "HNG-03915", "Javascript");

console.log(michaelElaigwu.comDetails());

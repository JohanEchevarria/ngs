class question {
    constructor(title, maxanswer) {
        this.title = title | 'Primera Pregunta';
        this.maxanswer = maxanswer | 5;
        this.answer = [];
    }
     addTitle(newTitle) {
        this.title = newTitle;
    }

    addAnswer(answer){
        this.answer.push(answer);
    }

    printQuestion(){
        console.log('Title:', this.title);
        console.log('Numero maixmo de answers;',this.answer.length);
        console.log('Numero de answers:',this.maxanswer);
        console.log('Answer',this.answer);  
    }
}

class SingleChoise extends question {
    constructor() {
        super('SingleChoise',10);
    }
}
class MultipleChoise extends question {
    constructor() {
        super('MultipleChoise',12);
    }
}
const newQuestion = new question();
newQuestion.addTitle('Titulo');
newQuestion.printQuestion();

//consr newSingleChoise = new SingleChoise();
//newSingleChise.addTitle('Hola,Que haces?');
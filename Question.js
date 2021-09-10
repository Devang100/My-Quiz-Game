class Question {

    constructor() {
      this.input1 = createInput("Name");
     // this.button1 = createButton('Play');

      this.input2 = createInput("Your Option");
      this.button2 = createButton('Submit');
      
      this.title = createElement('h1');
      this.option1 = createElement('h3');
      this.option2 = createElement('h3');
      this.option3 = createElement('h3');
      this.option4= createElement('h3');
      this.question = createElement('h2');
    }
    hide(){
      
      this.button2.hide();
      this.input1.hide();
      this.input2.hide();

    }
  
    display(){
      
      this.title.html("Sasta K.B.C");
      this.title.position(600,20);
      
      this.question.html("Who was the first Indian in Space?")
      this.question.position(330,80);

      this.option1.html("1.) Sunita Williams")
      this.option1.position(360,150);

      this.option2.html("2.) Rakesh Sharma")
      this.option2.position(360,175);

      this.option3.html("3.) Kalpna Chawla")
      this.option3.position(360,200);

      this.option4.html("4.) Neil ArmStrong")
      this.option4.position(360,225);
  
      this.input1.position(360,300);
      this.input2.position(600,300);

      this.button2.position(720,300);
  
      this.button2.mousePressed(()=>{
        this.input1.hide();
        this.input2.hide();
       // this.option1.hide();
       //this.option2.hide();
        //this.option3.hide();
        //this.option4.hide();
        this.button2.hide();
        contestant.name = this.input1.value();
        contestant.points = this.input2.value();
        this.title.hide();

        contestantCount+=1;
        contestant.index = contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);
        
      });
  
    }
  }
  
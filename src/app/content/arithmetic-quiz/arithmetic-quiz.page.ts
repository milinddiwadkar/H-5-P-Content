import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arithmetic-quiz',
  templateUrl: './arithmetic-quiz.page.html',
  styleUrls: ['./arithmetic-quiz.page.scss'],
})
export class ArithmeticQuizPage implements OnInit {
  number1!: number;
  number2!: number;
  operator!: string;
  correctAnswer!: number;
  answers: number[] = [];
  score: number = 0;
  feedbackMessage: string = '';
  feedbackColor: string = '';

  // Operators for basic arithmetic
  operators = ['+', '-', '×', '÷'];

  constructor() { }

  ngOnInit() {
    this.generateProblem();
  }

  // Generate a new arithmetic problem
  generateProblem() {
    this.number1 = Math.floor(Math.random() * 10) + 1;
    this.number2 = Math.floor(Math.random() * 10) + 1;
    this.operator = this.operators[Math.floor(Math.random() * this.operators.length)];

    switch (this.operator) {
      case '+':
        this.correctAnswer = this.number1 + this.number2;
        break;
      case '-':
        this.correctAnswer = this.number1 - this.number2;
        break;
      case '×':
        this.correctAnswer = this.number1 * this.number2;
        break;
      case '÷':
        this.correctAnswer = Math.floor(this.number1 / this.number2);
        this.number1 = this.correctAnswer * this.number2; // Ensure exact division
        break;
    }

    this.generateAnswers();
  }

  // Generate answer options (1 correct + 3 random)
  generateAnswers() {
    this.answers = [this.correctAnswer];

    while (this.answers.length < 4) {
      const randomAnswer = Math.floor(Math.random() * 20) + 1;
      if (!this.answers.includes(randomAnswer)) {
        this.answers.push(randomAnswer);
      }
    }

    // Shuffle answers for randomness
    this.answers = this.answers.sort(() => Math.random() - 0.5);
  }

  // Check if the selected answer is correct
  checkAnswer(selectedAnswer: number) {
    if (selectedAnswer === this.correctAnswer) {
      this.feedbackMessage = 'Correct!';
      this.feedbackColor = 'success';
      this.score += 1;
    } else {
      this.feedbackMessage = 'Try again!';
      this.feedbackColor = 'danger';
    }

    // Generate new problem after a short delay
    setTimeout(() => {
      this.feedbackMessage = '';
      this.generateProblem();
    }, 1000);
  }
}

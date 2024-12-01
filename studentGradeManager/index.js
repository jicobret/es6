class Student {
    constructor({ name, age, grades = [] }) {
        this.name = name;
        this.age = age;
        this.grades = grades;
    }

    addGrade(...newGrades) { // spread
        this.grades = [...this.grades, ...newGrades]; // dodaje wprowadzone oceny do istniejacych juz ocen
        console.log('pomyslnie dodano oceny');
    }

    averageGrade() {
        if (this.grades.length === 0) {
            console.log(`${this.name} nie posiada jeszcze zadnych ocen`);
        }

        const sum = this.grades.reduce((a, b) => a + b, 0); // suma elementow tablicy za pomoca reduce
        const average = sum / this.grades.length;

        console.log(`srednia ucznia ${this.name}: ${average.toFixed(2)}`); // zwraca srednia zaokraglana do 2 miejsc po przecinku
    }
}

const students = [];

const addStudent = ({ name, age, grades = [] }) => {
    const newStudent = new Student({ name, age, grades });
    students.push(newStudent);
    console.log(`dodano nowego ucznia, imie: ${name}, wiek: ${age}, oceny: ${grades}`);
};

// dodawanie studentow
addStudent({ name: "wiktor", age: 8, grades: [1, 1, 2] }); // 0
addStudent({ name: "julek", age: 7, grades: [6, 5, 6] }); // 1 

// dodawanie ocen i sprawdzanie sredniej przed i po dodaniem
students[0].averageGrade();
students[0].addGrade(2, 1);
students[0].averageGrade();

students[1].averageGrade();
students[1].addGrade(6, 4, 5);
students[1].averageGrade();

// wyswietlenie listy wszystkich uczniow i ich srednich
// console.log('srednie wszystkich uczniow: ')
// students.forEach(student => student.averageGrade());

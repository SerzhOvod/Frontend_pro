function Student(firstName, lastName, yearOfBirth, grades = []) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.grades = grades;
  this.attendance = new Array(25);
}

Student.prototype.getAge = function () {
  // debugger;
  const currentYear = new Date().getFullYear();
  return currentYear - this.yearOfBirth;
};

Student.prototype.averageGrade = function () {
  if (this.grades.length === 0) return 0;

  let gradesSum = 0;

  for (let i = 0; i < this.grades.length; i++) {
    gradesSum += this.grades[i];
  }

  return gradesSum / this.grades.length;
};

Student.prototype.firstEmptyIndex = function () {
  for (let i = 0; i < this.attendance.length; i++) {
    if (this.attendance[i] === undefined || null) {
      return i;
    }
  }
  return -1;
};

Student.prototype.present = function () {
  let index = this.firstEmptyIndex();

  if (index !== -1) {
    this.attendance[index] = true;
  } else {
    console.log('The attendance array is full');
  }
};

Student.prototype.absent = function () {
  let index = this.firstEmptyIndex();

  if (index !== -1) {
    this.attendance[index] = false;
  } else {
    console.log('The attendance array is full');
  }
};

Student.prototype.averageAttendance = function () {
  let attendanceCount = 0;
  let lessonsCount = 0;
  for (let i = 0; i < this.attendance.length; i++) {
    if (this.attendance[i] !== undefined) {
      lessonsCount++;

      if (this.attendance[i]) attendanceCount++;
    }
  }
  return attendanceCount / lessonsCount;
};

Student.prototype.summary = function () {
  let averageGrade = this.averageGrade();
  let averageAttendance = this.averageAttendance();

  if (averageGrade > 90 && averageAttendance > 0.9) {
    return 'Молодець!';
  } else if (averageGrade > 90 || averageAttendance > 0.9) {
    return 'Добре, але можна краще';
  } else {
    return 'Редиска!';
  }
};

const student_1 = new Student('Alex', 'Wick', 1989, [100, 100, 90, 100]);
student_1.present();
student_1.present();
student_1.present();
student_1.present();
student_1.present();
student_1.present();
student_1.present();
student_1.present();
student_1.present();
student_1.absent();
student_1.summary();
console.log(`${student_1.firstName}: ${student_1.summary()}`);

const student_2 = new Student('John', 'Snow', 1994, [80, 80, 90, 80]);
student_2.present();
student_2.present();
student_2.present();
student_2.present();
student_2.present();
student_2.absent();
student_2.absent();
student_2.absent();
student_2.absent();
student_2.absent();
student_2.absent();
console.log(`${student_2.firstName}: ${student_2.summary()}`);

const student_3 = new Student('Harry', 'Potter', 2005, [100, 100, 95, 100]);
student_3.present();
student_3.present();
student_3.present();
student_3.present();
student_3.present();
student_3.present();
student_3.present();
student_3.present();
console.log(`${student_3.firstName}: ${student_3.summary()}`);

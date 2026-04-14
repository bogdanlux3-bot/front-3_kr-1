const students = [
  {
    id: 1,
    name: "Tom",
    age: 18,
    city: "Bishkek",
    grades: [5, 4, 3, 5],
    hobbies: ["football", "gaming"],
    isGraduated: false,
  },
  {
    id: 2,
    name: "Anna",
    age: 20,
    city: "Osh",
    grades: [3, 2, 4, 3],
    hobbies: ["reading", "painting", "yoga"],
    isGraduated: true,
  },
  {
    id: 3,
    name: "Bob",
    age: 19,
    city: "Karakol",
    grades: [5, 5, 5, 4],
    hobbies: [],
    isGraduated: false,
  },
  {
    id: 4,
    name: "Lisa",
    age: 22,
    city: "Bishkek",
    grades: [4, 5, 5, 5],
    hobbies: ["volleyball", "travel"],
    isGraduated: true,
  },
  {
    id: 5,
    name: "John",
    age: 21,
    city: "Talas",
    grades: [2, 3, 2, 4],
    hobbies: ["movies", "football"],
    isGraduated: false,
  },
  {
    id: 6,
    name: "Mila",
    age: 23,
    city: "Osh",
    grades: [5, 4, 4, 5],
    hobbies: ["reading", "cooking"],
    isGraduated: true,
  },
  {
    id: 7,
    name: "Alex",
    age: 19,
    city: "Naryn",
    grades: [3, 3, 4, 3],
    hobbies: ["music", "football"],
    isGraduated: false,
  },
  {
    id: 8,
    name: "Kate",
    age: 20,
    city: "Bishkek",
    grades: [4, 4, 5, 5],
    hobbies: ["dance", "photography"],
    isGraduated: true,
  },
  {
    id: 9,
    name: "Nick",
    age: 18,
    city: "Talas",
    grades: [5, 5, 4, 5],
    hobbies: ["gaming", "reading"],
    isGraduated: false,
  },
  {
    id: 10,
    name: "Sara",
    age: 21,
    city: "Osh",
    grades: [4, 5, 3, 4],
    hobbies: ["travel", "yoga"],
    isGraduated: true,
  },
];

const wrapper = document.querySelector(".wrapper");

for (let i = 0; i < students.length; i++) {
  const student = students[i];

  const card = document.createElement("div");
  card.classList.add("card");

  let hobbies = student.hobbies.join(", ");
  if (hobbies === "") {
    hobbies = "Нет хобби";
  }

  let statusClass = "red";
  if (student.isGraduated) {
    statusClass = "green";
  }

  card.innerHTML = `
    <h3>${student.name}</h3>
    <p>Возраст: ${student.age}</p>
    <p>Город: ${student.city}</p>
    <p>Оценки: ${student.grades.join(", ")}</p>
    <p>Хобби: ${hobbies}</p>
    <div class="status ${statusClass}"></div>
  `;

  wrapper.append(card);
}
//поиск:
const input = document.querySelector("#searchInput");
const button = document.querySelector("#searchBtn");

button.onclick = function () {
  let value = input.value.toLowerCase();

  for (let i = 0; i < students.length; i++) {
    if (students[i].name.toLowerCase() === value) {
      alert(i);
      return;
    }
  }

  alert("Пользователь не найден");
};

console.log(students.map((s) => s.name)); //массив имен!

console.log(students.filter((s) => s.age <= 19));//студенты до 19


//средний бал!
//  это был ужас еле как понял!
console.log(
  students.map(s => ({
    id: s.id,
    name: s.name,
    grade: s.grades.reduce((a, b) => a + b, 0) / s.grades.length
  }))
);



//Разница между младшим и старшим
console.log(
  Math.max(...students.map(s => s.age)) -
  Math.min(...students.map(s => s.age))
);


//Кол-во выпускниов!
console.log(students.filter(s => s.isGraduated).length);


//перевернул массив
console.log([...students].reverse());
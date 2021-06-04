// Students

db.students.insert({
    name: "Veronique",
    city: "Paris"
})

db.students.insert({
    name: "Steeven",
    city: "Lyon"
})

db.students.insert({
    name: "Marc",
    city: "Marseille"
})

db.students.insert({
    name: "Nour",
    city: "Lyon"
})

db.students.insert({
    name: "Romain",
    city: "Paris"
})

db.students.insert({
    name: "Sophie",
    city: "Paris"
})

db.students.find()

// favorite


db.favorite.insert({
    class: "Maths",
    sport: "Cricket",
    student_id: 2
})
db.favorite.insert({
    class: "Music",
    sport: "Hip-Hop",
    student_id: 6
})

db.favorite.insert({
    class: "Art",
    sport: "Boxing",
    student_id: 1
})

db.favorite.insert({
    class: "Literature",
    sport: "Tenis",
    student_id: 3
})

db.favorite.insert({
    class: "Computer Science",
    sport: "Tenis",
    student_id: 5
})

db.favorite.insert({
    class: "Art",
    sport: "Baseball",
    student_id: 4
})

// langues

db.languages.insert({
    langue: "French"
})

db.languages.insert({
    langue: "English"
})

db.languages.insert({
    langue: "German"
})

db.languages.insert({
    langue: "Spanish"
})

db.languages.insert({
    langue: "Mandarin"
})

// students_Id

db.students_languages.insert({
    students_id: 1,
    languages_id: 1
})
db.students_languages.insert({
    students_id: 1,
    languages_id: 2
})

db.students_languages.insert({
    students_id: 2,
    languages_id: 1
})

db.students_languages.insert({
    students_id: 3,
    languages_id: 1
})

db.students_languages.insert({
    students_id: 4,
    languages_id: 1
})

db.students_languages.insert({
    students_id: 4,
    languages_id: 2
})

db.students_languages.insert({
    students_id: 4,
    languages_id: 4
})

db.students_languages.insert({
    students_id: 4,
    languages_id: 5
})

db.students_languages.insert({
    students_id: 5,
    languages_id: 1
})

db.students_languages.insert({
    students_id: 5,
    languages_id: 5
})

db.students_languages.insert({
    students_id: 6,
    languages_id: 1
})

db.students_languages.insert({
    students_id: 6,
    languages_id: 2
})

db.students_languages.insert({
    students_id: 6,
    languages_id: 3
})

//
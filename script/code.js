//About Section
let about = document.querySelector('section#about .row:last-child');

let aboutContents = [
    "I am a communication-savvy individual who loves challenges and works hard to complete tasks. I enjoy learning new skills and thrive in a challenging environment.",
    "As the qualification, I have Btech in Public relations with majors in Media Studies, Communications, Marketing and Public Relations. What drove me to coding is the fact that technology and the 4IR is changing daily and the only way to stay up to date is learning new skills in an environment that values change with technology and time." 
]

//loop through the contents

aboutContents.forEach( (content)=>{
    about.innerHTML += 
    `<p class= 'lead'>${content}</p>`
})





// Education
let education = [
    {
        id: 1,
        year: 2020,
        description: 'I got my certificates on Data science',
        place: 'Data Camp',
        type: 'certificate',
        certificate: ''
    },
    {
        id: 2,
        year: 2019,
        description: 'I got my certificates on Advanced to Python',
        place: 'Data Camp',
        type: 'certificate',
        certificate: ''
    },
    {
        id: 3,
        year: 2018,
        description: 'I got my certificates on Intro to Python',
        place: 'Data Camp',
        type: 'certificate',
        certificate: ''
    },
    {
        id: 4,
        year: 2015,
        description: 'I got my certificate on Intro to Android Developer',
        place: 'Study Jams',
        type: 'certificate',
        certificate: ''
    },
    {
        id: 5,
        year: 2019,
        description: 'I got my diploma on Software Engineering',
        place: 'Softech Computers',
        type: 'Certificate',
        certificate: ''
    },
    {
        id: 6,
        year: 2018,
        description: 'Completed my course in Public Relations',
        place: 'Walter Sisulu University',
        type: 'Btech',
        certificate: ''
    },
    {
        id: 7,
        year: 2014,
        description: 'Grade 12',
        place: '',
        type: 'Certificate',
        certificate: ''
    },
]
//
let divEducation = document.querySelector('.education');
education.forEach((data)=> {
    divEducation.innerHTML += `
    <div class="card">
        <h4 class="display-4">${data.year}</h4>
        <div class="card-body">
            <p class="text-white">
                ${data.description} @ <span>${data.place}</span> 
                <a href="${data.certificate}" target="_blank">${data.type}</a>
            </p>
        </div>
    </div>
    `
})

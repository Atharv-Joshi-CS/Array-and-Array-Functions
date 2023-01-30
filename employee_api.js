//array of js objects
const rawData = [
  {
    id: "1",
    name: "Vibhuti Bajaj",
    profileImage: "assets/images/Vibhuti.jpg",
    introduction:
      "I like playing cricket and travelling. I'm always focused on the task which I take at hand.",
    profileLink: "https://vibhi24.github.io/Personal-Website/",
  },
  {
    id: "2",
    name: "Varun Athreya",
    profileImage: "assets/images/varun.jpg",
    introduction:
      "I am a passionate coder who loves capturing memories and exploring new places.",
    profileLink: "https://varunsathreya.github.io/contentstack-training/",
  },
  {
    id: "3",
    name: "Priya NB",
    profileImage: "assets/images/Priya.jpeg",
    introduction:
      "I'm enthusiastic to learn new things and I don't give up until i achieve it.",
    profileLink: "https://priya-nb.github.io/personalweb/index.html",
  },
  {
    id: "4",
    name: "Rangaswamy Vikas",
    profileImage: "assets/images/vikas.jpg",
    introduction:
      "I enjoy balancing my love for learning with my passion for gaming and a fit lifestyle.",
    profileLink: "https://vikasrangaswamy.github.io/portfolio/main.html",
  },
  {
    id: "5",
    name: "Deepak Chaturvedi",
    profileImage: "assets/images/deepak.png",
    introduction:
      "Believer, Dedicated. I am a curious developer that loves to convert ideas into code.",
    profileLink: "https://thedeepakchaturvedi.github.io/Portfolio/",
  },
  {
    id: "6",
    name: "Rakshitha S",
    profileImage: "assets/images/Rakshitha.jpg",
    introduction:
      "I'm passionate to meet people, learn new things. I love challenges and interested in travelling.",
    profileLink: "#",
  },
  {
    id: "7",
    name: "Kashmeera Raychoty",
    profileImage: "assets/images/Kashmeera.jpg",
    introduction: "I am a creative person and like to explore new things.",
    profileLink: "https://kashmeeraraychoty.github.io/Kashmeera-s-Portfolio/",
  },
  {
    id: "8",
    name: "Harshitha D",
    profileImage: "assets/images/Harshitha D.png",
    introduction: "I'm a partical person and like to travel and listen K-pop.",
    profileLink: "https://harshithad0703.github.io/individual_website/",
  },
  {
    id: "9",
    name: "Sanika Pareek",
    profileImage: "assets/images/sanika.jpeg",
    introduction:
      "I'm curious to learn and explore new things and like to paint.",
    profileLink:
      "https://sanikapareek-contentstack.github.io/sanika-portfolio/",
  },
  {
    id: "9",
    name: "Raj Pandey",
    profileImage: "assets/images/Raj.png",
    introduction: "Computer Engineer, Painter, Poet, Reader",
    profileLink: "https://cs-raj.github.io/pw-2/",
  },
  {
    id: "10",
    name: "Viraj Yadav",
    profileImage: "assets/images/Viraj.jpg",
    introduction:
      "I'm a sincere lunatic curious about technology and like playing cricket.",
    profileLink: "https://vikasrangaswamy.github.io/Contentstack/#",
  },
  {
    id: "11",
    name: "Faraaz Biyabani",
    profileImage: "assets/images/faraaz.webp",
    introduction:
      "I am always curious about technology and I love writing code to create purposeful things.",
    profileLink: "https://faraazb.github.io/cs-personal-website/",
  },
  {
    id: "12",
    name: "Vaibhav Patil",
    profileImage: "assets/images/Vaibhav.png",
    introduction:
      "I'm a true technophile. I love to talk about Physics and Spirituality.",
    profileLink: "https://vaibhav-patil07.github.io/portfolio/#",
  },
  {
    id: "13",
    name: "Soumik Paul",
    profileImage: "assets/images/Soumik.png",
    introduction: "2x ICPC regionalist and first runner-up at Techsurf 2022.",
    profileLink: "https://soumik43.github.io/Portfolio/",
  },
];

//Employee class
class Employee {
  constructor(id, name, profileImage, introduction, profileLink) {
    this.id = id;
    this.name = name;
    this.profileImage = profileImage;
    this.introduction = introduction;
    this.profileLink = profileLink
  }
}

//converting array of js objects to array of Employee objects
const employeeData = rawData.map(obj => new Employee(
  obj.id,
  obj.name,
  obj.profileImage,
  obj.introduction,
  obj.profileLink
))

//returns employee object if 'id' is valid
//returns empty array is 'id' is not found in the employeeData array
function findEmployeeById(id) {
  const res = employeeData.find(employee => employee.id == id)
  if (res == undefined) {
    return [];
  } else {
    return res
  }
}

//returns employee object if 'obj' is valid
//returns empty array is 'obj' is not found in the employeeData array
function findEmployee(obj) {
  const searchKeys = Object.keys(obj)

  function matchElement(element, index, array){
    for(let i = 0; i < searchKeys.length; i++){
      if(element[searchKeys[i]] != obj[searchKeys[i]]){
        return ;
      }
    }
    return element
  }
  
  const res = employeeData.find(matchElement)
  if (res == undefined) {
    return [];
  } else {
    return res
  }
}

function findIndexOfEmployee(id){
  const res = employeeData.findIndex(employee => employee.id == id)
  if(res == -1){
    return []
  }else{
    return res
  }
}

//returns updated employee object if 'id' is valid
//returns empty array is 'id' is not found in the employeeData array
function updateEmployee(id, obj) {
  index = findIndexOfEmployee(id)
  if (index == -1) {
    return []
  } else {
    const searchKeys = Object.keys(obj)
    const criticalFields = ['id']
    for (let i = 0; i < searchKeys.length; i++) {
      if (criticalFields.includes(searchKeys[i])) {
        continue;
      }
      employeeData[index][searchKeys[i]] = obj[searchKeys[i]]
    }
    return employeeData[index]
  }
}

//returns the employee list without the employee with specified 'id'
function removeEmployee(id) {
  const updatedEmployeeData = employeeData.filter(employee => employee.id != id)
  return (updatedEmployeeData);
}

// console.log(findEmployeeById(1))
// console.log(findEmployeeById(100))

// console.log(findEmployee({id : 2, name : 'Varun Athreya'}))
// console.log(findEmployee({id : 3, name : 'Varun Athreya'}))

// console.log(updateEmployee(1,{name : 'Atharv', id : 10,  introduction : 'I am atharv'}))

// console.log(removeEmployee(1))
// console.log(removeEmployee(100))
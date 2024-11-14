let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  arr.map((user)=>{
    if(user.profession ==="developer"){
      console.log(user);
    }
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((user)=>{
    if(user.profession ==="developer"){
      console.log(user);
    }
  })
}

function addData() {
  //Write your code here, just console.log
  const newuser={id:4, name:"susan", age:"20", profession:"intern"};
  arr.push(newuser);
  console.log(arr);
}

function removeAdmin() {
  

  let removeuser=arr.filter((user)=> user.profession !=="admin");
  console.log(removeuser);
}

function concatenateArray() {
  
  let newEmploye = [
  { id: 5, name: "joy", age: "22", profession: "admin" },
  { id: 6, name: "akhir", age: "21", profession: "maneger" },
  { id: 7, name: "arko", age: "20", profession: "developer" },
];
  let margeEmploye=arr.concat(newEmploye);
  console.log(margeEmploye);
}

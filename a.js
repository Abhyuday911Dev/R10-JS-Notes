let a = [1, 4, 5, 6, [1, 4, 5, 6, [1, 4, 5, 6]]];

const splice = () => {
  a.splice(1, 4, "llll");
};
// splice();
// console.log(a);

// console.log(a.flat(Infinity))

// for (const i in a) {
//   console.log(i);
// }

async function GetUser() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    // console.log(user);
    const geoUser = users.map((user) => {
     if(user.address.geo){
      return user.address
     }
    }) 
    console.log(geoUser)
  } catch (error) {
    console.log(error);
  }
}

GetUser();

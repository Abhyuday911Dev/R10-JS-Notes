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
    const user = await res.json();
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}

GetUser();

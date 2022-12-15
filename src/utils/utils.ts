export const getFakeToken = () => {
  const login  = "dashs";
  const date = new Date();
  // const currentDate = date.now();
  

  // console.log('currentDate: ', currentDate);
  // const digitDate = Date.parse(currentDate);
  const digitDate = Date.now();
  console.log('digitDate :', digitDate)

  const first = `${digitDate}`.split("").slice(0, 3).join("");
  const second = login.split("").slice(0, 2).join("");
  const third = `${digitDate}`.toString().split("").slice(7, 8).join("");
  const fourth = `${digitDate}`.toString().split("").slice(4, 6).join("");
  return `vkdj46nfh75${second}ds713d7dnbg8FGVH${first}JHNN1bbnJN99${third}98v43bc4FCGH${fourth}65bvhd7fss81s2${login}`;
}

const DataBase = [
  {
    login: "test",
    password: "test",
    email: "test@gmail.com",
    
  },
  {
    login: "dasha",
    password: "12345",
    email: "dasha@gmail.com",

  }
]

export const getConfirmAccess = (login: string, password: string) => {
  let currentAccount = DataBase.filter( el => el.login === login)
  console.log('currentAccount: ', currentAccount)
  if (currentAccount.length !== 0) {
    let result = currentAccount[0].password === password;
    return result;

  } else return false;
  
}

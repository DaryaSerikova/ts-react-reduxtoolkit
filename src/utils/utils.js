export const getFakeJWT = () => {
  const login  = "dashs";
  const currentDate = new Date();
  console.log('currentDate: ', currentDate);
  const digitDate = Date.parse(currentDate);
  const first = `${digitDate}`.split("").slice(0, 3).join("");
  const second = login.split("").slice(0, 2).join("");
  const third = `${digitDate}`.toString().split("").slice(7, 8).join("");
  const fourth = `${digitDate}`.toString().split("").slice(4, 6).join("");
  return `vkdj46nfh75${second}ds713d7dnbg8FGVH${first}JHNN1bbnJN99${third}98v43bc4FCGH${fourth}65bvhd7fss81s2${login}`;
}
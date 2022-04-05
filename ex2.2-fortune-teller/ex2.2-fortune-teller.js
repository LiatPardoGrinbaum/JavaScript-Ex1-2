function tellFortune(jobTitle, location, partnerName, numberOfChildren) {
  let fortune = `You will be a ${jobTitle} in ${location} and married to ${partnerName} with ${numberOfChildren} children.`;
  return fortune;
}
console.log(tellFortune("programmer", "Tel Aviv", "Sharon", 2));

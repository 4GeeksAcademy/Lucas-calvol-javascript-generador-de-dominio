import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function () {
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let domain = ['.com', '.es', '.net'];

  let domains = generateDomains(pronoun, adj, noun, domain);
  console.log(domains);
};

function generateDomains(pronoun, adj, noun, domain) {
  let results = [];
  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        for (let d of domain) {
          results.push(`${p}${a}${n}${d}`);
        }
      }
    }
  }
  return results;
}
// preparing body
const body = document.querySelector('body');
body.style.cssText = 'margin: 0; padding: 0; background-color:#fafafa;';
const color = '#ececec';
const fontFamily = 'monospace';
const size = '19px';
const paddingSection = '15px';
// preparing header and container
const myHeader = document.createElement('header');
const container = document.createElement('div');
myHeader.className = 'header';
myHeader.style.cssText = `background-color: #333; position: relative; top: 0;`;
container.className = 'container';
document.addEventListener('', function () {
  let styleContainer = document.querySelector('.container');
  console.log('styleContainer');
});
container.style.cssText = `
    width: 85%;
    margin: 0 auto; 
    background-color: #333;
    display: flex;
    align-items: center;
    justify-content: space-between;
    `;

// preparing logo
const logo = document.createElement('h1');
logo.innerText = 'Bedeir';
container.append(logo);
myHeader.append(container);
logo.style.cssText = `
    color:${color}; 
    padding: 20px; 
    font-family: ${fontFamily}; 
    margin: 0;
    cursor: pointer;`;

// creat list for nav bar
const ul = document.createElement('ul');
const url = ['Home', 'About', 'Contact', 'Projects'];
for (let i = 0; i < 4; i++) {
  let li = document.createElement('li');
  li.style.cssText = `
    margin-left: 15px;
    cursor: pointer;`;
  li.innerText = url[i];
  ul.append(li);
}
container.append(ul);
ul.style.cssText = `
    color: ${color};
    list-style: none;
    font-family: ${fontFamily};
    font-size: ${size};
    display: flex;
    justify-content: space-around;
    padding: 0`;
body.append(myHeader);

// start main-products
let mainContent = document.createElement('main');
mainContent.className = 'main-content';
mainContent.style.cssText = `
    width: 85%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(350px, 1fr));
    grid-gap: 15px;
    font-family: ${fontFamily};
    font-size: ${size};
    margin-top: ${paddingSection};
    `;
// creat products
for (let i = 1; i < 16; i++) {
  let product = document.createElement('div');
  product.style.cssText = `
    background-color: #333; 
    color: ${color}; 
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    text-align: center;`;
  let numberProduct = document.createElement('h1');
  numberProduct.innerHTML = i;
  numberProduct.style.cssText = `margin-bottom: 0; margin-top: 10px`;
  product.append(numberProduct);
  let nameOfProduct = document.createElement('p');
  nameOfProduct.innerHTML = `Product`;
  nameOfProduct.style.cssText = `margin-bottom: 10px;`;
  product.append(nameOfProduct);
  mainContent.append(product);
}
body.append(mainContent);

// start footer
const myFooter = document.createElement('footer');
myFooter.style.cssText = `
  text-align: center; 
  background-color: #333; 
  font-family: ${fontFamily}; 
  font-size: ${size};
  margin-top: ${paddingSection};
  color: ${color}`;
const footerContent = document.createElement('p');
footerContent.innerText = 'Created by Bedeir';
footerContent.style.cssText = `margin: 0; padding: 20px`;
myFooter.append(footerContent);
body.append(myFooter);

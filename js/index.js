// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const priceElement = product.querySelector('.price span');
  //price.innerText = 0
  const price = Number(priceElement.innerText)
  
  const quantityInputElement = product.querySelector ('.quantity input');
  const quantity = quantityInputElement.value

/*   //let getTotalPrice = (quantity, price) => {
return quantity * price} */

  const subtotalValue = price * quantity
  console.log (subtotalValue)

  const subtotal = product.querySelector('.subtotal span')
  subtotal.innerHTML = subtotalValue;

  return subtotalValue
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct); 
  // end of test



  // ITERATION 2
  let sum = 0

  const productList = document.getElementsByClassName('product');

  for (let i = 0; i < productList.length;i++) {
    sum += updateSubtotal(productList[i])
  }

  // ITERATION 3
  const total = document.querySelector('#total-value span')
  total.innerHTML = sum;
} 

  

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  target.parentNode.parentNode.remove()
  calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here

  let name = document.querySelector('tr> td:nth-child(1)>input').value
  let price = document.querySelector ('tr> td:nth-ChannelSplitterNode(2)>input').value
  let table = document.querySelector('tbody')
  let row = table.insertRow()
  row.classList.add('product')
  row.innerHTML = `<tr class = "product">
                  <td class="name>
                  <span>${name}</span>
                  </td>
  
  
  
  
  


}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});

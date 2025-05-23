// get  total 
// create product
// save local storage
// clear inputs
// read
// count
// delete
// update
// search
// clean data


let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');
let tbody = document.getElementById('tbody');

let mood = 'create';





//get total

function getTotal()
{
    if(price.value != ''){
      let result = (+price.value + +taxes.value + +ads.value) - +discount.value
    total.innerHTML = result;
    total.style.background = 'green';
   }
   else{
    total.innerHTML = '';
    total.style.background = 'rgb(64, 8, 117)';
   }

}







// create product 

let dataPro;
if( localStorage.product != null){
    dataPro = JSON.parse(localStorage.product)
}
else{
    dataPro = [];
}







submit.onclick = function(){
    let newPro = {
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value,
    }



    // count
    // clean  data
    if(title.value != ''
     && price.value != ''
     && category.value != ''
    && newPro.count < 100){
   if(mood === 'create'){
    if(newPro.count > 1){
        for(let i = 0; i < newPro.count;i++)
            dataPro.push(newPro);
    }
    else{
        dataPro.push(newPro);
    }
   }else{
    dataPro[   fakeVar] = newPro;
    mood = 'create';
    submit.innerHTML = 'create';
    count.style.display = 'block';

   }
   clearData();

    }
   // clean  data
    //count



    
   
   
    // save local storage
    localStorage.setItem('product', JSON.stringify(dataPro)   )
     
     showData();

}


// clear input
function clearData(){
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    total.innerHTML = '';
    count.value = '';
    category.value = '';

}





// read 
function showData()
{

    getTotal();
    let table = '';
    for(let i = 0; i < dataPro.length;i++){
        table += `
       

          <tr>
    <td data-label="ID">${i+1}</td>
    <td data-label="Title">${dataPro[i].title}</td>
    <td data-label="Price">${dataPro[i].price}</td>
    <td data-label="Taxes">${dataPro[i].taxes}</td>
    <td data-label="Ads">${dataPro[i].ads}</td>
    <td data-label="Discount">${dataPro[i].discount}</td>
    <td data-label="Total">${dataPro[i].total}</td>
    <td data-label="Category">${dataPro[i].category}</td>
    <td data-label=""><button onclick="updateData(${i})" id="update">update</button></td>
    <td data-label=""><button onclick="deleteData(${i})" id="delete">delete</button></td>
  </tr>
        `
       
    }
   document.getElementById('tbody').innerHTML = table;
   let btndDelete = document.getElementById('deleteAll');
   if(dataPro.length > 0){
    btndDelete.innerHTML = `
    <button onclick="deleteAll()">delete Alle (${dataPro.length})</button>
     
    `

   }
   else{
    btndDelete.innerHTML = '';
   }
}
showData()




// delete 
function deleteData(i){
    dataPro.splice(i,1);
    localStorage.product = JSON.stringify(dataPro);
    showData();


}




// delete all
function deleteAll(){
    localStorage.clear();
    dataPro.splice(0);
    showData();

}

// count



//update
function updateData(i){
    title.value = dataPro[i].title;
    price.value = dataPro[i].price;
    taxes.value = dataPro[i].taxes;
    ads.value = dataPro[i].ads;
    discount.value = dataPro[i].discount;
    category.value = dataPro[i].category;
    getTotal();
    count.style.display = 'none';
    submit.innerHTML = 'update';
    mood = 'update';
    fakeVar = i;
    scroll({
        top:0,
        behavior:'smooth'
    })
   
}




//search 
let searchMood = 'title';
function getSearchMode(id)
{
   let search = document.getElementById('search');
    if(id == 'searchTitle'){
        searchMood = 'title';
        search.placeholder = 'search by title';
    }else{
        searchMood = 'Category';
        search.placeholder = 'search by category';
    }
    search.focus()
 

}
function searchData(value){
    
   if(searchMood == 'title')
    {

    }else{

    }
}
// ماذلت اكتب في البحث










// clean  data




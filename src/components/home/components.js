import '../../../src/' 


const menuData='../../../src/menu.json';
fetch(menuData)
.then((response) => response.json())
.then(responseJson =>console.log(responseJson))
.catch((error)=>{
  console.info('hubo un problema '+error.message);
});


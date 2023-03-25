const state={
    tasklist:[],
}



const taskContents= document.querySelector(".tasks__contents");
const taskModal= document.querySelector(".task__modal__body");
//  console.log(taskContents);
//  console.log(taskModal);

// TEMPLATE FOR THE CARDS;
// element identifier key=${id} is been missing 
const htmlTaskcontent=({id,title,description,type,url}) =>`
<div class="col-md-6 col-lg-4 mt-3" id=${id} >

// for header of the card;
    <div class=' card shadow-sm task__cards'>
        <div class='card-header d-flex justify-content-end  task__cards__header'>
        <button type='button' class=' btn btn-outline-primary mr-1.5'name='${id}' >
        // font awsome icons for button on cards;
        <i class='fas fa-pencil-alt name=${id}'></i>
         </button>
         <button type='button' class=' btn btn-outline-danger mr-1.5'name='${id}' >
                <i class='fas fa-trash-alt name=${id}'></i>
                 </button>   
        </div>

// body of the card;
       <div class='card-body'>
       ${
          url &&
          `<img width='100%' src=${url}alt='card image' class='card-img-top md-3 rounded-lg'/>`  
       }
           <h4 class='card-title task__card__title'>${title}</h4>
           <p calss='description trim-3-lines text-muted'>${description}</p>
           <div class='tags text-white d-flex flex-wrap'>
             <span class='badge bg-primary mr-1'${type}></span>
           </div>
       </div>
// FOOTER SECTION OF THE CARDS ON SCREEN ;
      <div  calss='card-footer'>
       <button type='button' class='btn btn-outline-primary float-right' data-bs-toggle="modal" data-bs-target="#showTask">Open Task</button>
      </div>
</div>   
`;

// MODAL BODY ON A >> CLICK ON THE OPEN TASK TO SHOW IMG,TITLE,TYPE,DESCRIPTION;
const htmlModalcontent=({id,title,description,url}) =>{

const date=new Date(parseInt(id));
return `
  <div id=${id}>
  ${
    url &&
    `<img width='100%' src=${url}alt='card image' class='img-fluid place__holder__image mr-3'/>`  
 }
 <strong class='text-muted text-sm'> created on : ${date.toDateString()}</strong>
  </div>
  <h2 class='my-3'>${title}</h2>
  <p class='text-muted '>${description}</p>
 `
};

// FOR UPDATING THE DATAS IN STORAGE;
const updateLocalStorage={}=>{
localStorage.setItems(
    "tasky",
    JSON.stringify({
        tasks: state.tasklist,
    })
 );
};



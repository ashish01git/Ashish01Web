const tabs=document.querySelectorAll('.tab_btn');

const all_content=document.querySelectorAll('.details');

tabs.forEach((tab,index)=>{
       tab.addEventListener('click',()=>{
         tabs.forEach(tab=>{tab.classList.remove('active')});
         tab.classList.add('active');
          

         all_content.forEach(content=>{content.classList.remove('active')});
         all_content[index].classList.add('active');
       })
})

// -------------- json api -----

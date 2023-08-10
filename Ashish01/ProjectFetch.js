let http=new XMLHttpRequest();

http.open('get','Project.json',true);


http.send();


http.onload=function (){

    if(this.readyState==4 && this.status==200)
    {
        let pro=JSON.parse(this.responseText);
          
        // console.log(pro);
 
        let output=" ";

        for (let ite of pro) 
        {
            output+=`
            <article class="box">
            <img src="${ite.imgUrl}" alt="no imge" srcset="">
            <div class="content">
                <h2>${ite.Pro_Name}</h2>
                <p>${ite.Pro_sum}</p>
                <ol>
                    <li>Lang:&nbsp;<span>${ite.lang}</span></li>
                    <li>Fornted:&nbsp;<span>${ite.Fronted}</span></li>
                    <li>Backend:&nbsp;<span>${ite.Backend}</span></li>
                </ol>
                <a href="${ite.sourc_code}" class="btn">Source Code</a>
            </div>
             </article>
            
            `;
            
            
        }
        document.querySelector('.projects-item').innerHTML=output;
    } 
}
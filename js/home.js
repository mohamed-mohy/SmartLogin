let homeBody = document.getElementById("homeBody")
let Cards;
let http = new XMLHttpRequest();
http.open("GET","https://613680a58700c50017ef55c3.mockapi.io/api/v1/test");
http.send();
http.addEventListener("readystatechange",function(){
    if(http.readyState == 4 && http.status == 200)
    {
        Cards=JSON.parse(http.response);
        userPosts()
    
    }
})

function userCards()
{

    let collector = ``;
    for (let i = Cards.length-1; i >0 ; i--) {
        collector +=`
        

        <div class="col-md-4 my-3 ">
        <div class="itemCard  rounded-1 bg-dark  text-white shadow-lg p-5">
            <div class="row align-items-center">
                <div class="col">
                    <img id="img-Card" src="${Cards[i].avatar}" class="img-fluid rounded-circle shadow card-img">
                </div>
                <div class="  col offset-2 ">
                    <button class="btn btn-primary  d-flex justify-content-between align-items-center px-4" > 
                        <i class="fa fa-user-plus px-2" aria-hidden="true"></i>
                        Follow
                    </button>
                </div>
            </div>
            <h5 class="pb-0 mb-0 pt-2 text-light">
                <span id="FName">${Cards[i].fname}</span>
                <span id="LName">${Cards[i].lname}</span>
            </h5>
            <a href="#" class="text-decoration-none">
                <p id="AccName" class=" pt-0 mt-0 text-muted">@${Cards[i].accname}</p>
            </a>
            <p id="Bio">
            ${Cards[i].Bio}${Cards[i].Bio}${Cards[i].Bio}
            </p>
            <p>Followers <a href="#" class="text-decoration-none"><span id="FollNum">${Cards[i].follow.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span></a></p>
            
            </div>
    </div>



        `
        homeBody.innerHTML=collector
        
        
    

    }
    
    
}



function userPosts()
{
    let collectorPost = ``;
    for (let i = 0; i < Cards.length; i++) {
        collectorPost +=`
        
        <div class="col-md-8 my-3 ">
        <div class="itemCard  rounded-1 bg-dark  text-white shadow-lg p-5">
            <div class="row align-items-center">
                <div class="col">
                    <img id="img-Card" src="${Cards[i].avatar}" class="img-fluid rounded-circle shadow card-img">
                </div>

                <div class="col">
                    <h5 class="pb-0 mb-0 pt-2 text-light">
                        <span id="FName">${Cards[i].fname}</span>
                        <span id="LName">${Cards[i].lname}</span>
        
                        <span class="fa-stack" style=" font-size:.3em">
                        <span id="online" class="d-none online">${Cards[i].online}</span>
                        <i class="far fa-circle fa-stack-2x"></i>
                        <i id="Status" class="fas fa-circle fa-stack-1x Status"></i>
                        </span>
                    </h5>
                    <a href="#" class="text-decoration-none">
                        <p id="AccName" class=" pt-0 mt-0 text-muted">@${Cards[i].accname}</p>
                    </a>
                    <a href="#" class="text-decoration-none">
                        <p id="AccName" class=" p-0 m-0 text-muted">${Cards[i].detetime.slice(0, 16).replace("T"," ")}</p>
                    </a>
                </div>
                <div class="  col offset-md-2">
                    <button class="btn btn-primary  d-flex justify-content-between align-items-center px-4" > 
                        <i class="fa fa-user-plus px-2" aria-hidden="true"></i>
                        Follow
                    </button>
                </div>
            </div>
            <p class=" col offset-3" id="Bio">
            ${Cards[i].posts}
            </p>
            <p>Followers <a href="#" class="text-decoration-none"><span id="FollNum">${Cards[i].follow.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span></a></p>
        </div>
    </div>



        `
        homeBody.innerHTML=collectorPost
        
        let onlineStatus= document.querySelectorAll(".online")
        Array.from(onlineStatus)
        if(onlineStatus.length == Cards.length)
        {
            for (let i = 0; i < Cards.length; i++) {
                if(onlineStatus[i].childNodes[0].nodeValue == "true")
                {
                    let allStatus=  document.querySelectorAll(".Status")
                    Array.from(allStatus)
                    allStatus[i].className="fas fa-circle fa-stack-1x Status text-success"
                
                }
                else
                {
                    let allStatus=  document.querySelectorAll(".Status")
                    Array.from(allStatus)
                    allStatus[i].className="fas fa-circle fa-stack-1x Status text-muted"
                }
            }
        }
        
    

    }

    
    
}

function switchAll()
{
    
        if(state){
            document.getElementById("morePeople").setAttribute("onclick","userCards()");
            state = false;
        }else{
            document.getElementById("morePeople").setAttribute("onclick","userPosts()")
            state = true;
        }
    
    
}
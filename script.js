let name =""
setTimeout(() => {
    name= prompt("enter your name")
    console.log(name)
    // document.getElementById("user").children[1].children[0].innertext = "ramu"
    console.log(document.getElementById("user").children[1].children[0].innerHTML=name)
}, 2000);

const showcommentbox=(e)=>{
    let element= document.getElementById("CommentSection")

    //if element exists and this post does not contain that element 

    
    if(e.parentNode.children.length==7 &&  element!=null){
        element.remove()
        let commentsection = document.createElement("section")
        commentsection.setAttribute("id","CommentSection")
        commentsection.innerHTML=`<h1 class="h-primary center" style="color:black">Comment</h1>
        <textarea name="commentbox" id="commentbox" cols="10" rows="4" placeholder="Comment on above post"></textarea>
        <br><div id="yesnocontainer">
        <button  class="yesnobtn" >cancel</button>
        <button class="yesnobtn" id="commentsubmit"  onclick="handlecommentsubmit(this)" >Submit</button>
        </div>`
        e.parentNode.appendChild(commentsection)
    }
    else if(e.parentNode.children.length==7 && element==null){
        let commentsection = document.createElement("section")
        commentsection.setAttribute("id","CommentSection")
        commentsection.innerHTML=`<h1 class="h-primary center" style="color:black">Comment</h1>
        <textarea name="commentbox" id="commentbox" cols="10" rows="4" placeholder="Comment on above post"></textarea>
        <br><div id="yesnocontainer">
        <button  class="yesnobtn" >cancel</button>
        <button class="yesnobtn" id="commentsubmit" onclick="handlecommentsubmit(this)" >Submit</button>
        </div>`
        e.parentNode.appendChild(commentsection)
    }
    else if(e.parentNode.children.length==8){
       
        document.getElementById("CommentSection").remove()
    }

    
}

const handleupvote=(e)=>{
    if(e.classList.contains("yellow")){
        e.classList.remove("yellow")
        
    }
    else{
        e.classList.add("yellow")
    }
  
}

const handlecommentsubmit=(e)=>{
    let textbox = e.parentNode.previousElementSibling.previousElementSibling
    let commentbox = textbox.parentNode.previousElementSibling.previousElementSibling.previousElementSibling
    console.log(commentbox.children)
    if(commentbox.children.length==1){
        let comment = document.createElement("div")
        comment.classList.add("comment")
        comment.innerHTML= `<br/><div style="display:flex, background-color: beige" ><img src="https://i.pinimg.com/originals/14/0f/4c/140f4ccbd7d91a1bb7a80936201f3a7d.png" alt="user image" class="anonymousimg"> You</div>
        <div>${textbox.value}</div><br/>`
        commentbox.appendChild(comment)
    }
    else{
        commentbox.children[1].children[2].innerHTML=textbox.value

    }
    textbox.value =""
}
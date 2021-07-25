let username=null;
let db,msgRef;
      
var msgScreen = document.getElementById("messages"); //the <ul> that displays all the <li> msgs
var msgForm = document.getElementById("messageForm"); //the input form
var msgInput = document.getElementById("msg-input"); //the input element to write messages
var msgBtn = document.getElementById("msg-btn"); //the Send button

function init(){
    // console.log(msgScreen)
    var firebaseConfig = {
        apiKey: "AIzaSyAXjnN7PBoNctwdxmS_ArhnDsCyTFtIFgU",
        authDomain: "hacktable-web.firebaseapp.com",
        projectId: "hacktable-web",
        storageBucket: "hacktable-web.appspot.com",
        messagingSenderId: "130755552958",
        appId: "1:130755552958:web:d09e243147957ab0ad20ef",
        measurementId: "G-VNJPC87G8W",
        databaseURL: "https://hacktable-web-default-rtdb.asia-southeast1.firebasedatabase.app",
        
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
       db = firebase.database();
       msgRef = db.ref("/y1"); 
    //    if(msgForm)
        msgForm.addEventListener('submit', sendMessage);
        
      loadChat()

} 
function getName(){
    if(localStorage.getItem("username")==null){
        // username = prompt("Please enter your name");
        localStorage.setItem("username","Anonymous user"+Math.random());
    }
    else username  = localStorage.getItem("username")
    return username
}
function sendMessage(e){
    // alert("hi")
    e.preventDefault();
    if(username==null){
        username = getName()
    }
    const text =    msgInput.value;
  
      if(!text.trim()) return alert('Please type a message'); //no msg submitted
      const msg = {
            name:username,
          text: text
      };
  
      msgRef.push(msg);
      msgInput.value = "";
  }

function loadChat(){

    msgRef.on('value', (snapshot) => {
        const datas = snapshot.val();

        console.log(datas)
        msgScreen.innerHTML = null;
        for(let dt in datas){
            let data = datas[dt]
            
            console.log(data)
            if(data==null)return;
            const {name, text} = data; //get name and text
            
        //load messages, display on left if not the user's name. Display on right if it is the user.
        const msg = `<li class="${name == username ? "msg my": "msg"}"><span class = "msg-span">
            <i class = "name">${name}: </i>${text}
            </span>
            </li>`

        msgScreen.innerHTML += msg; //add the <li> message to the chat window
        
        //auto scroll to bottom
        document.getElementById("chat-window").scrollTop = document.getElementById("chat-window").scrollHeight;
        }
      });
}

window.onload = init;

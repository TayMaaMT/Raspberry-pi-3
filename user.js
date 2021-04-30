var token = localStorage.getItem('token');
if(token){
    const consumption = document.querySelector('#consumption');
    const balance = document.querySelector('#balance');
    const username = document.querySelector('#username');
    user();
    setInterval(()=>{
        user()
    },10000)
    
  function logout(){
    localStorage.removeItem("token");
    window.location.href='login.html'
  }
}else{
    window.location.href='login.html'
}

function user(){
    fetch('http://localhost:3000/user/user', {
    method: 'post', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({username:token})
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    consumption.textContent = data.user.consumption;
    balance.textContent = data.user.balance;
    username.textContent = data.user.username;
  })
  .catch((error) => {
    console.error('Error:', error);

  });
}
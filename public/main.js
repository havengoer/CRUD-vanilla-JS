window.onload = getCount;

const button = document.getElementById('btn');

button.addEventListener('click', () => {
    fetch('http://54.227.168.190:3000/increase', {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        }
    })
    // .then((req, res) => console.log("post req res") res.json())
    .then((res) => { 
        
        // console.log('FETCHED REQUEST STATUS', res.status)
        return res.json();
    })
    .then((data) => {
        // console.log(data);
        document.getElementById('number').textContent = data.count.toString();
    })
})

function getCount () {
    // console.log('fired get count');
    fetch('http://54.227.168.190:3000/getcount')
    .then(res => res.json())
    .then(data => {
        document.getElementById('number').textContent = data.count.toString()
    })
    .catch(err => {
        if (err) console.error(err);
    })
    
    
    
  
}
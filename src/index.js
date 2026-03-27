//get the data from the url using fetch:- 

export  async function getData(){
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/`,{
            method : 'GET'
        });
        if(!response.ok){
            throw new Error(response.status);
        }
        return await response.json();
    }catch(error){
        console.error(error);   
    }
}

// function postData(){
//     const postData = fetch("https://jsonplaceholder.typicode.com/users",{
//         method: 'post',
//         headers: {"Content-Type": "application/json"},
//         body : JSON.stringify({})
//     }).then(response => response.json()).then(data=> console.log(data));

// }

// const postDataNew = async() => {
//     const response =  await fetch("https://jsonplaceholder.typicode.com/users", {
//         method: "POST",
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify(object)
//     })
//     const res =  await response.json();
//     console.log(res);

// }

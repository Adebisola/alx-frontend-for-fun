/*function greeting(message){
    return 
}*/


/* arrow functions*/
/*let greeting = message => alert(`${message} everyone!`);
greeting("Buenas tardes");
let greeting = () => alert(`Hello everyone!`);*/ // no argument


let createBlog = (title, body) => {
    if (!title){
        throw new Error("A title is required");
    }
    if (!body) {
        throw new Error("Body cannot be empty");
    }
    return alert (`${title} - ${body}`);

};
createBlog("Blog title", "Blog body")

// alert('Welcome to The Hackers Haven! 🚀 Your ultimate destination for top-tier tools, resources, and gear to elevate your tech game. Lets hack the future!')
function confirmation() {
    var answer=confirm('Do You want to Add item?');
    let a;
    if(answer){
         a=prompt('Enter The number of item you want to Add:')

        alert(a+' Item is Sucessfully Added.');

    }
    else{
        alert('Sorry! Iterm is Not Added.')
    }
}



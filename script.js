function clearp(){
    console.log("clear");
    let y = "0"
    document.getElementById('main').innerHTML = null;
}

function solve(){

    let x = document.getElementById('main').innerHTML;

    let y = eval(x);

    document.getElementById('main').innerHTML = y;

    return y;

}

function execute(val){

    console.log("888");
    console.log(val);

    let x =document.getElementById('main').innerHTML;
    console.log(x);

    document.getElementById("main").innerHTML += val;
}



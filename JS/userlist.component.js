console.log("Connected!");

function refresh(users){
    var tbodyCtrl = document.getElementById("tbody");
    tbodyCtrl.innerHTML ="";
    for(var user of users){
        //if(!user.isAdmin){
        //    continue;
        //}
        var tr ="<tr>";
        tr += `<td>${user.id}</td>`
        tr += `<td>${user.username}</td>`
        tr += `<td>${user.firstname}</td>`
        tr += `<td>${user.lastname}</td>`
        tr += `<td>${user.isReviewer ? "Yes" : "No"}</td>`
        tr += `<td>${user.isAdmin ? "Yes" : "No"}</td>`
        tr += `<td> Detail | Update </td>`
        tr +="</tr>";
        tbodyCtrl.innerHTML += tr;
    }

}

//function Action (){
  //  var b = document.getElementById('name').value
    //document.getElementById('here').innerHTML = b;
//}


const getUsers = () => {
    //let jqXHR = UserService.list()
    //jqXHR.done((res) => refresh(res));
    UserService.list()
    .done((res) => refresh(res))
}
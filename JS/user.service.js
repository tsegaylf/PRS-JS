const url = "http://localhost:54318/api/users";

let UserService = {}

UserService.list = () => {
    return $.getJSON(url);
};

UserService.get = (id) => {
    return $.getJSON(`${url}/${id}`);
};

UserService.insert = (user) => {
    return $.ajax ({
        method: "POST",
        url: url,
        data: JSON.stringify(user),
        dataType: "json",
        crossOrigin: true,
        contentType: "application/json"
    });
}

UserService.update = (user) => {
    return $.ajax ({
        method: "PUT",
        url: `${url}/${user.id}`,
        data: JSON.stringify(user),
        dataType: "json",
        crossOrigin: true,
        contentType: "application/json"
    });
}

UserService.delete = (user) => {
    return $.ajax ({
        method: "DELETE",
        url: `${url}/${user.id}`,
        data: JSON.stringify(user),
        dataType: "json",
        crossOrigin: true,
        contentType: "application/json"
    });
}

//const userlist = () => {
  //  $.getJSON(url)
    //.done((res) => {
      //  console.log(res);
        //refresh(res);
    //});
//};

//const userdetail = (id) => {
  //  $.getJSON(`${url}/${id}`)
    //.done((res) => {
      //  console.log(res);
        //refresh(res);
    //});
//};
$().ready(() => {
    $("button").click(() => {
        getUser();
    });

    $("#btnDelete").click(( )=>{
        let user = {
            id: $("#pid").val(),
            username : $("#pusername").val(),
            password : $("#ppassword").val(),
            firstname: $("#pfirstname").val(),
            lastname: $("#plastname").val(),
            phone : $("#pphone").val(),
            email : $("#pemail").val(),
            isReviewer : $("#previewer").prop("checked"),
            isAdmin :$("#padmin").prop("checked"),
            active : $("#pactive").prop("checked"),
        }
        console.log("User:", user);
        UserService.delete(user)
        .done((res)=>{
            console.log("DELETE rc: ", res);
        });
    });
});

const refresh = (user) => {
    $("#pid").text(user.id);
    $("#pusername").text(user.username);
    $("#ppassword").text(user.password);
    $("#pname").text(user.firstname + " " + user.lastname);
    $("#previewer").text(user.isReviewer ? "Yes" : "No");
    $("#padmin").text(user.isAdmin ? "Yes" : "No");
    $("#pactive").text(user.active ? "Yes" : "No");
};

const getUser = () => {
    let id = $("#xid").val(); //get the id to display
    UserService.get(id)
    .done( (res) => {
        console.log("User:", res);
        refresh(res);
    });
};

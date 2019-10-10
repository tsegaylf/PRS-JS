let urlparms = {};

//$().ready(() => {
   // $("#btnGet").click(() => {
     //   let id = $("#xid").val();
       // get(id);
   // });
//});

$().ready(() => {
    let urlparms = Utilities.parseUrlParameter(document.url);
    $(".heading").css("fontWeight", "bold");

    $("#btnSave").click(( )=>{
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
        UserService.update(user)
        .done((res)=>{
            console.log("Update rc: ", res);
        });
    });
});


const get = (id) => {
    UserService.get(id)
    .done((user)=> {
        $("#pid").val(user.id);
        $("#pusername").val(user.username);
        $("#ppassword").val(user.password);
        $("#pfirstname").val(user.firstname);
        $("#plastname").val(user.lastname);
        $("#pphone").val(user.phone);
        $("#pemail").val(user.email);
        $("#previewer").prop("checked", user.isReviewer);
        $("#padmin").prop("checked", user.isAdmin);
        $("#pactive").prop("checked", user.active);
    });
};


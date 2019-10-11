const baseUrl = "file:///C:/repos/PRSJS";

$().ready(() => {
    $("#btnGet").click(() => {
        let urlParms = Utilities.parseUrlParameter(document.URL);
        get(urlParms.id);
        //let id = $("#xid").val();
        //    get(id);
    });

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
            //console.log("User:" , res);
            document.location.href = `${baseUrl}/userlist.component.html`;
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


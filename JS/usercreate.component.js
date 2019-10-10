$().ready(()=>{
    
    $("#btnSave").click(( )=>{
        let user = {
            id: 0,
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
        UserService.insert(user)
        .done((res)=>{
            console.log("Insert rc: ", res);
        });
    });
});
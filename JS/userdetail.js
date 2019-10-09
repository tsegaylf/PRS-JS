$().ready(() => {
    $("button").click(() => {
        getUser();
    });
});

const refresh = (user) => {
    $("#pid").text(user.id);
    $("#pusername").text(user.username);
    $("#pname").text(user.firstname + " " + user.lastname);
    $("#previewer").text(user.isReviewer ? "Yes" : "No");
    $("#padmin").text(user.isAdmin ? "Yes" : "No");
};

const getUser = () => {
    let id = $("#xid").val(); //get the id to display
    userdetail(id);
};

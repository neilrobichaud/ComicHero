
    function getId(){
        $.get("/getId", function(res){
                document.getElementById('id').textContent = "Your ID is " + res.toString();
            }
        );
    }

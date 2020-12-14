    var canvas;
    window.onload = function(){
        canvas = new fabric.Canvas('sheet');
        canvas.isDrawingMode = true;
        canvas.freeDrawingBrush.width = 5;
        canvas.freeDrawingBrush.color = "#ff0000";
    }

    

    function submitPicture(){
        $.ajax({
            url: '/draw/drawing',
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify({"img": canvas.toDataURL('png')}),
        });
    }
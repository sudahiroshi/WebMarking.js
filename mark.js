(function(){
    let mouse_condition = false;
    let event_propagation = false;
    let visible = false;
    let color = "rgb(200,50,50)";
    let size = 5;

    let cv = document.createElement('canvas');
    let body = document.querySelector('body');
    cv.width = body.offsetWidth;
    cv.height = body.offsetHeight;
    body.appendChild( cv );
    cv.style.position = "absolute";
    cv.style.left = "0px";
    cv.style.top = "0px";
    cv.style.display = "none";

    document.addEventListener('keypress', ev => {
        if( ev.key == "p" ) {
            if( visible == false ) cv.style.display = "block";
            else cv.style.display = "none";
            visible = !visible;
        } else if( ev.key == "o" ) {
            if( cv.style.pointerEvents == "none" )  cv.style.pointerEvents = "auto";
            else cv.style.pointerEvents = "none";
            event_propagation = !event_propagation;
        } else if( ev.key == "0" ) {
            let ctx = cv.getContext('2d');
            ctx.beginPath();
            ctx.clearRect( 0, 0, cv.width, cv.height );
            ctx.fill();
        }
    });

    cv.addEventListener('mousemove', ev => {
        if( mouse_condition ) {
            let rect = ev.target.getBoundingClientRect();
            let x = ev.clientX - rect.left;
            let y = ev.clientY - rect.top;
            let ctx = ev.srcElement.getContext('2d');
            ctx.strokeStyle = "red";
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc( x, y, size, 0, Math.PI*2.0, false );
            ctx.fill();
        }
    }, true);

    cv.addEventListener('mousedown', ev => {
        if( !event_propagation ) mouse_condition = true;
    },false);
    cv.addEventListener('mouseup', ev => {
        if( !event_propagation ) mouse_condition = false;
    });
})();
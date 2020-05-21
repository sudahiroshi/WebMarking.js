document.addEventListener('load', ev => {
    new Marking();
})

class Marking {
    constructor() {
        this.mouse_condition = false;
        this.visible = false;
        this.color = "rgb(200,50,50)";
        this.size = 5;
        this.cv = document.createElement('canvas');
        let body = document.querySelector('body');
        this.cv.width = body.offsetWidth;
        this.cv.height = body.offsetHeight;
        body.appendChild( this.cv );
        this.cv.style.position = "sbsolute";
        this.cv.style.left = "0px";
        this.cv.style.top = "0px";

        document.addEventListener('keypress', ev => {
            if( ev.key == "p" ) this.toggle_visibility();
        });

        this.cv.addEventListener('mousemove', ev => {
            if( this.mouse_condition ) {
                let rect = ev.target.getBoundingClientRect();
                let x = ev.clientX - rect.left;
                let y = ev.clientY - rect.top;
                let ctx = ev.srcElement.getContext('2d');
                ctx.strokeStyle = "red";
                ctx.fillStyle = "rgb(200,50,50)";
                ctx.beginPath();
                ctx.arc( x, y, 5, 0, Math.PI*2.0, false );
                ctx.fill();
            }
        });
    }

    toggle_visibility() {
        if( this.visible == false ) this.show();
        else this.hidden();
        this.visible = !this.visible;
    }

    show() {
        this.cv.style.display = "block";
    }

    hidden() {
        this.cv.style.display = "none";
    }
}
import React, { useRef } from 'react'

const Canvas = props => {
    const canvasRef = React.useRef(null);
    let canvas = undefined;
    let context = undefined;
    let points = calcWaypoints(getVertices());
    let t = 1;

    React.useEffect(() => {
        canvas = canvasRef.current
        context = canvas.getContext('2d')
        if (props.home){
            context.canvas.width = window.innerWidth;
            context.canvas.height = window.innerHeight * 3;
        } else {
            context.canvas.width = 50
            context.canvas.height = 50
        }
        context.lineCap = "round";
        context.lineWidth = 2;
        if (props.home) {
            context.strokeStyle = "rgba(255,255,255, 0.9)";
        } else {
            context.strokeStyle = "black";
        }
        animate(points);
    }, [canvasRef])

    function isPrime(num) {
        for (var i = 2; i < num; i++)
            if (num % i === 0) return false;
        return num > 1;
    }

    function getVertices() {
        const amount = 10;
        let vertices = [{ x: props.xAxis, y: props.yAxis, dir: "-y" }]
        for (let i = 0; i < props.size; i++) {
            if (isPrime(i)) {
                switch (vertices.slice(-1)[0].dir) {
                    case "x":
                        vertices.push({ x: vertices.slice(-1)[0].x, y: vertices.slice(-1)[0].y - amount, dir: "-y" });
                        break;
                    case "y":
                        vertices.push({ x: vertices.slice(-1)[0].x + amount, y: vertices.slice(-1)[0].y, dir: "x" });
                        break;
                    case "-x":
                        vertices.push({ x: vertices.slice(-1)[0].x, y: vertices.slice(-1)[0].y + amount, dir: "y" });
                        break;
                    case "-y":
                        vertices.push({ x: vertices.slice(-1)[0].x - amount, y: vertices.slice(-1)[0].y, dir: "-x" });
                        break;
                    default:
                }
            } else {
                switch (vertices.slice(-1)[0].dir) {
                    case "x":
                        vertices.push({ x: vertices.slice(-1)[0].x + amount, y: vertices.slice(-1)[0].y, dir: "x" });
                        break;
                    case "y":
                        vertices.push({ x: vertices.slice(-1)[0].x, y: vertices.slice(-1)[0].y + amount, dir: "y" });
                        break;
                    case "-x":
                        vertices.push({ x: vertices.slice(-1)[0].x - amount, y: vertices.slice(-1)[0].y, dir: "-x" });
                        break;
                    case "-y":
                        vertices.push({ x: vertices.slice(-1)[0].x, y: vertices.slice(-1)[0].y - amount, dir: "-y" });
                        break;
                    default:
                }
            }
        }
        return vertices;
    }

    function calcWaypoints(vertices) {
        var waypoints = [];
        if (props.home){
            for (var i = 1; i < vertices.length; i++) {
                var pt0 = vertices[i - 1];
                var pt1 = vertices[i];
                var dx = pt1.x - pt0.x;
                var dy = pt1.y - pt0.y;
                var x = pt0.x + dx;
                var y = pt0.y + dy;
                waypoints.push({
                    x: x,
                    y: y
                });
            }
        } else {
            for(var i=1;i<vertices.length;i++){
                var pt0=vertices[i-1];
                var pt1=vertices[i];
                var dx=pt1.x-pt0.x;
                var dy=pt1.y-pt0.y;
                for(var j=0;j<10;j++){
                    var x=pt0.x+dx*j/10;
                    var y=pt0.y+dy*j/10;
                    waypoints.push({x:x,y:y});
                }
            }
        }
        
        return (waypoints);
    }

    function animate() {
        if (t < points.length - 1) {
            requestAnimationFrame(animate);
        }
        // draw a line segment from the last waypoint
        // to the current waypoint
        context.beginPath();
        context.moveTo(points[t - 1].x, points[t - 1].y);
        context.lineTo(points[t].x, points[t].y);
        context.stroke();
        // increment "t" to get the next waypoint
        t++;
    }

    return (
        <canvas ref={canvasRef} style={{ width: "100%", height: "100%", margin: "0", transform: props.home ? "rotate(-25deg)" : "" }} />
    )

}

export default React.memo(Canvas)
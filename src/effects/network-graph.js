export class NetworkGraph {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.nodes = [];
        this.width = window.innerWidth;
        this.height = window.innerHeight;

        // Configuration for "Simple/Calm" feel
        this.config = {
            nodeCount: 40, // Lower count for less clutter
            connectionDist: 150,
            speed: 0.3, // Slow drift
            nodeColor: 'rgba(56, 189, 248, 0.4)', // Sky blue, transparent
            lineColor: 'rgba(148, 163, 184, 0.15)' // Slate 400, very faint
        };

        this.init();
    }

    init() {
        this.resize();
        window.addEventListener('resize', () => this.resize());
        this.createNodes();
        this.animate();
    }

    resize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    }

    createNodes() {
        this.nodes = [];
        for (let i = 0; i < this.config.nodeCount; i++) {
            this.nodes.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                vx: (Math.random() - 0.5) * this.config.speed,
                vy: (Math.random() - 0.5) * this.config.speed,
                size: Math.random() * 2 + 1
            });
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.width, this.height);

        // Draw Connections first (lines behind nodes)
        for (let i = 0; i < this.nodes.length; i++) {
            for (let j = i + 1; j < this.nodes.length; j++) {
                const dx = this.nodes[i].x - this.nodes[j].x;
                const dy = this.nodes[i].y - this.nodes[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < this.config.connectionDist) {
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = this.config.lineColor;
                    this.ctx.lineWidth = 1 - dist / this.config.connectionDist;
                    this.ctx.moveTo(this.nodes[i].x, this.nodes[i].y);
                    this.ctx.lineTo(this.nodes[j].x, this.nodes[j].y);
                    this.ctx.stroke();
                }
            }
        }

        // Draw Nodes
        for (let node of this.nodes) {
            this.ctx.beginPath();
            this.ctx.fillStyle = this.config.nodeColor;
            this.ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
            this.ctx.fill();

            // Update position
            node.x += node.vx;
            node.y += node.vy;

            // Bounce off walls
            if (node.x < 0 || node.x > this.width) node.vx *= -1;
            if (node.y < 0 || node.y > this.height) node.vy *= -1;
        }

        requestAnimationFrame(() => this.draw());
    }

    animate() {
        this.draw();
    }
}

export function init(canvas) {
    if (canvas) {
        new NetworkGraph(canvas);
    }
}

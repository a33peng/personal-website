import React, { useRef, useEffect } from "react";

export default function FallingPetal() { 
    const canvasRef = useRef<HTMLCanvasElement>(null); 

    useEffect(() => { 
        const canvas = canvasRef.current!; 
        if (!canvas) return; 
        const context = canvas.getContext("2d")!;
        if (!context) return; 

        // initialize viewport  
        canvas.width = window.innerWidth; 
        canvas.height = window.innerHeight;

        const totalPetals = 16;
        const petal = new Image(); 
        petal.src = "/petal.png"; 

        class Petal {
            x: number = 0;
            y: number = 0;
            w: number = 0;
            h: number = 0;
            xSpeed: number = 0;
            ySpeed: number = 0;
            flip: number = 0;
            flipSpeed: number = 0;

            constructor() { 
                this.reset(); 
                this.y = Math.random() * -canvas.height;
            }

            reset() { 
                this.w = 10 + Math.random() * 15; 
                this.h = 10 + Math.random() * 10; 

                this.x = Math.random() * canvas.width; 
                this.y = -this.h; 

                this.xSpeed = (Math.random() - 0.5) * 0.5;  
                this.ySpeed = 0.5 + Math.random() * 0.8; 

                this.flip = Math.random(); 
                this.flipSpeed = Math.random() * 0.05; 
            }

            draw() { 
                if (this.x > canvas.width || this.y > canvas.height || this.x < -50) { 
                    this.reset()
                }
                context.drawImage(petal, this.x, this.y, this.w * (0.5 + (Math.cos(this.flip) + 1) / 4), this.h); 
            }

            animate() { 
                this.x += this.xSpeed; 
                this.y += this.ySpeed; 
                this.flip += this.flipSpeed; 
            }
        } 
        
        const petals: Petal[] = []; 

        petal.onload = () => { 
            for (let i = 0; i<totalPetals; i++){ 
                petals.push(new Petal()); 
            }
            render(); 
        }; 
        
        function render() { 
            context.clearRect(0, 0, canvas.width, canvas.height); 
            petals.forEach((p) => { 
                p.animate(); 
                p.draw();
            });
            requestAnimationFrame(render);
        }
    }, []); 

    return (
        <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none"/>
    ); 
}
const rainbowColors = [
    '#ff0000', // Red
    '#ffa500', // Orange
    '#ffff00', // Yellow
    '#008000', // Green
    '#0000ff', // Blue
    '#4b0082', // Indigo
    '#ee82ee'  // Violet
];

function confeites(modo = 1, tempo = 5) {
    switch (modo) {
        case 1: {
            const duration = tempo * 1000,
                animationEnd = Date.now() + duration,
                defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 99 };

            function randomInRange(min, max) {
                return Math.random() * (max - min) + min;
            }

            const interval = setInterval(function () {
                const timeLeft = animationEnd - Date.now();

                if (timeLeft <= 0) {
                    return clearInterval(interval);
                }

                const particleCount = 50 * (timeLeft / duration);

                // since particles fall down, start a bit higher than random
                confetti(
                    Object.assign({}, defaults, {
                        particleCount,
                        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
                    })
                );
                confetti(
                    Object.assign({}, defaults, {
                        particleCount,
                        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
                    })
                );
            }, 250);
            break;
        }
        case 2: {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
            });
            break;
        }
        case 3: {
            const duration = 500;
            const end = Date.now() + duration;

            // Continuous confetti burst animation
            (function frame() {
                // Left side confetti
                confetti({
                    particleCount: 7,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: rainbowColors,
                    zIndex: 100,
                    // x: (rect.left + rect.width / 2) / window.innerWidth,
                    // y: (rect.top + rect.height / 2) / window.innerHeight
                });

                // Right side confetti
                confetti({
                    particleCount: 7,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                    colors: rainbowColors,
                    zIndex: 100
                });

                // Keep looping until duration ends
                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            })();
            break;
        }
        case 4: {
            function randomInRange(min, max) {
                return Math.random() * (max - min) + min;
            }
            confetti({
                angle: randomInRange(55, 125),
                spread: randomInRange(50, 70),
                particleCount: randomInRange(50, 100),
                origin: { y: 0.6 },
            });
            break;
        }
        case 5: {
            const count = 200,
                defaults = {
                    origin: { y: 0.7 },
                };

            function fire(particleRatio, opts) {
                confetti(
                    Object.assign({}, defaults, opts, {
                        particleCount: Math.floor(count * particleRatio),
                    })
                );
            }

            fire(0.25, {
                spread: 26,
                startVelocity: 55,
            });

            fire(0.2, {
                spread: 60,
            });

            fire(0.35, {
                spread: 100,
                decay: 0.91,
                scalar: 0.8,
            });

            fire(0.1, {
                spread: 120,
                startVelocity: 25,
                decay: 0.92,
                scalar: 1.2,
            });

            fire(0.1, {
                spread: 120,
                startVelocity: 45,
            });
            break;
        }
        case 6: {
            const defaults = {
                spread: 360,
                ticks: 100,
                gravity: 0,
                decay: 0.94,
                startVelocity: 30,
                shapes: ['heart'],
                colors: ['FFC0CB', 'FF69B4', 'FF1493', 'C71585'],
            };

            confetti({
                ...defaults,
                particleCount: 50,
                scalar: 2,
            });

            confetti({
                ...defaults,
                particleCount: 25,
                scalar: 3,
            });

            confetti({
                ...defaults,
                particleCount: 10,
                scalar: 4,
            });
            break;
        }
        case 7: {
            const defaults = {
                spread: 360,
                ticks: 50,
                gravity: 0,
                decay: 0.94,
                startVelocity: 30,
                shapes: ['star'],
                colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8'],
            };

            function shoot() {
                confetti({
                    ...defaults,
                    particleCount: 40,
                    scalar: 1.2,
                    shapes: ['star'],
                });

                confetti({
                    ...defaults,
                    particleCount: 10,
                    scalar: 0.75,
                    shapes: ['circle'],
                });
            }

            setTimeout(shoot, 0);
            setTimeout(shoot, 100);
            setTimeout(shoot, 200);
            break;
        }
        case 8: {
            const defaults = {
                spread: 360,
                ticks: 100,
                gravity: 0,
                decay: 0.94,
                startVelocity: 30,
            };

            function shoot() {
                confetti({
                    ...defaults,
                    particleCount: 30,
                    scalar: 1.2,
                    shapes: ['circle', 'square'],
                    colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
                });

                confetti({
                    ...defaults,
                    particleCount: 20,
                    scalar: 2,
                    shapes: ['emoji'],
                    shapeOptions: {
                        emoji: {
                            value: ['🦄', '🌈'],
                        },
                    },
                });
            }

            setTimeout(shoot, 0);
            setTimeout(shoot, 100);
            setTimeout(shoot, 200);
            break;
        }
        case 9: {
            confetti({
                spread: 360,
                ticks: 200,
                gravity: 1,
                decay: 0.94,
                startVelocity: 30,
                particleCount: 100,
                scalar: 3,
                shapes: ['image'],
                shapeOptions: {
                    image: [{
                        src: 'https://particles.js.org/images/fruits/apple.png',
                        width: 32,
                        height: 32,
                    },
                    {
                        src: 'https://particles.js.org/images/fruits/avocado.png',
                        width: 32,
                        height: 32,
                    },
                    {
                        src: 'https://particles.js.org/images/fruits/banana.png',
                        width: 32,
                        height: 32,
                    },
                    {
                        src: 'https://particles.js.org/images/fruits/berries.png',
                        width: 32,
                        height: 32,
                    },
                    {
                        src: 'https://particles.js.org/images/fruits/cherry.png',
                        width: 32,
                        height: 32,
                    },
                    {
                        src: 'https://particles.js.org/images/fruits/grapes.png',
                        width: 32,
                        height: 32,
                    },
                    {
                        src: 'https://particles.js.org/images/fruits/lemon.png',
                        width: 32,
                        height: 32,
                    },
                    {
                        src: 'https://particles.js.org/images/fruits/orange.png',
                        width: 32,
                        height: 32,
                    },
                    {
                        src: 'https://particles.js.org/images/fruits/peach.png',
                        width: 32,
                        height: 32,
                    },
                    {
                        src: 'https://particles.js.org/images/fruits/pear.png',
                        width: 32,
                        height: 32,
                    },
                    {
                        src: 'https://particles.js.org/images/fruits/pepper.png',
                        width: 32,
                        height: 32,
                    },
                    {
                        src: 'https://particles.js.org/images/fruits/plum.png',
                        width: 32,
                        height: 32,
                    },
                    {
                        src: 'https://particles.js.org/images/fruits/star.png',
                        width: 32,
                        height: 32,
                    },
                    {
                        src: 'https://particles.js.org/images/fruits/strawberry.png',
                        width: 32,
                        height: 32,
                    },
                    {
                        src: 'https://particles.js.org/images/fruits/watermelon.png',
                        width: 32,
                        height: 32,
                    },
                    {
                        src: 'https://particles.js.org/images/fruits/watermelon_slice.png',
                        width: 32,
                        height: 32,
                    },
                    ],
                },
            });
            break;
        }
        case 10: {
            const duration = 15 * 1000,
                animationEnd = Date.now() + duration;

            let skew = 1;

            function randomInRange(min, max) {
                return Math.random() * (max - min) + min;
            }

            (function frame() {
                const timeLeft = animationEnd - Date.now(),
                    ticks = Math.max(200, 500 * (timeLeft / duration));

                skew = Math.max(0.8, skew - 0.001);

                confetti({
                    particleCount: 1,
                    startVelocity: 0,
                    ticks: ticks,
                    origin: {
                        x: Math.random(),
                        // since particles fall down, skew start toward the top
                        y: Math.random() * skew - 0.2,
                    },
                    colors: ['#ffffff'],
                    shapes: ['circle'],
                    gravity: randomInRange(0.4, 0.6),
                    scalar: randomInRange(0.4, 1),
                    drift: randomInRange(-0.4, 0.4),
                });

                if (timeLeft > 0) {
                    requestAnimationFrame(frame);
                }
            })();
            break;
        }
        case 11: {
            const end = Date.now() + 15 * 1000;

            // go Buckeyes!
            const colors = ['#bb0000', '#ffffff'];

            (function frame() {
                confetti({
                    particleCount: 2,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: colors,
                });

                confetti({
                    particleCount: 2,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                    colors: colors,
                });

                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            })();
            break;
        }
        case 12: {
            var defaults = {
                scalar: 2,
                spread: 270,
                particleCount: 25,
                origin: { y: 0.4 },
                startVelocity: 35,
            };

            confetti({
                ...defaults,
                shapes: ['image'],
                shapeOptions: {
                    image: {
                        src: 'https://particles.js.org/images/pumpkin.svg',
                        replaceColor: true,
                        width: 32,
                        height: 40,
                    },
                },
                colors: ['#ff9a00', '#ff7400', '#ff4d00'],
            });
            confetti({
                ...defaults,
                shapes: ['image'],
                shapeOptions: {
                    image: {
                        src: 'https://particles.js.org/images/pine-tree.svg',
                        replaceColor: true,
                        width: 271,
                        height: 351.5,
                    },
                },
                colors: ['#8d960f', '#be0f10', '#445404'],
            });
            confetti({
                ...defaults,
                shapes: ['heart'],
                colors: ['#f93963', '#a10864', '#ee0b93'],
            });
            break;
        }
        case 13: {
            (async () => {
                const canvas = document.getElementById('my-canvas');

                // you should  only initialize a canvas once, so save this function
                // we'll save it to the canvas itself for the purpose of this demo
                canvas.confetti = canvas.confetti || (await confetti.create(canvas, { resize: true }));

                // QUALQUER CONFEITE - INICIO
                const duration = 500;
                const end = Date.now() + duration;

                (function frame() {
                    canvas.confetti({
                        particleCount: 7,
                        angle: 60,
                        spread: 55,
                        origin: { x: 0 },
                        colors: rainbowColors,
                        zIndex: 100,
                    });

                    canvas.confetti({
                        particleCount: 7,
                        angle: 120,
                        spread: 55,
                        origin: { x: 1 },
                        colors: rainbowColors,
                        zIndex: 100
                    });

                    if (Date.now() < end) {
                        requestAnimationFrame(frame);
                    }
                })();

                // QUALQUER CONFEITE - FIM
            })();
            break;
        }
    }
}

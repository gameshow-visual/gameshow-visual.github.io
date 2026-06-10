(function(g){g.__tsParticlesInternals=g.__tsParticlesInternals||{};g.__tsParticlesInternals.bundles=g.__tsParticlesInternals.bundles||{};g.__tsParticlesInternals.effects=g.__tsParticlesInternals.effects||{};g.__tsParticlesInternals.engine=g.__tsParticlesInternals.engine||{};g.__tsParticlesInternals.interactions=g.__tsParticlesInternals.interactions||{};g.__tsParticlesInternals.palettes=g.__tsParticlesInternals.palettes||{};g.__tsParticlesInternals.paths=g.__tsParticlesInternals.paths||{};g.__tsParticlesInternals.plugins=g.__tsParticlesInternals.plugins||{};g.__tsParticlesInternals.plugins=g.__tsParticlesInternals.plugins||{};g.__tsParticlesInternals.plugins.emittersShapes=g.__tsParticlesInternals.plugins.emittersShapes||{};g.__tsParticlesInternals.presets=g.__tsParticlesInternals.presets||{};g.__tsParticlesInternals.shapes=g.__tsParticlesInternals.shapes||{};g.__tsParticlesInternals.updaters=g.__tsParticlesInternals.updaters||{};g.__tsParticlesInternals.utils=g.__tsParticlesInternals.utils||{};g.__tsParticlesInternals.canvas=g.__tsParticlesInternals.canvas||{};g.__tsParticlesInternals.canvas=g.__tsParticlesInternals.canvas||{};g.__tsParticlesInternals.canvas.utils=g.__tsParticlesInternals.canvas.utils||{};g.__tsParticlesInternals.path=g.__tsParticlesInternals.path||{};g.__tsParticlesInternals.path=g.__tsParticlesInternals.path||{};g.__tsParticlesInternals.path.utils=g.__tsParticlesInternals.path.utils||{};var __tsProxyFactory=typeof Proxy!=="undefined"?function(obj){return new Proxy(obj,{get:function(target,key){if(!(key in target)){target[key]={};}return target[key];}});}:function(obj){return obj;};g.__tsParticlesInternals.bundles=__tsProxyFactory(g.__tsParticlesInternals.bundles);g.__tsParticlesInternals.effects=__tsProxyFactory(g.__tsParticlesInternals.effects);g.__tsParticlesInternals.interactions=__tsProxyFactory(g.__tsParticlesInternals.interactions);g.__tsParticlesInternals.palettes=__tsProxyFactory(g.__tsParticlesInternals.palettes);g.__tsParticlesInternals.paths=__tsProxyFactory(g.__tsParticlesInternals.paths);g.__tsParticlesInternals.plugins=__tsProxyFactory(g.__tsParticlesInternals.plugins);g.__tsParticlesInternals.plugins.emittersShapes=__tsProxyFactory(g.__tsParticlesInternals.plugins.emittersShapes);g.__tsParticlesInternals.presets=__tsProxyFactory(g.__tsParticlesInternals.presets);g.__tsParticlesInternals.shapes=__tsProxyFactory(g.__tsParticlesInternals.shapes);g.__tsParticlesInternals.updaters=__tsProxyFactory(g.__tsParticlesInternals.updaters);g.__tsParticlesInternals.utils=__tsProxyFactory(g.__tsParticlesInternals.utils);g.__tsParticlesInternals.canvas=__tsProxyFactory(g.__tsParticlesInternals.canvas);g.__tsParticlesInternals.path=__tsProxyFactory(g.__tsParticlesInternals.path);g.tsparticlesInternalExports=g.tsparticlesInternalExports||{};})(typeof globalThis!=="undefined"?globalThis:typeof window!=="undefined"?window:this);
/* tsParticles v4.0.5 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@tsparticles/engine'), require('@tsparticles/basic'), require('@tsparticles/shape-cards/suits'), require('@tsparticles/plugin-emitters/plugin'), require('@tsparticles/shape-emoji'), require('@tsparticles/shape-heart'), require('@tsparticles/shape-image'), require('@tsparticles/updater-life'), require('@tsparticles/plugin-motion'), require('@tsparticles/shape-polygon'), require('@tsparticles/updater-roll'), require('@tsparticles/updater-rotate'), require('@tsparticles/shape-square'), require('@tsparticles/shape-star'), require('@tsparticles/updater-tilt'), require('@tsparticles/updater-wobble')) :
    typeof define === 'function' && define.amd ? define(['exports', '@tsparticles/engine', '@tsparticles/basic', '@tsparticles/shape-cards/suits', '@tsparticles/plugin-emitters/plugin', '@tsparticles/shape-emoji', '@tsparticles/shape-heart', '@tsparticles/shape-image', '@tsparticles/updater-life', '@tsparticles/plugin-motion', '@tsparticles/shape-polygon', '@tsparticles/updater-roll', '@tsparticles/updater-rotate', '@tsparticles/shape-square', '@tsparticles/shape-star', '@tsparticles/updater-tilt', '@tsparticles/updater-wobble'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.__tsParticlesInternals = global.__tsParticlesInternals || {}, global.__tsParticlesInternals.bundles = global.__tsParticlesInternals.bundles || {}, global.__tsParticlesInternals.bundles.confetti = global.__tsParticlesInternals.bundles.confetti || {}), global.__tsParticlesInternals.engine, global.__tsParticlesInternals.bundles.basic, global.__tsParticlesInternals.shapes["cards/suits"], global.__tsParticlesInternals.plugins["emitters/plugin"], global.__tsParticlesInternals.shapes.emoji, global.__tsParticlesInternals.shapes.heart, global.__tsParticlesInternals.shapes.image, global.__tsParticlesInternals.updaters.life, global.__tsParticlesInternals.plugins.motion, global.__tsParticlesInternals.shapes.polygon, global.__tsParticlesInternals.updaters.roll, global.__tsParticlesInternals.updaters.rotate, global.__tsParticlesInternals.shapes.square, global.__tsParticlesInternals.shapes.star, global.__tsParticlesInternals.updaters.tilt, global.__tsParticlesInternals.updaters.wobble));
})(this, (function (exports, engine, basic, suits, plugin, shapeEmoji, shapeHeart, shapeImage, updaterLife, pluginMotion, shapePolygon, updaterRoll, updaterRotate, shapeSquare, shapeStar, updaterTilt, updaterWobble) { 'use strict';

    class ConfettiOptions {
        angle;
        colors;
        count;
        decay;
        disableForReducedMotion;
        drift;
        flat;
        gravity;
        position;
        scalar;
        shapeOptions;
        shapes;
        spread;
        startVelocity;
        ticks;
        zIndex;
        constructor() {
            this.angle = 90;
            this.count = 50;
            this.spread = 45;
            this.startVelocity = 45;
            this.decay = 0.9;
            this.gravity = 1;
            this.drift = 0;
            this.ticks = 200;
            this.position = {
                x: 50,
                y: 50,
            };
            this.colors = ["#26ccff", "#a25afd", "#ff5e7e", "#88ff5a", "#fcff42", "#ffa62d", "#ff36ff"];
            this.shapes = ["square", "circle"];
            this.scalar = 1;
            this.zIndex = 100;
            this.disableForReducedMotion = true;
            this.flat = false;
            this.shapeOptions = {};
        }
        get origin() {
            return {
                x: this.position.x / engine.percentDenominator,
                y: this.position.y / engine.percentDenominator,
            };
        }
        set origin(value) {
            this.position.x = value.x * engine.percentDenominator;
            this.position.y = value.y * engine.percentDenominator;
        }
        get particleCount() {
            return this.count;
        }
        set particleCount(value) {
            this.count = value;
        }
        load(data) {
            if (engine.isNull(data)) {
                return;
            }
            if (data.angle !== undefined) {
                this.angle = data.angle;
            }
            const count = data.count ?? data.particleCount;
            if (count !== undefined) {
                this.count = count;
            }
            if (data.spread !== undefined) {
                this.spread = data.spread;
            }
            if (data.startVelocity !== undefined) {
                this.startVelocity = data.startVelocity;
            }
            if (data.decay !== undefined) {
                this.decay = data.decay;
            }
            if (data.flat !== undefined) {
                this.flat = data.flat;
            }
            if (data.gravity !== undefined) {
                this.gravity = data.gravity;
            }
            if (data.drift !== undefined) {
                this.drift = data.drift;
            }
            if (data.ticks !== undefined) {
                this.ticks = data.ticks;
            }
            const origin = data.origin;
            if (origin && !data.position) {
                data.position = {
                    x: origin.x === undefined ? undefined : origin.x * engine.percentDenominator,
                    y: origin.y === undefined ? undefined : origin.y * engine.percentDenominator,
                };
            }
            const position = data.position;
            if (position) {
                if (position.x !== undefined) {
                    this.position.x = position.x;
                }
                if (position.y !== undefined) {
                    this.position.y = position.y;
                }
            }
            if (data.colors !== undefined) {
                if (engine.isArray(data.colors)) {
                    this.colors = [...data.colors];
                }
                else {
                    this.colors = data.colors;
                }
            }
            const options = data.shapeOptions;
            if (options !== undefined) {
                for (const shape in options) {
                    const item = options[shape];
                    if (item) {
                        this.shapeOptions[shape] = engine.deepExtend(this.shapeOptions[shape] ?? {}, item);
                    }
                }
            }
            if (data.shapes !== undefined) {
                if (engine.isArray(data.shapes)) {
                    this.shapes = [...data.shapes];
                }
                else {
                    this.shapes = data.shapes;
                }
            }
            if (data.scalar !== undefined) {
                this.scalar = data.scalar;
            }
            if (data.zIndex !== undefined) {
                this.zIndex = data.zIndex;
            }
            if (data.disableForReducedMotion !== undefined) {
                this.disableForReducedMotion = data.disableForReducedMotion;
            }
        }
    }

    const defaultGravity = 9.81, sizeFactor = 5, speedFactor = 3, decayOffset = 1, disableRotate = 0, disableTilt = 0, ids = new Map();
    async function addEmitter(container, actualOptions, opacitySpeed) {
        await container.addEmitter?.({
            startCount: actualOptions.count,
            position: actualOptions.position,
            size: {
                width: 0,
                height: 0,
            },
            rate: {
                delay: 0,
                quantity: 0,
            },
            life: {
                duration: 0.1,
                count: 1,
            },
            particles: {
                paint: {
                    fill: {
                        color: {
                            value: actualOptions.colors,
                        },
                        enable: true,
                    },
                },
                shape: {
                    type: actualOptions.shapes,
                    options: actualOptions.shapeOptions,
                },
                life: {
                    count: 1,
                },
                opacity: {
                    value: { min: 0, max: 1 },
                    animation: {
                        enable: true,
                        sync: true,
                        speed: opacitySpeed,
                        startValue: "max",
                        destroy: "min",
                        count: 1,
                    },
                },
                size: {
                    value: sizeFactor * actualOptions.scalar,
                },
                move: {
                    angle: {
                        value: actualOptions.spread,
                        offset: 0,
                    },
                    drift: {
                        min: -actualOptions.drift,
                        max: actualOptions.drift,
                    },
                    gravity: {
                        acceleration: actualOptions.gravity * defaultGravity,
                    },
                    speed: actualOptions.startVelocity * speedFactor,
                    decay: decayOffset - actualOptions.decay,
                    direction: -actualOptions.angle,
                },
                rotate: {
                    value: actualOptions.flat
                        ? disableRotate
                        : {
                            min: 0,
                            max: 360,
                        },
                    direction: "random",
                    animation: {
                        enable: !actualOptions.flat,
                        speed: 60,
                    },
                },
                tilt: {
                    direction: "random",
                    enable: !actualOptions.flat,
                    value: actualOptions.flat
                        ? disableTilt
                        : {
                            min: 0,
                            max: 360,
                        },
                    animation: {
                        enable: true,
                        speed: 60,
                    },
                },
                roll: {
                    darken: {
                        enable: true,
                        value: 25,
                    },
                    enable: !actualOptions.flat,
                    speed: {
                        min: 15,
                        max: 25,
                    },
                },
                wobble: {
                    distance: 30,
                    enable: !actualOptions.flat,
                    speed: {
                        min: -15,
                        max: 15,
                    },
                },
            },
        });
    }
    function convertOptions(actualOptions, params, opacitySpeed) {
        return {
            fullScreen: {
                enable: !params.canvas,
                zIndex: actualOptions.zIndex,
            },
            fpsLimit: 120,
            particles: {
                number: {
                    value: 0,
                },
                paint: {
                    fill: {
                        color: {
                            value: actualOptions.colors,
                        },
                        enable: true,
                    },
                },
                shape: {
                    type: actualOptions.shapes,
                    options: actualOptions.shapeOptions,
                },
                opacity: {
                    value: { min: 0, max: 1 },
                    animation: {
                        enable: true,
                        sync: true,
                        speed: opacitySpeed,
                        startValue: "max",
                        destroy: "min",
                        count: 1,
                    },
                },
                size: {
                    value: sizeFactor * actualOptions.scalar,
                },
                links: {
                    enable: false,
                },
                life: {
                    count: 1,
                },
                move: {
                    angle: {
                        value: actualOptions.spread,
                        offset: 0,
                    },
                    drift: {
                        min: -actualOptions.drift,
                        max: actualOptions.drift,
                    },
                    enable: true,
                    gravity: {
                        enable: true,
                        acceleration: actualOptions.gravity * defaultGravity,
                    },
                    speed: actualOptions.startVelocity * speedFactor,
                    decay: decayOffset - actualOptions.decay,
                    direction: -actualOptions.angle,
                    random: true,
                    straight: false,
                    outModes: {
                        default: "none",
                        bottom: "destroy",
                    },
                },
                rotate: {
                    value: actualOptions.flat
                        ? disableRotate
                        : {
                            min: 0,
                            max: 360,
                        },
                    direction: "random",
                    animation: {
                        enable: !actualOptions.flat,
                        speed: 60,
                    },
                },
                tilt: {
                    direction: "random",
                    enable: !actualOptions.flat,
                    value: actualOptions.flat
                        ? disableTilt
                        : {
                            min: 0,
                            max: 360,
                        },
                    animation: {
                        enable: true,
                        speed: 60,
                    },
                },
                roll: {
                    darken: {
                        enable: true,
                        value: 25,
                    },
                    enable: !actualOptions.flat,
                    speed: {
                        min: 15,
                        max: 25,
                    },
                },
                wobble: {
                    distance: 30,
                    enable: !actualOptions.flat,
                    speed: {
                        min: -15,
                        max: 15,
                    },
                },
            },
            motion: {
                disable: actualOptions.disableForReducedMotion,
            },
            emitters: {
                name: "confetti",
                startCount: actualOptions.count,
                position: actualOptions.position,
                size: {
                    width: 0,
                    height: 0,
                },
                rate: {
                    delay: 0,
                    quantity: 0,
                },
                life: {
                    duration: 0.1,
                    count: 1,
                },
            },
        };
    }
    async function setConfetti(engine$1, params) {
        const actualOptions = new ConfettiOptions();
        actualOptions.load(params.options);
        const fpsLimit = 120, fpsLimitFactor = 3.6, opacitySpeed = (actualOptions.ticks * engine.millisecondsToSeconds) / (fpsLimitFactor * engine.millisecondsToSeconds * fpsLimit);
        let containerOrPromise = ids.get(params.id);
        if (containerOrPromise instanceof Promise) {
            await containerOrPromise;
            containerOrPromise = ids.get(params.id);
        }
        const container = containerOrPromise;
        if (container && !container.destroyed) {
            const alias = container;
            if ("addEmitter" in alias) {
                await addEmitter(alias, actualOptions, opacitySpeed);
                return container;
            }
        }
        const create = async () => {
            const particlesOptions = convertOptions(actualOptions, params, opacitySpeed), newContainer = await engine$1.load({
                id: params.id,
                element: params.canvas,
                options: particlesOptions,
            });
            ids.set(params.id, newContainer);
            return newContainer;
        }, createPromise = create();
        ids.set(params.id, createPromise);
        return createPromise;
    }

    let initPromise = null;
    async function doInitPlugins(engine) {
        engine.checkVersion("4.0.5");
        await engine.pluginManager.register(async (e) => {
            await Promise.all([
                basic.loadBasic(e),
                pluginMotion.loadMotionPlugin(e),
                plugin.loadEmittersPluginSimple(e),
                suits.loadCardSuitsShape(e),
                shapeHeart.loadHeartShape(e),
                shapeImage.loadImageShape(e),
                shapePolygon.loadPolygonShape(e),
                shapeSquare.loadSquareShape(e),
                shapeStar.loadStarShape(e),
                shapeEmoji.loadEmojiShape(e),
                updaterRotate.loadRotateUpdater(e),
                updaterLife.loadLifeUpdater(e),
                updaterRoll.loadRollUpdater(e),
                updaterTilt.loadTiltUpdater(e),
                updaterWobble.loadWobbleUpdater(e),
            ]);
        });
    }
    async function initPlugins(engine) {
        if (initPromise) {
            return initPromise;
        }
        initPromise = doInitPlugins(engine);
        return initPromise;
    }
    async function confetti(idOrOptions, confettiOptions) {
        await initPlugins(engine.tsParticles);
        let options, id;
        if (engine.isString(idOrOptions)) {
            id = idOrOptions;
            options = confettiOptions ?? {};
        }
        else {
            id = "confetti";
            options = idOrOptions;
        }
        return setConfetti(engine.tsParticles, {
            id,
            options,
        });
    }
    confetti.create = async (canvas, options = {}) => {
        await initPlugins(engine.tsParticles);
        const id = canvas?.getAttribute("id") ?? "confetti";
        canvas?.setAttribute("id", id);
        await setConfetti(engine.tsParticles, {
            id,
            canvas: canvas ?? undefined,
            options,
        });
        return async (idOrOptions, confettiOptions) => {
            let subOptions, subId;
            if (engine.isString(idOrOptions)) {
                subId = idOrOptions;
                subOptions = confettiOptions ?? options;
            }
            else {
                subId = id;
                subOptions = idOrOptions;
            }
            return setConfetti(engine.tsParticles, {
                id: subId,
                canvas: canvas ?? undefined,
                options: subOptions,
            });
        };
    };
    confetti.init = async () => {
        await initPlugins(engine.tsParticles);
    };
    confetti.version = "4.0.5";
    globalThis.confetti = confetti;

    const globalObject = globalThis;
    globalObject.__tsParticlesInternals = globalObject.__tsParticlesInternals ?? {};
    globalObject.confetti = confetti;

    exports.confetti = confetti;

}));
Object.assign(globalThis.window || globalThis, { confetti: (globalThis.__tsParticlesInternals.bundles.confetti || {}).confetti });
delete (globalThis.window || globalThis).tsparticlesInternalExports;

// example with lib

import {
    Car
} from './js/Car.js';
import {
    Camera
} from './js/Camera.js';
import {
    Driver
} from './js/Driver.js';
import {
    Differential
} from './js/CarParts/Differential.js';

import {
    Maths
} from './js/Maths.js';
import {
    Suspension
} from './js/CarParts/Suspension.js';
import {
    Gearbox
} from './js/CarParts/Gearbox.js';

const cam = new Camera();

const driver = new Driver();

const diff = new Differential();

const gearbox = new Gearbox();

const suspension = new Suspension();

const car = new Car();

const {
    paint,
    price,
    carType,
    driveType,
    racingType,
    safetySystems,
    tireType,
    transmissionType,
    AImode,
    RPM,
    clutch,
    color,
    description,
    differential,
    distance,
    fuelConsumption,
    handling,
    hp,
    isLocked,
    isUsed,
    isWon,
    make,
    model,
    rearTrack,
    speed,
    tireExploit,
    topSpeed,
    turnRadius,
    weight,
    wheelBase,
    wheelColliders,
    wheelRadius,
    wheels
} = car;

document.querySelector('#ackermannLeft').textContent = Car.ackermannLeft(2, 2, 10);
document.querySelector('#ackermannRight').textContent = Car.ackermannRight(2, 2, 10);

document.querySelector('.randItem').textContent = Maths.randomItem(['viper', 'charger', 'mustang', 'z4']);

document.querySelector('.kmhToMph').textContent = `${Car.kmhToMph(100)} mph`
document.querySelector('.mphToKmh').textContent = `${Car.mphToKmh(100)} kmh`

document.querySelector('.mToKm').textContent = `${Car.mToKm(1000)} km`

document.querySelector('.mpsToKmh').textContent = `${Car.mpsToKmh(1)} kmh`

document.querySelector('.compressionDistance').textContent = `${suspension.compressionDistance(1000, 9.81, 5000)}`

// ------------Driver---------------

const {
    exp,
    level,
    name
} = driver

const {
    type
} = differential
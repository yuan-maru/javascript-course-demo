'use strict';

console.log('Mapty OOP Foundation');

class Workout {
    date = new Date();
    id = (Date.now() + '').slice(-10);
    clicks = 0;

    constructor(coords, distance, duration) {
        // stores the coordinates as an array of lat and long
        this.coords = coords;
        // stores distance in kilometers
        this.distance = distance;
        // stores duration in minutes
        this.duration = duration;
    }

    // generate workout description
    _setDescription() {
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ];

        // generate description
        this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
            months[this.date.getMonth()]
        } ${this.date.getDate()}`;
    }

    click() {
        this.clicks++;
    }
}

const testWorkout = new Workout([40.7128, -74.006], 5.2, 24);
console.log(testWorkout);

class Running extends Workout {
  type = 'running';

  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';

  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

//===== TESTING THE CLASS HIERARCHY =====
 
const run1 = new Running([39.7392, -104.9903], 5.2, 24, 178);
console.log('=== RUNNING WORKOUT ===');
console.log('Distance:', run1.distance, 'km');
console.log('Duration:', run1.duration, 'min');
console.log('Cadence:', run1.cadence, 'spm');
console.log('Pace:', run1.pace.toFixed(1), 'min/km');
console.log('Description:', run1.description);
console.log('ID:', run1.id);
 
const cycling1 = new Cycling([39.7392, -104.9903], 27, 95, 523);
console.log('=== CYCLING WORKOUT ===');
console.log('Distance:', cycling1.distance, 'km');
console.log('Duration:', cycling1.duration, 'min');
console.log('Elevation Gain:', cycling1.elevationGain, 'm');
console.log('Speed:', cycling1.speed.toFixed(1), 'km/h');
console.log('Description:', cycling1.description);
console.log('ID:', cycling1.id);
 
console.log('=== INHERITANCE TESTING ===');
console.log(
  'Both inherit from Workout:',
  run1 instanceof Workout,
  cycling1 instanceof Workout
);

console.log('=== TESTING GEOLOCATION API ===');

//DOM elements
//main formelement
const form = document.querySelector('.form');
//container workout list
const containerWorkouts = document.querySelector('.workouts');
//input type
const inputType = document.querySelector('.form__input--type');
//input distance
const inputDistance = document.querySelector('.form__input--distance');
//input duration
const inputDuration = document.querySelector('.form__input--duration');
//input cadence
const inputCadence = document.querySelector('.form__input--cadence');
//input elevation
const inputElevation = document.querySelector('.form__input--elevation');
class App {
  #map;
  #mapZoomLevel = 13;
  #mapEvent;
  #workouts = [];

  constructor() {
    console.log('App is starting');
    // Get user's position when app starts
    this._getPosition();

    form.addEventListener('submit', this._newWorkout.bind(this));
    // Attach event handler for workout type change
    inputType.addEventListener('change', this._toggleElevationField);
  }

  _getPosition() {
    if (navigator.geolocation) {
        console.log('🔍 Requesting user location...');
        navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        this._handleLocationError.bind(this),
        {
            timeout: 10000,
            enableHighAccuracy: true,
            maximumAge: 600000,
        }
        );
    } else {
        alert('❌ Geolocation is not supported by this browser');
        this._loadDefaultMap();
    }
  }

  _handleLocationError(error) {
      console.error('Geolocation error:', error);

      let message = 'Could not get your position. ';

      switch (error.code) {
      case error.PERMISSION_DENIED:
          message +=
          'Location access was denied. Please enable location services and refresh the page.';
          break;
      case error.POSITION_UNAVAILABLE:
          message += 'Location information is unavailable.';
          break;
      case error.TIMEOUT:
          message += 'Location request timed out.';
          break;
      default:
          message += 'An unknown error occurred.';
          break;
      }

      alert(`📍 ${message}`);
      this._loadDefaultMap();
  }

  _loadMap(position) {
    const { latitude, longitude } = position.coords;
    console.log(`Loading map at coordinates: ${latitude}, ${longitude}`);

    // create coords array
    // VERYY IMPORTANT!!
    const coords = [latitude, longitude];

    // initialize the map and and center at user's location
    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

    // add the tile layer to the map (the actual map image)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.#map);

    //add a marker to the map at user's location
    L.marker(coords).addTo(this.#map).bindPopup('Your Location').openPopup();

    //DIto
    this.#map.on('click', this._showForm.bind(this));

    console.log('Map loaded successfully at user location');
  }

  _loadDefaultMap() {
    console.log('Loading default map location around Manila');

    const defaultCoords = [14.604, 120.994];

    this.#map = L.map('map').setView(defaultCoords, this.#mapZoomLevel);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.#map);

    this.#map.on('click', this._showForm.bind(this));

    console.log('Default map loaded successfully');
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _toggleElevationField() {
    //turn on or display the elevation
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    //turns off ot hide the cadence
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _hideForm() {
    //empty the input fields
    inputDistance.value = 
      inputDuration.value = 
      inputCadence.value = 
      inputElevation.value = 
      '';

      //add hiding animation
    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }

  _newWorkout(e) {
    //helper function
    //validate input that they are actual numbers that make sense
    const validInputs = (...inputs) => 
      inputs.every(inp => Number.isFinite(inp));
    const allPositive = (...inputs) => 
      inputs.every(inp => inp > 0);

    //prevent the default form from submitting
    e.preventDefault();

    //store data or extract data
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    console.log(`creating a new ${type} workout: `, { distance, duration, lat, lng });

    //handle runnninng working
    if (type === 'running') {
      const cadence = +inputCadence.value;
      //validate all input elements are finite, postive, working
      if (
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
      return alert('Inputs have to be positive numbers!');

      workout = new Running([lat, lng], distance, duration, cadence);
    }

    //cycling workout creation
    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      //validate all input elements are finite, postive, working
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
      return alert('Inputs have to be positive numbers!');

      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    console.log('workout object created:', workout);

    this.#workouts.push(workout);

    this._renderWorkoutMarker(workout);
    
    this._renderWorkout(workout);
    
    this._hideForm();

    console.log('Workout creation complete!!');
  }

  _renderWorkout(workout) {
    //create the base html
    let html = `
    <li class="workout workout--${workout.type}" data-id="${workout.id}">
      <h2 class="workout__title">${workout.description}</h2>
      <div class="workout__details">
        <span class="workout__icon">${
          workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
        }</span>
        <span class="workout__value">${workout.distance}</span>
        <span class="workout__unit">km</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⏱</span>
        <span class="workout__value">${workout.duration}</span>
        <span class="workout__unit">min</span>
      </div>
  `;

  if (workout.type === 'running')
    html += `
      <div class="workout__details">
        <span class="workout__icon">⚡️</span>
        <span class="workout__value">${workout.pace.toFixed(1)}</span>
        <span class="workout__unit">min/km</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">🦶🏼</span>
        <span class="workout__value">${workout.cadence}</span>
        <span class="workout__unit">spm</span>
      </div>
    </li>
    `;

  if (workout.type === 'cycling')
    html += `
      <div class="workout__details">
        <span class="workout__icon">⚡️</span>
        <span class="workout__value">${workout.speed.toFixed(1)}</span>
        <span class="workout__unit">km/h</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⛰</span>
        <span class="workout__value">${workout.elevationGain}</span>
        <span class="workout__unit">m</span>
      </div>
    </li>
    `;

    form.insertAdjacentHTML('afterend', html);
  }

  _renderWorkoutMarker(workout) {
    L.marker(workout.coords).addTo(this.#map).bindPopup(L.popup(
      {
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: `${workout.type}-popup`,
      })
    )
    .setPopupContent(
      `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
    )
    .openPopup();
  }
}

const app = new App();
console.log('Hour 2 is complete!');

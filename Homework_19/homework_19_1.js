const apiKey = 'c3f306667b03c386ad4ac016e4c45ecb';
const city = 'Kyiv';

const loadingEl = document.getElementById('loading');
const refreshBtn = document.getElementById('refresh-btn');

const currentDateEl = document.getElementById('current-date');
const sunriseEl = document.getElementById('sunrise-time');
const batteryEl = document.getElementById('battery-status');
const timeBoxEl = document.getElementById('time-box');
const humidityEl = document.getElementById('humidity');
const pressureEl = document.getElementById('pressure');
const windEl = document.getElementById('wind');
const tempEl = document.getElementById('temp');
const feelsLikeEl = document.getElementById('feels-like');
const descEl = document.getElementById('weather-desc');
const iconEl = document.getElementById('weather-icon');
const updateDateEl = document.getElementById('update-date');

function getWindDirection(deg) {
  const directions = [
    'Пн',
    'Пн-Сх',
    'Сх',
    'Пд-Сх',
    'Пд',
    'Пд-Зх',
    'Зх',
    'Пн-Зх',
  ];
  const index = Math.round(deg / 45) % 8;
  return directions[index];
}

async function loadWeatherData() {
  if (loadingEl) loadingEl.style.display = 'flex';

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=uk`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    if (!response.ok) {
      throw new Error(data.message);
    }

    updateWidget(data);
  } catch (error) {
    console.error(error);
    alert(error.message);
  } finally {
    if (loadingEl) loadingEl.style.display = 'none';
  }
}

function updateWidget(data) {
  const now = new Date();

  const dateOptions = { month: 'short', day: 'numeric', year: 'numeric' };
  const weekdayOptions = { weekday: 'short' };
  const formattedDate = `${now.toLocaleDateString('uk-UA', dateOptions)} - ${now.toLocaleDateString('uk-UA', weekdayOptions)}`;
  if (currentDateEl) currentDateEl.textContent = formattedDate;

  if (data.sys && data.sys.sunrise) {
    const sunriseDate = new Date(data.sys.sunrise * 1000);
    const sunriseTime = sunriseDate.toLocaleTimeString('uk-UA', {
      hour: '2-digit',
      minute: '2-digit',
    });
    if (sunriseEl) sunriseEl.textContent = `☀️ світанок ${sunriseTime}`;
  }

  if (data.main) {
    if (humidityEl)
      humidityEl.textContent = `Вологість: ${data.main.humidity}%`;
    if (pressureEl)
      pressureEl.textContent = `Атм. тиск: ${Math.round(data.main.pressure * 0.750062)} мм рт. ст.`;
    if (tempEl) tempEl.textContent = `${Math.round(data.main.temp)}°C`;
    if (feelsLikeEl)
      feelsLikeEl.textContent = `Відчувається як: ${Math.round(data.main.feels_like)}°C`;
  }

  if (data.wind) {
    const windMsec = data.wind.speed;
    const windDir = getWindDirection(data.wind.deg);
    if (windEl) windEl.textContent = `Вітер: ${windMsec} м/c ${windDir}`;
  }

  if (data.weather && data.weather[0]) {
    const weatherInfo = data.weather[0];
    const description = weatherInfo.description;
    if (descEl)
      descEl.textContent =
        description.charAt(0).toUpperCase() + description.slice(1);
    if (iconEl)
      iconEl.src = `https://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`;
  }

  const updateOptions = {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };
  if (updateDateEl) {
    updateDateEl.textContent = now
      .toLocaleDateString('uk-UA', updateOptions)
      .replace(',', '');
  }
}

if (refreshBtn) {
  refreshBtn.addEventListener('click', loadWeatherData);
}

function liveClock() {
  function updateTime() {
    const now = new Date();
    let hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    timeBoxEl.innerHTML = `${hours}:${minutes}`;
  }

  updateTime();
  setInterval(updateTime, 1000);
}

async function checkBattery() {
  if ('getBattery' in navigator) {
    try {
      const battery = await navigator.getBattery();

      const updateBatteryUI = () => {
        if (batteryEl) {
          const chargeLevel = Math.round(battery.level * 100);

          const icon = battery.charging ? '🔌' : '🔋';

          batteryEl.textContent = `${icon} ${chargeLevel}%`;
        }
      };

      updateBatteryUI();

      battery.addEventListener('levelchange', updateBatteryUI);
      battery.addEventListener('chargingchange', updateBatteryUI);
    } catch (error) {
      console.error('Ошибка Battery API:', error);
      fallbackBatteryUI();
    }
  } else {
    fallbackBatteryUI();
  }
}

function fallbackBatteryUI() {
  if (batteryEl) batteryEl.textContent = '🔋 --%';
}

liveClock();
checkBattery();
loadWeatherData();

# Weather App

Aplicación del tiempo desarrollada con React y Vite que muestra el pronóstico extendido de los próximos 5 días para cualquier ciudad del mundo.

## Demo

[Ver aplicación en producción] https://react-weather-app-eg.netlify.app/

---

## Características

- Pronóstico extendido de 5 días con franjas horarias cada 3 horas
- Búsqueda de cualquier ciudad del mundo
- Temperatura en grados Celsius
- Iconos ilustrativos del estado del tiempo
- Por defecto muestra el pronóstico de Madrid

---

## Tecnologías

| Tecnología | Uso |
|------------|-----|
| React | Librería de UI |
| Vite | Bundler y entorno de desarrollo |
| Axios | Peticiones HTTP |
| OpenWeatherMap API | Datos meteorológicos |
| UUID | Generación de keys únicas |

---

## Instalación

1. Clona el repositorio

```bash
git clone https://github.com/Elegm92/weather_app.git
```

2. Instala las dependencias

```bash
npm install
```

3. Crea un archivo `.env` en la raíz del proyecto con tu API key de OpenWeatherMap

```
VITE_WEATHER_API_KEY=tu_api_key
```

4. Ejecuta el proyecto

```bash
npm run dev
```

---

## Estructura del proyecto

```
src/
├── WeatherCard/
│   ├── WeatherCard.jsx
│   └── WeatherCard.css
├── WeatherList/
│   ├── WeatherList.jsx
│   └── WeatherList.css
├── SearchForm/
│   ├── SearchForm.jsx
│   └── SearchForm.css
├── App.jsx
├── App.css
└── index.css
```

---

## API Key

Para usar la aplicación necesitas una API key gratuita de [OpenWeatherMap](https://openweathermap.org/api).

## Creadora
Desarrollado por Elena González como parte de un ejercicio del curso de React.

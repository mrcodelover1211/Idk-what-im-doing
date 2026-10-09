# Project MIRROR

A Windows desktop prototype for a city digital twin: live weather, optional OpenStreetMap road geometry, and illustrative what-if scenarios.

## Get the Windows executable
1. Open the **Actions** tab.
2. Select **Build Project MIRROR for Windows**.
3. Click **Run workflow** (or wait for the automatic build after a push to `main`).
4. Open the completed run and download the `Project-MIRROR-Windows-EXE` artifact.
5. Extract the artifact ZIP and run the portable `.exe`.

The EXE is built by a GitHub-hosted Windows runner; Python is not required on your PC. It is unsigned, so Windows may display a SmartScreen warning.

## Features
- Desktop window via Electron.
- Live weather from Open-Meteo (no key required for non-commercial use).
- Optional small road sample from OpenStreetMap public Overpass API.
- What-if scenarios: heavy rain, road closure, power outage and heatwave.
- Event log and clear separation between fetched data and simulated events.

## Limits
No live traffic or utility outage feed is connected. Scenario impacts are illustrative rules, not validated predictions. Do not use for emergency response or operational infrastructure decisions.

## Sources
- Weather: https://open-meteo.com/
- Map data: https://www.openstreetmap.org/copyright

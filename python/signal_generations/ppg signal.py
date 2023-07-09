import numpy as np
import matplotlib.pyplot as plt

# Sampling parameters
fs = 1000  # Sample rate (Hz)
T = 5  # Duration of signal (s)

# Sinusoidal waveform
f = 1  # Frequency (Hz)
t = np.arange(0, T, 1 / fs)
x = np.sin(2 * np.pi * f * t)

# Pulse waveform
duty_cycle = 0.3  # Duty cycle of square wave
systolic_duration = duty_cycle * 1 / f
diastolic_duration = (1 / f) - systolic_duration
pulse = np.concatenate([np.ones(int(systolic_duration * fs)), np.zeros(int(diastolic_duration * fs))])
pulse = np.tile(pulse, int(T * f))

# PPG signal
ppg = x + pulse

# Plot signal
plt.plot(t, ppg)
plt.xlabel('Time (s)')
plt.ylabel('Amplitude (mV)')
plt.show()

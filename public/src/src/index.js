@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #ffffff;
  color: #1e293b;
}

/* Custom CSS for Animations */
.animate-fadeInUp {
  animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-scaleIn {
  animation: scaleIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
}

/* Custom CSS for background animation */
.animated-bg-1 {
  animation: bg-move-1 25s linear infinite;
}

.animated-bg-2 {
  animation: bg-move-2 30s linear infinite;
}

.animated-bg-3 {
  animation: bg-move-3 20s linear infinite;
}

.animated-bg-4 {
  animation: bg-move-4 18s linear infinite;
}

.animated-bg-5 {
  animation: bg-move-5 22s linear infinite;
}

@keyframes bg-move-1 {
  from {
    transform: translate(0, 0) scale(0.5) rotate(0deg);
  }
  to {
    transform: translate(100%, -100%) scale(1.5) rotate(360deg);
  }
}

@keyframes bg-move-2 {
  from {
    transform: translate(0, 0) scale(1.5) rotate(0deg);
  }
  to {
    transform: translate(-100%, 100%) scale(0.5) rotate(-360deg);
  }
}

@keyframes bg-move-3 {
  from {
    transform: translate(0, 0) scale(1) rotate(0deg);
  }
  to {
    transform: translate(100%, -100%) scale(0.8) rotate(360deg);
  }
}

@keyframes bg-move-4 {
  from {
    transform: translate(0, 0) rotate(0deg);
  }
  to {
    transform: translate(-100%, 100%) rotate(-360deg);
  }
}

@keyframes bg-move-5 {
  from {
    transform: translate(0, 0) rotate(0deg);
  }
  to {
    transform: translate(-100%, -100%) rotate(180deg);
  }
}

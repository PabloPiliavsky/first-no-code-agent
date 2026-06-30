#!/bin/bash
# run.sh - Script unificado para la instalación y ejecución paralela de la aplicación de Notas

# Obtener ruta absoluta del directorio del script
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

echo "=== Iniciando configuración de la aplicación ==="

# 1. Instalación de Dependencias
echo "-> Instalando dependencias del Backend..."
cd "$DIR/workspace/backend" && npm install

echo "-> Instalando dependencias del Frontend..."
cd "$DIR/workspace/frontend" && npm install

# 2. Inicialización de la Base de Datos y Ejecución Concurrente
echo "-> Arrancando servidores..."
cd "$DIR/workspace/backend"
npm run dev &
BACKEND_PID=$!

cd "$DIR/workspace/frontend"
npm run dev &
FRONTEND_PID=$!

# Capturar señales de salida para cerrar ambos servidores al terminar
trap "kill $BACKEND_PID $FRONTEND_PID" EXIT

# Esperar a que los procesos finalicen
wait

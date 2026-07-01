#!/bin/bash
# run.sh - Script for the installation and parallel execution of the Notes application

# Get the absolute path of the script directory
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

echo "=== Starting application configuration ==="

# 1. Installing Dependencies
echo "-> Installing Backend dependencies..."
cd "$DIR/workspace/backend" && npm install

echo "-> Installing Frontend dependencies..."
cd "$DIR/workspace/frontend" && npm install

# 2. Database Initialization and Concurrent Execution
echo "-> Starting servers..."
cd "$DIR/workspace/backend"
npm run dev &
BACKEND_PID=$!

cd "$DIR/workspace/frontend"
npm run dev &
FRONTEND_PID=$!

# Trap exit signals to close both servers
trap "kill $BACKEND_PID $FRONTEND_PID" EXIT

# Wait for processes to finish
wait

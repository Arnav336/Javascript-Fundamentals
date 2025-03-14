#!/bin/bash
# Ask the user for the folder name
read -p "Enter the folder name: " FOLDER_NAME
# Create the folder if it doesn't exist
mkdir -p "$FOLDER_NAME"
# Check if both required scripts exist in the current directory
if [[ -f "createfiles.sh" && -f "createtestfiles.sh" ]]; then
    # Copy both scripts into the new folder
    cp createfiles.sh "$FOLDER_NAME/"
    cp createtestfiles.sh "$FOLDER_NAME/"
    echo "Copied createfiles.sh and createtestfiles.sh to $FOLDER_NAME/"
    # Move into the newly created directory
    cd "$FOLDER_NAME" || { echo "Error: Failed to move into $FOLDER_NAME"; exit 1; }
    echo "Now inside $FOLDER_NAME/"
    pwd # Show the current directory
else
    # Provide specific error messages about which file is missing
    if [[ ! -f "createfiles.sh" ]]; then
        echo "Error: createfiles.sh not found in the current directory!"
    fi
    if [[ ! -f "createtestfiles.sh" ]]; then
        echo "Error: createtestfiles.sh not found in the current directory!"
    fi
fi
echo "Task completed!"
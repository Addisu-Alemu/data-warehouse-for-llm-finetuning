# Use an official Python runtime as a parent image
FROM python:3.9-slim-buster

# Set the working directory in the container to /app
WORKDIR /app

# Add the current directory contents into the container at /app
ADD . /app

# Update the system and install Firefox
RUN apt-get update && apt-get install -y firefox-esr entr

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Make port 80 available to the world outside this container
EXPOSE 80

# Run news_scrapper.py when the container launches
CMD ls *.py | entr -r python main.py

# Use an official Python runtime as a parent image
FROM python:3.11.8-slim-bookworm

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . .

ENV PYTHONPATH "${PYTHONPATH}:/app"

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

RUN pip install mlflow tensorboard

ENV MLFLOW_TRACKING_URI=file:/mlflow

# Run train.py when the container launches
CMD ["python", "src/train.py"]

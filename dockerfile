# Use an official Python runtime as a parent image
FROM python:3.11.8-slim-bookworm

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . .

ENV PYTHONPATH "${PYTHONPATH}:/app"

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

RUN pip install mlflow

# Install TensorBoard
RUN pip install tensorboard

# Expose the port MLflow will use
EXPOSE 5000

# Run MLflow tracking server in the background and then start the main application
CMD mlflow server --backend-store-uri /app/mlruns --default-artifact-root /app/mlruns --host 0.0.0.0 & python -u src/train.py
# Run train.py when the container launches
# CMD ["python", "src/train.py"]

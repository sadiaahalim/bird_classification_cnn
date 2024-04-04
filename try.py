
import torch

# Check if CUDA is available
if torch.cuda.is_available():
    print("CUDA is available!")
else:
    print("CUDA is not available.")

# Check how many devices are available
num_devices = torch.cuda.device_count()
print(f"Number of CUDA devices: {num_devices}")

# Check which device is currently being used
current_device = torch.cuda.current_device()
print(f"Current device: {current_device}")

# Check the name of the device
device_name = torch.cuda.get_device_name(current_device)
print(f"Device name: {device_name}")

# Check the version of CUDA that PyTorch is using
cuda_version = torch.version.cuda
print(f"PyTorch CUDA version: {cuda_version}")
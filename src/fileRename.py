import os
#/* POMOCÍ PYTHONU PŘEJMENOVAT OBRÁZKY (ROZDĚLI DO SLOŽEK PODLE POČTU ZNAKŮ - VŽDY BUDE NÁZEV-MEDIUM a HOTOVO) */

def rename_files(directory_path):
    for filename in os.listdir(directory_path):
        # Construct the new filename by removing characters 5-8
        new_filename = filename[:3] + filename[8:]
        
        # Full path of the current file
        old_path = os.path.join(directory_path, filename)
        
        # Check if the new filename already exists
        counter = 1
        while os.path.exists(os.path.join(directory_path, new_filename)):
            # If the new filename exists, add a counter to make it unique
            new_filename = f"{filename[:4]}_{counter}{filename[9:]}"
            counter += 1
        
        new_path = os.path.join(directory_path, new_filename)
        
        # Rename the file
        os.rename(old_path, new_path)
        print(f'Renamed: {filename} -> {new_filename}')

# Replace 'path/to/your/files' with the actual path to your files
directory_path = './media/trimistny'
rename_files(directory_path)

const MAX_FILES = 10;
const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50 MB
const ALLOWED_EXTENSIONS = ['png', 'jpg', 'jpeg', 'pdf', 'doc', 'docx'];

export const validateName = (name) => {
    const nameRegex = /^[a-zA-Z]{2,}$/;
    return nameRegex.test(name);
};

export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const handleFiles = (files) => {
    const fileList = document.getElementById("fileList");

    fileList.innerHTML = "";
    const validFiles = [];
    let totalFiles = files.length;

    if (totalFiles > MAX_FILES) {
        fileList.innerHTML = `<div class="error">You can upload a maximum of ${MAX_FILES} files.</div>`;
        return;
    }

    Array.from(files).forEach((file) => {
        const fileExtension = file.name.split('.').pop().toLowerCase();
        if (!ALLOWED_EXTENSIONS.includes(fileExtension)) {
            fileList.innerHTML += `<div class="error">${file.name} has an unsupported file type.</div>`;
        } else if (file.size > MAX_FILE_SIZE) {
            fileList.innerHTML += `<div class="error">${file.name} exceeds the 50MB size limit.</div>`;
        } else {
            validFiles.push(file);
            fileList.innerHTML += `<div>${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)</div>`;
        }
    });

    console.log("Valid files:", validFiles);
};

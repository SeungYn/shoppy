export async function uploadImge(file) {
  const data = new FormData();
  data.append('file', file);
  data.append('upload_preset', process.env.REACT_APP_CLOUDINARY_PRESET);
  fetch(process.env.REACT_APP_CLOUDINARY_URL);
}

export async function uploadImge(file) {
  const data = new FormData();
  data.append('file', file);
  data.append('upload_preset', process.env.REACT_APP_CLOUDINARY_PRESET);
	await fetch(process.env.REACT_APP_CLOUDINARY_URL, {
		method: 'POST',
		body:data
	});
}

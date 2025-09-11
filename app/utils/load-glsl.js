export async function loadGLSL(url) {
  const response = await fetch(url);
  return await response.text();
}
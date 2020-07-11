export function getFileExtension(file) {
  const nameSplit = file.name.split('.');
  const fileExtension = nameSplit[nameSplit.length - 1];

  return fileExtension;
}

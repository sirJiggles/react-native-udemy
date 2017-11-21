
// a reducer cannot return undefined, but can be null for first boot
// as we do not know what row will be selected
export default () => {
  return null
}
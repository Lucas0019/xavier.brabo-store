export function cleanName(name: string) {

  const nameFormatUrl = name.split(" ").join("-")
  const nameFormatUrlClean = nameFormatUrl.toLocaleLowerCase().replace(/[%$#@!]/g, "")
  const nameFormatUrlLink = nameFormatUrlClean.replace(/[&]/g, "%26").replace(/[&]/g, "%26")

  return nameFormatUrlLink
}

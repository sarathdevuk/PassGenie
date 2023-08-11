export default function copyToClipboard(password :string ) : void {
  navigator.clipboard.writeText(password)
}
import {readdir} from 'node:fs/promises'

const files = await readdir('./')

for (const file of files) {
  console.log(file)
}

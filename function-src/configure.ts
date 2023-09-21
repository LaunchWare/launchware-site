import { join, resolve } from "path"
import { fileURLToPath } from "url"

export const configure = async () => {
  try {
    const dotenv = await import("dotenv")
    const envPath = resolve(join(__dirname, "../functions/.env"))
    dotenv.config({
      path: envPath
    })
  }
  catch (error) {
    if (["development", "test", "e2e"].includes(process.env.NODE_ENV || "development")) {
      throw error
    }
  }
}

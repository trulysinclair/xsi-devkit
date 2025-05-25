import createClient from "openapi-fetch";
import {paths as xsiActionsPaths} from "../types/xsi-actions.js"
import {paths as xsiEventsPaths} from "../types/xsi-events.js"

type ClientConfig = {
  /** The hostname for the endpoint. (i.e., https://<subdomains>.nextiva.com) */
  hostname: string
  /** The username for authentication. (XSI-specific) */
  username: string
  /** The password for authentication. (XSI-specific) */
  password: string
  /** Instruct XSI to send JSON responses. */
  useJson?: boolean
  /** Optional base path for the XSI-Actions API. Defaults to `"com.broadsoft.xsi-<actions|events>/v2.0"` if not provided. */
  xsiBasePath?: string
}

/**
 * Creates a client instance configured for BroadSoft XSI-Actions API interactions.
 */
export const xsiActions = ({
  hostname,
  username,
  password,
  xsiBasePath
}: ClientConfig): ReturnType<typeof createClient<xsiActionsPaths>> => createClient<xsiActionsPaths>({
  baseUrl: new URL(xsiBasePath || "com.broadsoft.xsi-actions/v2.0", hostname).toString(),
  headers: {
    "Authorization": `Basic ${Buffer.from(`${username}:${password}`).toString("base64")}`,
    // TODO make json optional
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
})

/**
 * Creates a client instance configured for BroadSoft XSI-Events API interactions.
 */
export const xsiEvents = ({
  hostname,
  username,
  password,
  xsiBasePath
}: ClientConfig): ReturnType<typeof createClient<xsiEventsPaths>> => createClient<xsiEventsPaths>({
  baseUrl: new URL(xsiBasePath || "com.broadsoft.xsi-events/v2.0", hostname).toString(),
  headers: {
    "Authorization": `Basic ${Buffer.from(`${username}:${password}`).toString("base64")}`,
    // TODO make json optional
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
})
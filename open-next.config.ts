import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Every page is static, so no R2 incremental cache is needed.
export default defineCloudflareConfig();

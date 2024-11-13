/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly MAILTRAP_AUTH_USER: string
    readonly MAILTRAP_AUTH_PASS: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
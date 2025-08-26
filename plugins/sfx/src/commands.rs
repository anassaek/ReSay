use crate::{AppSounds, SfxPluginExt};

#[tauri::command]
#[specta::specta]
pub async fn play<R: tauri::Runtime>(app: tauri::AppHandle<R>, sfx: AppSounds) {
    app.play(sfx)
}

#[tauri::command]
#[specta::specta]
pub async fn stop<R: tauri::Runtime>(app: tauri::AppHandle<R>, sfx: AppSounds) {
    app.stop(sfx)
}

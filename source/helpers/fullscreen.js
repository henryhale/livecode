import { ref } from "vue";

export function useFullscreen() {
    const target = document.documentElement;
    const isFullscreen = ref(false);

    const fullscreenMethod = [
        "requestFullscreen",
        "webkitRequestFullscreen",
        "webkitEnterFullscreen",
        "webkitEnterFullScreen",
        "webkitRequestFullScreen",
        "mozRequestFullScreen",
        "msRequestFullscreen"
    ].find((m) => (document && m in document) || (target && m in target));

    const exitFullscreenMethod = [
        "exitFullscreen",
        "webkitExitFullscreen",
        "webkitExitFullScreen",
        "webkitCancelFullScreen",
        "mozCancelFullScreen",
        "msExitFullscreen"
    ].find((m) => (document && m in document) || (target && m in target));

    const enterFullscreen = async () => {
        try {
            if (document[fullscreenMethod]) {
                await document[fullscreenMethod]();
            } else if (target[fullscreenMethod]) {
                await target[fullscreenMethod]();
            }
            isFullscreen.value = true;
        } catch (err) {
            console.error("[livecode] failed to enter fullscreen:", err);
        }
    };

    const exitFullscreen = async () => {
        if (document.fullscreenElement) {
            try {
                if (document[exitFullscreenMethod]) {
                    await document[exitFullscreenMethod]();
                } else if (target[exitFullscreenMethod]) {
                    await target[exitFullscreenMethod]();
                }
                isFullscreen.value = false;
            } catch (err) {
                console.error("[livecode]: failed to exit fullscreen:", err);
            }
        }
    };

    const toggleFullscreen = async () => {
        console.log(isFullscreen.value);
        if (isFullscreen.value) {
            await exitFullscreen();
        } else {
            await enterFullscreen();
        }
    };

    document.addEventListener("fullscreenchange", () => {
        isFullscreen.value = !!document.fullscreenElement;
    });

    return {
        isFullscreen,
        toggle: toggleFullscreen
    };
}

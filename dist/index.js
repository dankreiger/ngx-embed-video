"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var embed_video_service_1 = require("./src/embed-video.service");
__export(require("./src/embed-video.service"));
var EmbedVideo = /** @class */ (function () {
    function EmbedVideo() {
    }
    EmbedVideo.forRoot = function () {
        return {
            ngModule: EmbedVideo,
            providers: [embed_video_service_1.EmbedVideoService]
        };
    };
    EmbedVideo.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: [],
                    exports: [],
                    providers: [embed_video_service_1.EmbedVideoService]
                },] },
    ];
    return EmbedVideo;
}());
exports.EmbedVideo = EmbedVideo;
//# sourceMappingURL=index.js.map
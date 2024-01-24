
const { ccclass, property } = cc._decorator;

@ccclass
export default class WebCtrl extends cc.Component {

    @property(cc.WebView)
    web: cc.WebView = null;

    @property
    url: string = 'resources/index.html';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        if (!this.web) {
            this.web = this.getComponent(cc.WebView)
        }

        if (!this.web) {
            cc.warn('No web view component')
        }

    }

    redirect(url: string) {
        this.web.url = url;
    }

    goHome() {
        this.web.url = this.url;
    }
    // update (dt) {}
}

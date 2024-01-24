
const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property
    gameUrl: string = 'https://casino-lobby-stg.a5labsapp.co/preview';

    // webController: WebCtrl = null;

    web: cc.WebView = null;
    url: string = 'assets/resources/index.html';

    localWebDataUrl: string = null;

    start () {
        // init logic

        if (!this.web) {
            this.web = this.getComponentInChildren(cc.WebView);
        }

        if (!this.web) {
            cc.warn('No webView!!!')
        }

        // this.webController = this.getComponentInChildren(WebCtrl);

        cc.resources.load("index", cc.TextAsset, (err, asset: cc.TextAsset) => {
            if (err) {
                cc.error('Load res index failed');
                return;
            }

            cc.log('Loaded resource index', asset.text);

            const dataUrl = `data:text/html;base64,${btoa(asset.text)}`;
            this.localWebDataUrl = dataUrl;
        })
    }

    onBtnClick() {
        // this.webController.redirect(this.gameUrl);
        this.web.url = this.gameUrl;

    }

    onBtnHomeClick() {
        // this.webController.goHome();
        this.web.url = this.localWebDataUrl;

    }
}

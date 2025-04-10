import * as params from "@params";

export default class Button {
    private btn: HTMLButtonElement

    constructor(icon: string) {
        const btn = document.createElement('button')
        btn.className = 'hb-back-to-top'
        btn.ariaLabel = 'Back to top'
        btn.innerHTML = this.transformIcon(icon)
        document.body.appendChild(btn)
        this.btn = btn

        let y = 0
        window.addEventListener('scroll', () => {
            const top = document.documentElement.scrollTop
            if (document.body.scrollTop > 20 || top > 20) {
                this.show();
            } else {
                this.hide();
            }
            if (this.animation() && top > y) {
                btn.classList.remove('scrolling')
            }
            y = top
            this.updatePos()
        });

        this.btn.addEventListener('click', () => {
            this.animation() && btn.classList.add('scrolling')
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
            })
        })
    }

    transformIcon(icon) {
        return icon.replace(/<svg(.*)>((.|\n)*)<\/svg>/, `<svg$1>
  <defs><clipPath id="icon">$2</clipPath></defs>
  <rect x="0" y="0" fill="currentColor" width="100%" height="100%" clip-path="url(#icon)" />
  <rect x="0" y="100%" width="100%" height="100%" clip-path="url(#icon)" />
</svg>`)
    }

    private posIcon: HTMLElement

    updatePos() {
        if (!this.posIcon) {
            this.posIcon = this.btn.querySelectorAll<HTMLElement>('rect')[1]
        }
        const pos = document.documentElement.scrollTop / (document.documentElement.offsetHeight - document.documentElement.clientHeight)
        this.posIcon.setAttribute('y', (1 - pos) * 100 + '%')
    }

    show() {
        this.btn.classList.add('show')
    }

    hide() {
        this.btn.classList.remove('show')
    }

    animation(): boolean {
        return params?.back_to_top?.animation !== false
    }
}

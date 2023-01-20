import { Component, h, Listen, Prop } from '@stencil/core';
import { ButtonType } from '../../models/enums/ButtonType.enum';


@Component({
    tag: 'pnk-button',
    styleUrl: 'button.css'
})
export class Button {

    @Prop() type: ButtonType = ButtonType.Primary;
    @Prop() disabled: boolean = false;

    @Listen('click', {capture: true}) handleClick(ev: MouseEvent) {
        if (this.disabled) {
            ev.preventDefault();
            ev.stopPropagation();
        }
    }

    getClassByType() {
        let classes = ["pnk-text-base pnk-font-base flex flex-row pnk-px-5 pnk-py-2.5 pnk-rounded"];

        switch (this.type) {
            case ButtonType.Primary:
                if(this.disabled){
                    classes.push("pnk-bg-disabled-base pnk-text-disabled-text");
                }else{
                    classes.push("pnk-bg-primary-base pnk-text-white hover:pnk-bg-primary-hover ");
                }
                break;
            case ButtonType.Secondary:
                if(this.disabled){
                    classes.push("pnk-bg-disabled-base pnk-text-disabled-text");
                }else{
                classes.push("pnk-bg-secondary-base pnk-text-primary-base hover:pnk-bg-secondary-hover hover:pnk-text-white");
                }
                break;
            case ButtonType.Text:
                if(this.disabled){
                    classes.push("pnk-text-disabled-text");
                }else{
                    classes.push("pnk-text-primary-base hover:pnk-text-primary-hover");
                }
                break;
        }

        return classes.join(' ');
    }

    render() {
        return (
           <button class={this.getClassByType()} disabled={this.disabled}>
                <slot></slot>
            </button>
        );
    }
}

import { Injectable } from '@angular/core';
import { AnimationController, createAnimation } from '@ionic/angular';

@Injectable()
export class TransformAnimationService {
    constructor(private animationController: AnimationController) { }

    public transformAnimationElements(elements: HTMLElement[], delay: number): void {
        const animationArray = [];
        const DURATION = 200;
        for(let i = 0; i <= elements.length; i++) {
            const animation = this.animationController.create()
            .addElement(elements[i])
            .easing('cubic-bezier(0, 0.55, 0.45, 1)')
            .duration(DURATION)
            .delay(i * delay)
            .fromTo('opacity', 0, 1)
            .fromTo('transform', 'translateY(100%)', 'translateY(0)')
            animationArray.push(animation)
        }
    
        animationArray.forEach((animation: Animation) => {
            animation.play();
          });
       
    }
    
}
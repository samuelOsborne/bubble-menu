import './style.css'
import { BubbleMenu } from './bubbleMenu.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1 class="p-10">Right Click Bubbles</h1>
    
    <div id="target">Right-click me to see custom menu</div>

    <div class="w-40 h-52">
      <div class="context-menu" id="context-menu-l">
          <div class="context-menu-item m-1" id="item-1"></div>
          <div class="context-menu-item m-1" id="item-2"></div>
          <div class="context-menu-item m-1" id="item-3"></div>
          <div class="context-menu-item m-1" id="item-4"></div>
          <div class="context-menu-item m-1" id="item-5"></div>
          
      </div>

      <div class="context-menu" id="context-menu-r">
          <div class="context-menu-item m-1" id="item-6"></div>
          <div class="context-menu-item m-1" id="item-7"></div>
          <div class="context-menu-item m-1" id="item-8"></div>
          <div class="context-menu-item m-1" id="item-9"></div>
          <div class="context-menu-item m-1" id="item-10"></div>
      </div>
    </div>
  </div>
`

BubbleMenu()
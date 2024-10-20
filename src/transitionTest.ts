import './style.css'
import { SingleBubble } from './singleBubble'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1 class="p-10">Right Click Bubble Menu</h1>
    
    <div id="menu-container" style="">
      <div class="context-menu-item context-menu-item-l m-1" id="item-1"></div>
      <div class="context-menu-item context-menu-item-l m-1" id="item-2"></div>
      <div class="context-menu-item context-menu-item-l m-1" id="item-3"></div>
      <div class="context-menu-item context-menu-item-l m-1" id="item-4"></div>
      <div class="context-menu-item context-menu-item-l m-1" id="item-5"></div>
      
      <div class="context-menu-item context-menu-item-r m-1" id="item-6"></div>
      <div class="context-menu-item context-menu-item-r m-1" id="item-7"></div>
      <div class="context-menu-item context-menu-item-r m-1" id="item-8"></div>
      <div class="context-menu-item context-menu-item-r m-1" id="item-9"></div>
      <div class="context-menu-item context-menu-item-r m-1" id="item-10"></div>
    </div>
    <!--
    -->
  </div>
`
SingleBubble()
// BubbleMenu()
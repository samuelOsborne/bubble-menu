let open = false;

export function SingleBubble() {
    document.addEventListener('DOMContentLoaded', () => {
        const target = document.getElementById('app');
        const itemsLeft = document.querySelectorAll('.context-menu-item-l');
        const itemsRight = document.querySelectorAll('.context-menu-item-r');
        const offsets = [90, 110, 90, 50];

        let close = (m: MouseEvent) => {
            open = false;

            // set the cursor to default
            document.body.style.cursor = 'default';

            for (let i = 0; i < itemsLeft.length; i++) {                    
                let item = itemsLeft[i] as HTMLElement;
                item.classList.remove('ready');

                item.style.left = `${m.clientX-15}px`;
                item.style.top = `${m.clientY-15}px`;
                item.style.opacity = '0';
            }

            for (let i = 0; i < itemsRight.length; i++) {                    
                let item = itemsRight[i] as HTMLElement;
                item.classList.remove('ready');

                item.style.left = `${m.clientX-15}px`;
                item.style.top = `${m.clientY-15}px`;
                item.style.opacity = '0';
            }
        }

        if (target && itemsLeft.length > 0 && itemsRight.length > 0) {
            target.addEventListener('contextmenu', (event) => {
                event.preventDefault();

                if (open) {
                    close(event as MouseEvent);
                    open = false;
                    return;
                }

                open = true;

                const mouseEvent = event as MouseEvent;
                
                let offsetX = 50;
                let offsetY = 90;
                for (let i = 0; i < itemsLeft.length; i++) {
                    let item = itemsLeft[i] as HTMLElement;
                    item.style.display = 'block';

                    item.style.opacity = '1';

                    // Start pos is the mouse pos
                    let startPosX = mouseEvent.pageX-15 - item.clientWidth / 2;
                    let startPosY = mouseEvent.pageY-15 - item.clientHeight / 2;

                    item.style.left = `${startPosX}px`;
                    item.style.top = `${startPosY}px`;

                    let endPosX = (mouseEvent.pageX - item.clientWidth / 2) - offsetX;
                    let endPosY = (mouseEvent.pageY - item.clientHeight / 2) - offsetY;

                    item.style.left = `${endPosX}px`;
                    item.style.top = `${endPosY}px`;
                     
                    offsetY -= 50;
                    offsetX = offsets[i];

                    setTimeout(() => {
                        item.classList.add('ready');
                    }, 100);
                }
                
                offsetX = 50;
                offsetY = 90;
                
                for (let i = 0; i < itemsRight.length; i++) {
                    let item = itemsRight[i] as HTMLElement;
                    item.style.display = 'block';

                    item.style.opacity = '1';

                    // Start pos is the mouse pos
                    let startPosX = mouseEvent.pageX - item.clientWidth / 2;
                    let startPosY = mouseEvent.pageY - item.clientHeight / 2;

                    item.style.left = `${startPosX}px`;
                    item.style.top = `${startPosY}px`;

                    let endPosX = (mouseEvent.pageX - item.clientWidth / 2) + offsetX;
                    let endPosY = (mouseEvent.pageY - item.clientHeight / 2) - offsetY;

                    item.style.left = `${endPosX}px`;
                    item.style.top = `${endPosY}px`;
                     
                    offsetY -= 50;
                    offsetX = offsets[i];

                    setTimeout(() => {
                        item.classList.add('ready');
                    }, 100);

                }
            })

            // Hide menu when clicking outside
            document.addEventListener('click', (e) => {
                let m = e as MouseEvent;
                close(m);
            });
        }
    });
}